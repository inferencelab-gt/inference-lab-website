import React from "react";

export default function SectionTldr({ items, dark }: { items: string[]; dark: boolean }) {
  if (!items || items.length === 0) return null;
  return (
    <div
      style={{
        background: dark ? "#181c23cc" : "#fff9eedd",
        borderRadius: 12,
        boxShadow: dark ? "0 2px 8px #FFD70033" : "0 2px 8px #FFD70022",
        border: `1.5px solid ${dark ? '#FFD70055' : '#FFD70033'}`,
        padding: "10px 18px 10px 18px",
        margin: "10px 0 22px 0",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        fontSize: 15,
        fontWeight: 500,
        color: dark ? "#FFD700" : "#232733",
        transition: "background 0.2s, color 0.2s",
        maxWidth: 520,
      }}
      aria-label="Section TL;DR"
    >
      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, letterSpacing: 0.1, color: dark ? '#FFD700' : '#B8860B' }}>
        TL;DR
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 3 }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ color: dark ? "#FFD700" : "#B8860B", fontWeight: 600, opacity: 0.92 }}>
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
