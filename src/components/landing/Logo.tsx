import Image from "next/image";

export function LogoImage({ className = "" }: { className?: string }) {
  return (
    <span className={`logo-image ${className}`} aria-hidden="true">
      <Image src="/cyberwatt-logo.png" alt="" fill sizes="72px" />
    </span>
  );
}

export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`logo-wordmark ${className}`}>
      <span>Cyber</span>
      <span>watt</span>
    </span>
  );
}
