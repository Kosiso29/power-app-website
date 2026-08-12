"use client";

import { useEffect, useRef } from "react";

type Mesh = {
  positions: Float32Array;
  normals: Float32Array;
  indices: Uint16Array;
};

type DrawableMesh = Mesh & {
  material: number;
  positionBuffer: WebGLBuffer;
  normalBuffer: WebGLBuffer;
  indexBuffer: WebGLBuffer;
};

type Point2D = {
  x: number;
  y: number;
};

const vertexShaderSource = `
attribute vec3 aPosition;
attribute vec3 aNormal;

uniform mat4 uModel;
uniform mat4 uViewProjection;

varying vec3 vNormal;
varying vec3 vWorldPosition;
varying vec3 vObjectPosition;

void main() {
  vec4 worldPosition = uModel * vec4(aPosition, 1.0);
  vObjectPosition = aPosition;
  vWorldPosition = worldPosition.xyz;
  vNormal = mat3(uModel) * aNormal;
  gl_Position = uViewProjection * worldPosition;
}
`;

const fragmentShaderSource = `
precision mediump float;

uniform vec3 uCameraPosition;
uniform float uMaterial;

varying vec3 vNormal;
varying vec3 vWorldPosition;
varying vec3 vObjectPosition;

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDirection = normalize(uCameraPosition - vWorldPosition);

  vec3 lightOne = normalize(vec3(-0.45, 0.7, 0.58));
  vec3 lightTwo = normalize(vec3(0.65, -0.22, 0.42));
  vec3 rimLight = normalize(vec3(0.15, 0.22, -0.9));

  float diffuseOne = max(dot(normal, lightOne), 0.0);
  float diffuseTwo = max(dot(normal, lightTwo), 0.0);
  float rim = pow(1.0 - max(dot(normal, viewDirection), 0.0), 2.2);

  vec3 halfVector = normalize(lightOne + viewDirection);
  float specular = pow(max(dot(normal, halfVector), 0.0), 68.0);

  vec3 deepBlue = vec3(0.02, 0.07, 0.27);
  vec3 electricBlue = vec3(0.145, 0.388, 0.922);
  vec3 cyan = vec3(0.024, 0.714, 0.831);
  vec3 white = vec3(0.96, 0.985, 1.0);

  if (uMaterial > 0.5) {
    float faceStrength = pow(abs(normal.z), 0.65);
    float verticalSparkMix = smoothstep(-1.18, 1.18, vObjectPosition.y);
    vec3 sparkBase = mix(electricBlue, cyan, verticalSparkMix);
    sparkBase = mix(deepBlue, sparkBase, 0.82);

    float sparkSpecular = pow(max(dot(normal, halfVector), 0.0), 86.0);
    float bevelGlint = pow(max(dot(normal, lightOne), 0.0), 20.0);
    vec3 sparkColor = sparkBase * (0.38 + diffuseOne * 0.8 + diffuseTwo * 0.38);
    sparkColor += white * sparkSpecular * 1.18;
    sparkColor += white * faceStrength * 0.2;
    sparkColor += cyan * rim * 0.44;
    sparkColor += white * bevelGlint * 0.24;

    gl_FragColor = vec4(sparkColor, 0.94);
    return;
  }

  float verticalMix = smoothstep(-1.2, 1.2, vWorldPosition.y);
  vec3 base = mix(electricBlue, cyan, verticalMix);
  base = mix(deepBlue, base, 0.76);

  vec3 color = base * (0.42 + diffuseOne * 0.78 + diffuseTwo * 0.34);
  color += white * specular * 0.95;
  color += cyan * rim * 0.58;
  color += white * smoothstep(0.72, 1.0, dot(normal, rimLight)) * 0.22;

  float objectAngle = atan(vObjectPosition.y, vObjectPosition.x);
  float movingGlassBand = pow(
    max(cos(objectAngle * 3.0 + vObjectPosition.z * 9.0), 0.0),
    18.0
  );
  float movingEdgeGlint = pow(
    max(cos(objectAngle * 5.0 - vObjectPosition.z * 12.0), 0.0),
    32.0
  );

  color += white * movingGlassBand * 0.24;
  color += cyan * movingEdgeGlint * 0.18;

  gl_FragColor = vec4(color, 0.92);
}
`;

export function Cyberwatt3DLogo() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
    });

    if (!gl) {
      return;
    }

    const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
    const meshes = [
      createDrawableMesh(gl, createPowerRingMesh(), 0),
      createDrawableMesh(gl, createSparkMesh(), 1),
    ];

    const positionLocation = gl.getAttribLocation(program, "aPosition");
    const normalLocation = gl.getAttribLocation(program, "aNormal");
    const modelLocation = gl.getUniformLocation(program, "uModel");
    const viewProjectionLocation = gl.getUniformLocation(program, "uViewProjection");
    const cameraLocation = gl.getUniformLocation(program, "uCameraPosition");
    const materialLocation = gl.getUniformLocation(program, "uMaterial");

    gl.useProgram(program);
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let isInView = false;
    let isPageVisible = document.visibilityState === "visible";
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = reducedMotionQuery.matches;
    const cameraPosition: [number, number, number] = [0, 0, 5.2];
    const startedAt = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.25);
      const nextWidth = Math.max(1, Math.floor(rect.width * pixelRatio));
      const nextHeight = Math.max(1, Math.floor(rect.height * pixelRatio));

      if (nextWidth === width && nextHeight === height) {
        return;
      }

      width = nextWidth;
      height = nextHeight;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    };

    const render = (time: number) => {
      resize();

      const aspect = width / height || 1;
      const elapsed = reduceMotion ? 0.9 : (time - startedAt) / 1000;
      const spin = elapsed * 0.86;
      const projection = perspective((36 * Math.PI) / 180, aspect, 0.1, 100);
      const view = lookAt(cameraPosition, [0, 0, 0], [0, 1, 0]);
      const viewProjection = multiply(projection, view);
      const model = multiply(
        rotationZ(-0.16),
        multiply(rotationX(-0.38), rotationY(spin))
      );

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.uniformMatrix4fv(modelLocation, false, model);
      gl.uniformMatrix4fv(viewProjectionLocation, false, viewProjection);
      gl.uniform3fv(cameraLocation, cameraPosition);

      for (const mesh of meshes) {
        gl.bindBuffer(gl.ARRAY_BUFFER, mesh.positionBuffer);
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, mesh.normalBuffer);
        gl.enableVertexAttribArray(normalLocation);
        gl.vertexAttribPointer(normalLocation, 3, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.indexBuffer);
        gl.uniform1f(materialLocation, mesh.material);
        gl.drawElements(gl.TRIANGLES, mesh.indices.length, gl.UNSIGNED_SHORT, 0);
      }
    };

    const shouldAnimate = () => !reduceMotion && isInView && isPageVisible;

    const stopAnimation = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    };

    const tick = (time: number) => {
      animationFrame = 0;

      if (!shouldAnimate()) {
        return;
      }

      render(time);
      animationFrame = requestAnimationFrame(tick);
    };

    const syncAnimation = () => {
      if (!shouldAnimate()) {
        stopAnimation();
        return;
      }

      if (!animationFrame) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();

      if (!shouldAnimate()) {
        render(performance.now());
      }
    });

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isInView = entry.isIntersecting;

        if (isInView) {
          render(performance.now());
        }

        syncAnimation();
      },
      {
        rootMargin: "220px 0px",
        threshold: 0,
      }
    );

    const handleVisibilityChange = () => {
      isPageVisible = document.visibilityState === "visible";

      if (isPageVisible && isInView) {
        render(performance.now());
      }

      syncAnimation();
    };

    const handleMotionPreferenceChange = () => {
      reduceMotion = reducedMotionQuery.matches;

      if (reduceMotion) {
        stopAnimation();
        render(performance.now());
        return;
      }

      syncAnimation();
    };

    root?.classList.add("is-webgl-ready");
    resizeObserver.observe(canvas);
    intersectionObserver.observe(root ?? canvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotionQuery.addEventListener("change", handleMotionPreferenceChange);
    render(startedAt);
    syncAnimation();

    return () => {
      root?.classList.remove("is-webgl-ready");
      stopAnimation();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotionQuery.removeEventListener("change", handleMotionPreferenceChange);

      for (const mesh of meshes) {
        gl.deleteBuffer(mesh.positionBuffer);
        gl.deleteBuffer(mesh.normalBuffer);
        gl.deleteBuffer(mesh.indexBuffer);
      }

      gl.deleteProgram(program);
    };
  }, []);

  return (
    <div className="how-3d-logo" ref={rootRef} aria-hidden="true">
      <span className="how-3d-fallback-ring" />
      <canvas className="how-3d-canvas" ref={canvasRef} />
    </div>
  );
}

function createDrawableMesh(
  gl: WebGLRenderingContext,
  mesh: Mesh,
  material: number
): DrawableMesh {
  const positionBuffer = gl.createBuffer();
  const normalBuffer = gl.createBuffer();
  const indexBuffer = gl.createBuffer();

  if (!positionBuffer || !normalBuffer || !indexBuffer) {
    throw new Error("Unable to create WebGL buffers.");
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, mesh.positions, gl.STATIC_DRAW);

  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, mesh.normals, gl.STATIC_DRAW);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, mesh.indices, gl.STATIC_DRAW);

  return {
    ...mesh,
    material,
    positionBuffer,
    normalBuffer,
    indexBuffer,
  };
}

function createPowerRingMesh(): Mesh {
  const arcSegments = 126;
  const tubeSegments = 20;
  const radius = 1.34;
  const tubeRadius = 0.18;
  const startAngle = (135 * Math.PI) / 180;
  const endAngle = (405 * Math.PI) / 180;
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];

  for (let arc = 0; arc <= arcSegments; arc += 1) {
    const arcRatio = arc / arcSegments;
    const angle = startAngle + (endAngle - startAngle) * arcRatio;
    const radialX = Math.cos(angle);
    const radialY = Math.sin(angle);

    for (let tube = 0; tube < tubeSegments; tube += 1) {
      const tubeRatio = tube / tubeSegments;
      const tubeAngle = tubeRatio * Math.PI * 2;
      const tubeX = Math.cos(tubeAngle);
      const tubeZ = Math.sin(tubeAngle);
      const normalX = radialX * tubeX;
      const normalY = radialY * tubeX;
      const normalZ = tubeZ;

      positions.push(
        (radius + tubeRadius * tubeX) * radialX,
        (radius + tubeRadius * tubeX) * radialY,
        tubeRadius * tubeZ
      );
      normals.push(normalX, normalY, normalZ);
    }
  }

  for (let arc = 0; arc < arcSegments; arc += 1) {
    const currentArcStart = arc * tubeSegments;
    const nextArcStart = (arc + 1) * tubeSegments;

    for (let tube = 0; tube < tubeSegments; tube += 1) {
      const nextTube = (tube + 1) % tubeSegments;
      const current = currentArcStart + tube;
      const next = nextArcStart + tube;
      const tubeNext = currentArcStart + nextTube;
      const nextTubeNext = nextArcStart + nextTube;

      indices.push(current, next, tubeNext, tubeNext, next, nextTubeNext);
    }
  }

  addRoundedCap(0, -1);
  addRoundedCap(arcSegments, 1);

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    indices: new Uint16Array(indices),
  };

  function addRoundedCap(arcIndex: number, direction: -1 | 1) {
    const capSegments = 8;
    const angle =
      startAngle + (endAngle - startAngle) * (arcIndex / arcSegments);
    const centerX = radius * Math.cos(angle);
    const centerY = radius * Math.sin(angle);
    const radialX = Math.cos(angle);
    const radialY = Math.sin(angle);
    const tangentX = -Math.sin(angle) * direction;
    const tangentY = Math.cos(angle) * direction;
    let previousRingStart = arcIndex * tubeSegments;

    for (let cap = 1; cap < capSegments; cap += 1) {
      const capAngle = (cap / capSegments) * (Math.PI / 2);
      const radialScale = Math.cos(capAngle);
      const tangentScale = Math.sin(capAngle);
      const ringStart = positions.length / 3;

      for (let tube = 0; tube < tubeSegments; tube += 1) {
        const tubeRatio = tube / tubeSegments;
        const tubeAngle = tubeRatio * Math.PI * 2;
        const tubeX = Math.cos(tubeAngle);
        const tubeZ = Math.sin(tubeAngle);
        const normalX = radialX * tubeX * radialScale + tangentX * tangentScale;
        const normalY = radialY * tubeX * radialScale + tangentY * tangentScale;
        const normalZ = tubeZ * radialScale;

        positions.push(
          centerX + normalX * tubeRadius,
          centerY + normalY * tubeRadius,
          normalZ * tubeRadius
        );
        normals.push(normalX, normalY, normalZ);
      }

      for (let tube = 0; tube < tubeSegments; tube += 1) {
        const nextTube = (tube + 1) % tubeSegments;
        const current = previousRingStart + tube;
        const next = previousRingStart + nextTube;
        const capCurrent = ringStart + tube;
        const capNext = ringStart + nextTube;

        indices.push(current, capCurrent, next, next, capCurrent, capNext);
      }

      previousRingStart = ringStart;
    }

    const poleIndex = positions.length / 3;
    positions.push(
      centerX + tangentX * tubeRadius,
      centerY + tangentY * tubeRadius,
      0
    );
    normals.push(tangentX, tangentY, 0);

    for (let tube = 0; tube < tubeSegments; tube += 1) {
      const nextTube = (tube + 1) % tubeSegments;
      indices.push(previousRingStart + tube, poleIndex, previousRingStart + nextTube);
    }
  }
}

function createSparkMesh(): Mesh {
  const depth = 0.34;
  const scale = 0.0082;
  const centerX = 0.08;
  const topY = 1.32;
  const outline = [
    { x: 78, y: 4 },
    { x: 34, y: 82 },
    { x: 68, y: 82 },
    { x: 43, y: 166 },
    { x: 102, y: 62 },
    { x: 68, y: 62 },
  ].map((point) => ({
    x: (point.x - 68) * scale + centerX,
    y: topY - point.y * scale,
  }));
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];

  for (const z of [depth / 2, -depth / 2]) {
    for (const point of outline) {
      positions.push(point.x, point.y, z);
      normals.push(0, 0, z > 0 ? 1 : -1);
    }
  }

  const frontTriangles = triangulatePolygon(outline);

  for (const triangle of frontTriangles) {
    indices.push(triangle[0], triangle[1], triangle[2]);
    indices.push(
      triangle[2] + outline.length,
      triangle[1] + outline.length,
      triangle[0] + outline.length
    );
  }

  for (let index = 0; index < outline.length; index += 1) {
    const nextIndex = (index + 1) % outline.length;
    const current = outline[index];
    const next = outline[nextIndex];
    const edgeX = next.x - current.x;
    const edgeY = next.y - current.y;
    const normal = normalize([edgeY, -edgeX, 0]);
    const sideStart = positions.length / 3;

    positions.push(
      current.x,
      current.y,
      depth / 2,
      next.x,
      next.y,
      depth / 2,
      next.x,
      next.y,
      -depth / 2,
      current.x,
      current.y,
      -depth / 2
    );

    for (let repeat = 0; repeat < 4; repeat += 1) {
      normals.push(normal[0], normal[1], normal[2]);
    }

    indices.push(
      sideStart,
      sideStart + 1,
      sideStart + 2,
      sideStart,
      sideStart + 2,
      sideStart + 3
    );
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    indices: new Uint16Array(indices),
  };
}

function triangulatePolygon(points: Point2D[]) {
  const triangles: Array<[number, number, number]> = [];
  const vertices = points.map((_, index) => index);
  const winding = polygonArea(points) >= 0 ? 1 : -1;
  let guard = 0;

  while (vertices.length > 3 && guard < 100) {
    let earIndex = -1;

    for (let index = 0; index < vertices.length; index += 1) {
      const previousIndex = vertices[(index - 1 + vertices.length) % vertices.length];
      const currentIndex = vertices[index];
      const nextIndex = vertices[(index + 1) % vertices.length];

      if (
        isEar(
          points,
          vertices,
          previousIndex,
          currentIndex,
          nextIndex,
          winding
        )
      ) {
        earIndex = index;
        triangles.push([previousIndex, currentIndex, nextIndex]);
        break;
      }
    }

    if (earIndex === -1) {
      break;
    }

    vertices.splice(earIndex, 1);
    guard += 1;
  }

  if (vertices.length === 3) {
    triangles.push([vertices[0], vertices[1], vertices[2]]);
  }

  return triangles;
}

function isEar(
  points: Point2D[],
  vertices: number[],
  previousIndex: number,
  currentIndex: number,
  nextIndex: number,
  winding: number
) {
  const previous = points[previousIndex];
  const current = points[currentIndex];
  const next = points[nextIndex];

  if (triangleWinding(previous, current, next) * winding <= 0) {
    return false;
  }

  for (const vertexIndex of vertices) {
    if (
      vertexIndex === previousIndex ||
      vertexIndex === currentIndex ||
      vertexIndex === nextIndex
    ) {
      continue;
    }

    if (pointInTriangle(points[vertexIndex], previous, current, next)) {
      return false;
    }
  }

  return true;
}

function polygonArea(points: Point2D[]) {
  return points.reduce((total, point, index) => {
    const next = points[(index + 1) % points.length];

    return total + point.x * next.y - next.x * point.y;
  }, 0);
}

function triangleWinding(a: Point2D, b: Point2D, c: Point2D) {
  return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
}

function pointInTriangle(point: Point2D, a: Point2D, b: Point2D, c: Point2D) {
  const areaOne = triangleWinding(point, a, b);
  const areaTwo = triangleWinding(point, b, c);
  const areaThree = triangleWinding(point, c, a);
  const hasNegative = areaOne < 0 || areaTwo < 0 || areaThree < 0;
  const hasPositive = areaOne > 0 || areaTwo > 0 || areaThree > 0;

  return !(hasNegative && hasPositive);
}

function createProgram(
  gl: WebGLRenderingContext,
  vertexSource: string,
  fragmentSource: string
) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();

  if (!program) {
    throw new Error("Unable to create WebGL program.");
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(info || "Unable to link WebGL program.");
  }

  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  return program;
}

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);

  if (!shader) {
    throw new Error("Unable to create WebGL shader.");
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(info || "Unable to compile WebGL shader.");
  }

  return shader;
}

function perspective(fov: number, aspect: number, near: number, far: number) {
  const out = new Float32Array(16);
  const f = 1 / Math.tan(fov / 2);

  out[0] = f / aspect;
  out[5] = f;
  out[10] = (far + near) / (near - far);
  out[11] = -1;
  out[14] = (2 * far * near) / (near - far);

  return out;
}

function lookAt(
  eye: [number, number, number],
  target: [number, number, number],
  up: [number, number, number]
) {
  const z = normalize([
    eye[0] - target[0],
    eye[1] - target[1],
    eye[2] - target[2],
  ]);
  const x = normalize(cross(up, z));
  const y = cross(z, x);
  const out = new Float32Array(16);

  out[0] = x[0];
  out[1] = y[0];
  out[2] = z[0];
  out[4] = x[1];
  out[5] = y[1];
  out[6] = z[1];
  out[8] = x[2];
  out[9] = y[2];
  out[10] = z[2];
  out[12] = -dot(x, eye);
  out[13] = -dot(y, eye);
  out[14] = -dot(z, eye);
  out[15] = 1;

  return out;
}

function rotationX(angle: number) {
  const out = identity();
  const c = Math.cos(angle);
  const s = Math.sin(angle);

  out[5] = c;
  out[6] = s;
  out[9] = -s;
  out[10] = c;

  return out;
}

function rotationY(angle: number) {
  const out = identity();
  const c = Math.cos(angle);
  const s = Math.sin(angle);

  out[0] = c;
  out[2] = -s;
  out[8] = s;
  out[10] = c;

  return out;
}

function rotationZ(angle: number) {
  const out = identity();
  const c = Math.cos(angle);
  const s = Math.sin(angle);

  out[0] = c;
  out[1] = s;
  out[4] = -s;
  out[5] = c;

  return out;
}

function identity() {
  const out = new Float32Array(16);

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;

  return out;
}

function multiply(a: Float32Array, b: Float32Array) {
  const out = new Float32Array(16);

  for (let column = 0; column < 4; column += 1) {
    for (let row = 0; row < 4; row += 1) {
      out[column * 4 + row] =
        a[row] * b[column * 4] +
        a[4 + row] * b[column * 4 + 1] +
        a[8 + row] * b[column * 4 + 2] +
        a[12 + row] * b[column * 4 + 3];
    }
  }

  return out;
}

function normalize(value: [number, number, number]) {
  const length = Math.hypot(value[0], value[1], value[2]) || 1;

  return [value[0] / length, value[1] / length, value[2] / length] as [
    number,
    number,
    number,
  ];
}

function cross(a: [number, number, number], b: [number, number, number]) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ] as [number, number, number];
}

function dot(a: [number, number, number], b: [number, number, number]) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
