
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
export default function BlogDocsPage() {
  // Dark mode state: null = not yet determined, true = dark, false = light
  const [dark, setDark] = useState<null | boolean>(null);

  // On mount, check localStorage and system preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('inference-dark-mode');
    if (stored === 'true' || stored === 'false') {
      setDark(stored === 'true');
    } else {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(systemDark);
    }
  }, []);

  // When user toggles, persist to localStorage
  const handleToggle = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem('inference-dark-mode', String(next));
      return next;
    });
  };

  // Prevent white flash: render a full-screen dark background while determining mode
  if (dark === null) {
    return <div style={{background:'#181c23',minHeight:'100vh',width:'100vw'}} />;
  }

  const cardBg = dark ? "#232733" : "#f5f5f5";
  const cardText = dark ? "#FFD700" : "#181c23";
  const border = dark ? "#33384a" : "#e0e0e0";
  return (
    <div style={{
      background: dark ? "#181c23" : "#fff",
      color: dark ? "#fff" : "#181c23",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "background 0.3s, color 0.3s"
    }}>
      {/* GT logo above, then lab logo and name in a row, all centered, matching landing page */}
      <div className="flex flex-col items-center mt-10 sm:mt-16 mb-8 w-full px-2">
        {/* GT logo moved to landing page as requested */}
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 w-full">
          <img
            src="/logo.png"
            alt="Lab logo"
            width={70}
            height={70}
            className="rounded-lg drop-shadow-md bg-transparent object-contain max-w-[48px] max-h-[48px] sm:max-w-[70px] sm:max-h-[70px]"
          />
          <span className="text-2xl sm:text-5xl font-bold tracking-tight" style={{ color: dark ? '#FFD700' : '#232733', textShadow: dark ? '0 2px 8px #0008' : '0 2px 8px #fff8', marginTop: 4, whiteSpace: 'nowrap' }}>Inference&nbsp;Lab</span>
          {/* Theme toggle to the right of the lab name */}
          <label className="flex items-center gap-2 sm:gap-3 ml-2 sm:ml-4 cursor-pointer select-none">
            <span className={
              'w-11 h-6 rounded-full inline-block relative transition-colors duration-200 ' +
              (dark ? 'bg-[#FFD700]' : 'bg-gray-300')
            }>
              <input
                type="checkbox"
                checked={dark}
                onChange={handleToggle}
                className="hidden"
              />
              <span
                className={
                  'absolute top-[2px] transition-all duration-200 flex items-center justify-center rounded-full shadow w-5 h-5 ' +
                  (dark ? 'right-[2px] bg-[#181c23]' : 'left-[2px] bg-white')
                }
              >
                {dark ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
                )}
              </span>
            </span>
          </label>
        </div>
        <span className="text-xs sm:text-lg font-light mt-3 sm:mt-5 opacity-85" style={{ color: dark ? '#fff' : '#232733' }}>We are building universal engineering intelligence</span>
      </div>

      {/* Add extra space below tagline */}
      <div className="h-6 sm:h-10" />

      {/* Main Topics */}
      <div className="w-full max-w-xs sm:max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
        <Link href="/blog-docs/vision" className="w-full">
          <div
            className="w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 flex items-center justify-center min-h-[56px] sm:min-h-[96px] px-3 py-2 sm:px-8 sm:py-6 transition-all duration-200 cursor-pointer font-semibold text-center text-[17px]"
            style={{ color: cardText, borderColor: border, background: cardBg }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = dark
                ? "0 4px 32px 0 #FFD70088, 0 2px 16px 0 #0006"
                : "0 4px 32px 0 #3B82F688, 0 2px 12px 0 #3B82F622";
              e.currentTarget.style.borderColor = dark ? "#FFD700" : "#3B82F6";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = dark
                ? "0 2px 16px 0 #0002"
                : "0 2px 12px 0 #0001";
              e.currentTarget.style.borderColor = border;
            }}
          >
            Vision
          </div>
        </Link>
        <Link href="/blog-docs/philosophy" className="w-full">
          <div
            className="w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 flex items-center justify-center min-h-[56px] sm:min-h-[96px] px-3 py-2 sm:px-8 sm:py-6 transition-all duration-200 cursor-pointer font-semibold text-center text-[17px]"
            style={{ color: cardText, borderColor: border, background: cardBg }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = dark
                ? "0 4px 32px 0 #FFD70088, 0 2px 16px 0 #0006"
                : "0 4px 32px 0 #3B82F688, 0 2px 12px 0 #3B82F622";
              e.currentTarget.style.borderColor = dark ? "#FFD700" : "#3B82F6";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = dark
                ? "0 2px 16px 0 #0002"
                : "0 2px 12px 0 #0001";
              e.currentTarget.style.borderColor = border;
            }}
          >
            Philosophy
          </div>
        </Link>
        <Link href="/blog-docs/os" className="w-full">
          <div
            className="w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 flex items-center justify-center min-h-[56px] sm:min-h-[96px] px-3 py-2 sm:px-8 sm:py-6 transition-all duration-200 cursor-pointer font-semibold text-center text-[17px]"
            style={{ color: cardText, borderColor: border, background: cardBg }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = dark
                ? "0 4px 32px 0 #FFD70088, 0 2px 16px 0 #0006"
                : "0 4px 32px 0 #3B82F688, 0 2px 12px 0 #3B82F622";
              e.currentTarget.style.borderColor = dark ? "#FFD700" : "#3B82F6";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = dark
                ? "0 2px 16px 0 #0002"
                : "0 2px 12px 0 #0001";
              e.currentTarget.style.borderColor = border;
            }}
          >
            Inference OS
          </div>
        </Link>
      </div>
      {/* Footer */}
      <footer style={{
        width: "100%",
        textAlign: "center",
        padding: "32px 0 18px 0",
        color: dark ? '#FFD700' : '#232733',
        fontSize: 15,
        opacity: 0.7,
        letterSpacing: 0.2,
      }}>
        &copy; {new Date().getFullYear()} Inference Lab. All rights reserved.
      </footer>
    </div>
  );
}

