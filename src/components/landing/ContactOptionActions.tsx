"use client";

import { Check, Copy, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

type ContactOptionActionsProps = {
  actionLabel?: string;
  copyLabel?: string;
  copyValue: string;
  external?: boolean;
  href?: string;
};

async function copyToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export function ContactOptionActions({
  actionLabel,
  copyLabel = "Copy",
  copyValue,
  external,
  href,
}: ContactOptionActionsProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    await copyToClipboard(copyValue);
    setCopied(true);
  };

  return (
    <span className="contact-method-actions">
      {href && actionLabel ? (
        <a
          className="contact-method-action contact-method-action-primary"
          href={href}
          rel={external ? "noreferrer" : undefined}
          target={external ? "_blank" : undefined}
        >
          {actionLabel}
          {external ? <ExternalLink size={14} aria-hidden="true" /> : null}
        </a>
      ) : null}
      <button
        className="contact-method-action contact-method-copy"
        type="button"
        onClick={handleCopy}
        aria-live="polite"
      >
        {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
        {copied ? "Copied" : copyLabel}
      </button>
    </span>
  );
}
