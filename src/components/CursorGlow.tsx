"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on devices with a pointer (skip touch-only) and respect reduced motion
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.opacity = "1";
      el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(124, 58, 237, 0.07), rgba(6, 182, 212, 0.04) 40%, transparent 70%)`;
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 50,
        opacity: 0,
        transition: "opacity 0.3s ease",
        filter: "blur(30px)",
      }}
    />
  );
}
