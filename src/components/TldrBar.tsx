import React from "react";

const tldrItems = [
  { label: "Take ownership of your projects", anchor: "os-expectations" },
  { label: "Weekly one-hour or 30-minute meeting", anchor: "os-comm" },
  { label: "Aim for two top conferences each year", anchor: "os-publish" },
  { label: "Stay at the top of your literature", anchor: "os-expectations" },
  { label: "Proactive communication", anchor: "os-comm" },
  { label: "Empathy & collaboration", anchor: "os-what" },
];

export default function TldrBar({ dark }: { dark: boolean }) {
  return (
    <aside
      style={{
        position: "fixed",
        top: 120,
        right: 32,
        width: 260,
        zIndex: 30,
        background: dark ? "#181c23cc" : "#fff9eedd",
        borderRadius: 16,
        boxShadow: dark
          ? "0 2px 16px #FFD70033"
          : "0 2px 16px #FFD70022",
        border: `1.5px solid ${dark ? '#FFD70055' : '#FFD70033'}`,
        padding: "18px 20px 18px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        fontSize: 15,
        fontWeight: 500,
        color: dark ? "#FFD700" : "#232733",
        transition: "background 0.2s, color 0.2s",
        maxHeight: "70vh",
        overflowY: "auto",
      }}
      className="hidden lg:flex"
      aria-label="TL;DR bar"
    >
      <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 10, letterSpacing: 0.2, color: dark ? '#FFD700' : '#B8860B' }}>
        TL;DR
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {tldrItems.map((item, idx) => (
          <li key={idx}>
            <a
              href={`#${item.anchor}`}
              style={{
                color: dark ? "#FFD700" : "#B8860B",
                textDecoration: "none",
                fontWeight: 600,
                borderRadius: 8,
                padding: "3px 8px",
                display: "block",
                transition: "background 0.15s, color 0.15s",
                opacity: 0.92,
              }}
              onMouseOver={e => e.currentTarget.style.background = dark ? '#FFD70022' : '#23273311'}
              onMouseOut={e => e.currentTarget.style.background = 'none'}
            >
              • {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
