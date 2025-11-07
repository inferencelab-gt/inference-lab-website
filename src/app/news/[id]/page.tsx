
"use client";
import { useState, useEffect } from "react";
import { news } from "@/data/news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const idx = parseInt(params.id, 10);
  const item = news[idx];
  const [dark, setDark] = useState<null | boolean>(null);

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

  const handleToggle = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem('inference-dark-mode', String(next));
      return next;
    });
  };

  if (!item) return notFound();
  if (dark === null) {
    return <div style={{background:'#181c23',minHeight:'100vh',width:'100vw'}} />;
  }
  return (
    <div
      className={
        (dark ? 'bg-[#181c23] text-white' : 'bg-white text-[#181c23]') +
        ' min-h-screen transition-colors duration-300 flex flex-col items-center pt-20 sm:pt-40 text-base sm:text-xl px-2 sm:px-0 relative'
      }
    >
      {/* Toggle in top right, large */}
      <div className="absolute top-4 right-4 z-10">
        <label className="flex items-center justify-center gap-1 cursor-pointer select-none">
          <span
            className={
              'w-12 h-7 rounded-full inline-block relative transition-colors duration-200 ' +
              (dark ? 'bg-[#FFD700]' : 'bg-gray-300')
            }
          >
            <input
              type="checkbox"
              checked={dark}
              onChange={handleToggle}
              className="hidden"
            />
            <span
              className={
                'absolute top-[2px] transition-all duration-200 flex items-center justify-center rounded-full shadow w-6 h-6 ' +
                (dark ? 'right-[2px] bg-[#181c23]' : 'left-[2px] bg-white')
              }
            >
              {dark ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
              )}
            </span>
          </span>
        </label>
      </div>
      {/* Date at top center, then title, then image, all centered */}
      <div className="flex flex-col items-center w-full mb-2 mt-2 sm:mt-0">
        <span
          className={
            (dark ? 'text-[#FFD700]' : 'text-[#232733]') +
            ' text-sm sm:text-base font-semibold text-center mb-2 opacity-80'
          }
        >
          {item.date}
        </span>
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-6 flex-wrap px-1 sm:px-0 w-full mb-2">
          <span
            className={
              'font-bold tracking-wide ' +
              (dark ? 'text-[#FFD700] drop-shadow-lg' : 'text-[#232733] drop-shadow') +
              ' text-2xl sm:text-5xl text-center break-words max-w-[90vw] sm:max-w-full'
            }
          >
            {item.title}
          </span>
        </div>
        {/* More space after title before image */}
        <div className="h-8 sm:h-14" />
        {item.image && (
          <img
            src={item.image}
            alt={item.title + ' image'}
            className="rounded-2xl shadow-lg object-cover w-full max-w-xs sm:max-w-md mb-4 border border-white/30"
            style={{ aspectRatio: '4/3', background: dark ? '#232733' : '#f5f5f5' }}
          />
        )}
      </div>
      <main className="w-full max-w-2xl mx-auto">
        <section className="mb-8 px-2 sm:px-6">
          {item.description.split('\n\n').map((para, idx) => (
            <p key={idx} className="text-[15px] sm:text-[17px] leading-[1.7] text-left mb-4 break-words max-w-full">
              {para}
            </p>
          ))}
          <div
            className={
              'w-full mt-8 border-b-2 rounded opacity-15 ' +
              (dark ? 'border-[#FFD700]' : 'border-[#232733]')
            }
          />
          <div className="flex justify-center mt-8">
            <Link
              href="/"
              className={
                'px-4 py-2 sm:px-6 rounded-full font-semibold shadow border transition-all duration-200 text-sm sm:text-base ' +
                (dark
                  ? 'bg-[#FFD700] text-[#181c23] border-[#FFD700] hover:bg-[#232733] hover:text-[#FFD700] hover:border-[#FFD700]'
                  : 'bg-[#232733] text-[#FFD700] border-[#232733] hover:bg-[#FFD700] hover:text-[#232733] hover:border-[#FFD700]')
              }
              style={{ minWidth: 120, textAlign: 'center' }}
            >
              ← Back to Home
            </Link>
          </div>
        </section>
      </main>
      <footer
        className={
          'w-full text-center pt-8 pb-4 sm:pt-10 sm:pb-5 font-semibold ' +
          (dark ? 'text-[#FFD700]' : 'text-[#232733]') +
          ' opacity-70 tracking-wide text-[13px] sm:text-[15px]'
        }
      >
        &copy; {new Date().getFullYear()} Inference Lab. All rights reserved.
      </footer>
    </div>
  );
}
