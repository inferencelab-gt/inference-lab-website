import React from "react";

export default function HighlightGlow({
  children,
  dark,
  glow,
}: {
  children: React.ReactNode;
  dark: boolean;
  glow?: string;
}) {
  const defaultGlow = dark ? "0_0_3px_#FFD700" : "0_0_3px_#3B82F6";
  return (
    <span
      className={
        (dark
          ? "underline decoration-yellow-400 decoration-2 underline-offset-2 font-semibold text-yellow-300"
          : "underline decoration-blue-500 decoration-2 underline-offset-2 font-semibold text-blue-600"
        ) +
        ` drop-shadow-[${glow || defaultGlow}]`
      }
    >
      {children}
    </span>
  );
}
