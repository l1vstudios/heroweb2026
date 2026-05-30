"use client";

import { useEffect } from "react";
import { showUnavailableToast } from "../lib/showUnavailableToast";

function isPlaceholderHref(href: string) {
  const normalized = href.trim().toLowerCase();
  return (
    normalized === "" ||
    normalized === "#" ||
    normalized === "javascript:void(0)" ||
    normalized === "javascript:void(0);" ||
    normalized.startsWith("javascript:")
  );
}

export default function BrokenLinkGuard() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const comingSoonElement = target.closest<HTMLElement>(
        "[data-coming-soon='true']",
      );
      if (comingSoonElement) {
        event.preventDefault();
        showUnavailableToast();
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>("a");
      if (!anchor) return;

      if (
        anchor.getAttribute("aria-disabled") === "true" ||
        anchor.dataset.comingSoon === "true"
      ) {
        event.preventDefault();
        showUnavailableToast();
        return;
      }

      const rawHref = anchor.getAttribute("href");
      if (!rawHref) {
        event.preventDefault();
        showUnavailableToast();
        return;
      }

      if (isPlaceholderHref(rawHref)) {
        event.preventDefault();
        showUnavailableToast();
        return;
      }

      if (rawHref.startsWith("#")) {
        const hashTarget = decodeURIComponent(rawHref.slice(1));
        if (!hashTarget || !document.getElementById(hashTarget)) {
          event.preventDefault();
          showUnavailableToast();
        }
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
