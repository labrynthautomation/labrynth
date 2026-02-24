"use client";

import { useRef, useCallback, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "purple" | "cyan";
  tiltAmount?: number;
}

const GLOW_COLORS = {
  purple: "rgba(124, 58, 237, 0.07)",
  cyan: "rgba(6, 182, 212, 0.07)",
};

export function TiltCard({
  children,
  className = "",
  glowColor = "purple",
  tiltAmount = 2,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      const glow = glowRef.current;
      if (!card || !glow) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -tiltAmount;
      const rotateY = ((x - centerX) / centerX) * tiltAmount;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;

      glow.style.background = `radial-gradient(250px circle at ${x}px ${y}px, ${GLOW_COLORS[glowColor]}, transparent 70%)`;
      glow.style.opacity = "1";
    },
    [glowColor, tiltAmount]
  );

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (card)
      card.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    if (glow) glow.style.opacity = "0";
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Inner glow overlay that follows cursor */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 0.3s ease",
          zIndex: 1,
        }}
      />
      {/* Content sits above the glow */}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
}
