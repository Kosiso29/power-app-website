"use client";

import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

type TawkStatus = "loading" | "online" | "away" | "offline";

declare global {
  interface Window {
    Tawk_API?: {
      getStatus?: () => string;
      hideWidget?: () => void;
      isChatMaximized?: () => boolean;
      maximize?: () => void;
      onChatHidden?: () => void;
      onChatMinimized?: () => void;
      onStatusChange?: (status: string) => void;
      showWidget?: () => void;
    };
  }
}

function normalizeStatus(status?: string): TawkStatus {
  if (status === "online" || status === "away" || status === "offline") {
    return status;
  }

  return "loading";
}

const statusCopy: Record<TawkStatus, { label: string; text: string }> = {
  loading: {
    label: "Checking availability",
    text: "The live chat connection is loading. You can still reach us by email.",
  },
  online: {
    label: "Agents online",
    text: "Start a live conversation with the Cyberwatt team.",
  },
  away: {
    label: "Agents may take a moment",
    text: "Send your message and the next available team member can respond.",
  },
  offline: {
    label: "Leave a message",
    text: "Drop your request and we can follow up when the team is back online.",
  },
};

export function ContactLiveChat() {
  const [status, setStatus] = useState<TawkStatus>("loading");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let previousStatusChange: ((status: string) => void) | undefined;
    let previousMinimized: (() => void) | undefined;
    let previousHidden: (() => void) | undefined;
    let installed = false;

    const hideFloatingWidget = () => {
      window.setTimeout(() => window.Tawk_API?.hideWidget?.(), 80);
    };

    const sync = () => {
      const api = window.Tawk_API;

      if (!api || typeof api.maximize !== "function") {
        return false;
      }

      setIsReady(true);
      setStatus(normalizeStatus(api.getStatus?.()));

      if (!api.isChatMaximized?.()) {
        api.hideWidget?.();
      }

      if (!installed) {
        previousStatusChange = api.onStatusChange;
        previousMinimized = api.onChatMinimized;
        previousHidden = api.onChatHidden;

        api.onStatusChange = (nextStatus: string) => {
          previousStatusChange?.(nextStatus);
          setStatus(normalizeStatus(nextStatus));
        };

        api.onChatMinimized = () => {
          previousMinimized?.();
          hideFloatingWidget();
        };

        api.onChatHidden = () => {
          previousHidden?.();
          hideFloatingWidget();
        };

        installed = true;
      }

      return true;
    };

    sync();
    const timer = window.setInterval(sync, 900);

    return () => {
      window.clearInterval(timer);

      const api = window.Tawk_API;
      if (api && installed) {
        api.onStatusChange = previousStatusChange;
        api.onChatMinimized = previousMinimized;
        api.onChatHidden = previousHidden;
      }

      api?.showWidget?.();
    };
  }, []);

  const openChat = () => {
    const api = window.Tawk_API;

    api?.showWidget?.();
    api?.maximize?.();
  };

  return (
    <article className="contact-live-chat-card">
      <span className={`contact-chat-status contact-chat-status-${status}`}>
        {statusCopy[status].label}
      </span>
      <div className="contact-live-chat-icon" aria-hidden="true">
        <MessageCircle size={28} strokeWidth={1.8} />
      </div>
      <h2>Live chat</h2>
      <p>{statusCopy[status].text}</p>
      <button className="primary-action" type="button" onClick={openChat} disabled={!isReady}>
        {isReady ? "Start live chat" : "Loading chat"}
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </article>
  );
}
