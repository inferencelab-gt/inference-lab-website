"use client";

import React from "react";
// ...existing code...
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import clsx from "clsx";
import { useEffect, useRef, useState, useMemo } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
// Lab images for carousel
const labImages = [
  "/group1.jpg",
  "/group2.jpg",
  "/group3.jpg"
];
import { news } from "../data/news";
import { newsImages } from "./newsImages";
import { publications } from "../data/publications";
import { featuredRepos } from "../data/featuredRepos";

import { team } from "../data/team";
import { research } from "../data/research";
import { contact } from "../data/contact";

export default function Page() {
  // Glowing animation CSS (inline for now, can move to CSS module if desired)
  React.useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('glow-fade-keyframes')) {
      const glowKeyframes = `
      @keyframes glowFade {
        0% { box-shadow: 0 0 0px 0 #FFD700, 0 0 0px 0 #fff; opacity: 1; }
        30% { box-shadow: 0 0 16px 6px #FFD70088, 0 0 8px 2px #fff8; opacity: 1; }
        50% { box-shadow: 0 0 32px 12px #FFD700cc, 0 0 16px 4px #fff; opacity: 0.7; }
        70% { box-shadow: 0 0 16px 6px #FFD70088, 0 0 8px 2px #fff8; opacity: 1; }
        100% { box-shadow: 0 0 0px 0 #FFD700, 0 0 0px 0 #fff; opacity: 1; }
      }`;
      const style = document.createElement('style');
      style.id = 'glow-fade-keyframes';
      style.innerHTML = glowKeyframes;
      document.head.appendChild(style);
    }
  }, []);

  const glowClass = 'glow-fade-anim';
  // Animation state for team pop-in (client only)
  const [teamPopKey, setTeamPopKey] = useState(0);
  const [newsPopKey, setNewsPopKey] = useState(0);
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    setTeamPopKey(Date.now());
    setNewsPopKey(Date.now());
    setStars(
      Array.from({ length: 80 }).map(() => ({
        cx: Math.random() * 100 + "%",
        cy: Math.random() * 100 + "%",
        r: Math.random() * 1.2 + 0.2,
        opacity: Math.random() * 0.7 + 0.3,
      }))
    );
  }, []);

  // Sort news by date descending (most recent first)
  const sortedNews = useMemo(() => {
    return [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [news]);
  // Carousel state for lab image (refactored for smooth float out/in, 5s interval)
  const [labImgIdx, setLabImgIdx] = useState(0);
  const [prevImgIdx, setPrevImgIdx] = useState<number|null>(null);
  const [animState, setAnimState] = useState<'idle'|'out'|'in'>('idle');

  useEffect(() => {
    let outTimeout: NodeJS.Timeout;
    let inTimeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    const startAnimation = () => {
      setPrevImgIdx(labImgIdx);
      setAnimState('out');
      outTimeout = setTimeout(() => {
        setLabImgIdx((idx) => (idx + 1) % labImages.length);
        setAnimState('in');
        inTimeout = setTimeout(() => {
          setAnimState('idle');
          setPrevImgIdx(null);
        }, 500);
      }, 500);
    };

    interval = setInterval(() => {
      startAnimation();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(outTimeout);
      clearTimeout(inTimeout);
    };
    // eslint-disable-next-line
  }, [labImgIdx]);
  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [showNav, setShowNav] = useState(false);
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);
  const [navLocked, setNavLocked] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (navLocked) return; // Don't hide navbar if locked
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      setShowNav(heroBottom <= 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [navLocked]);

  // Scroll after navbar is visible, lock navbar during scroll
  useEffect(() => {
    if (showNav && pendingScroll) {
      setNavLocked(true);
      const el = document.getElementById(pendingScroll);
      if (el && navRef.current) {
        const navHeight = navRef.current.offsetHeight;
        const y = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      setTimeout(() => {
        setNavLocked(false);
      }, 700); // match scroll duration
      setPendingScroll(null);
    }
  }, [showNav, pendingScroll]);

  const scrollToSection = (id: string) => {
    if (!showNav) {
      setShowNav(true);
      setPendingScroll(id);
    } else {
      setNavLocked(true);
      const el = document.getElementById(id);
      if (el && navRef.current) {
        const navHeight = navRef.current.offsetHeight;
        const y = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      setTimeout(() => {
        setNavLocked(false);
      }, 700);
    }
  };

  // Publications search state and filter logic (must be before return)
  const [searchInput, setSearchInput] = useState("");
  // Filter and sort publications by search term (title, authors, or year), newest first
  const filteredPublications = useMemo(() => {
    const term = searchInput.trim().toLowerCase();
    let pubs = publications;
    if (term) {
      pubs = pubs.filter((pub) => (
        pub.title.toLowerCase().includes(term) ||
        pub.authors.toLowerCase().includes(term) ||
        (pub.year && String(pub.year).includes(term))
      ));
    }
    return pubs.slice().sort((a, b) => {
      // Sort by year descending (newest first)
      const yearA = typeof a.year === 'string' ? parseInt(a.year) : a.year || 0;
      const yearB = typeof b.year === 'string' ? parseInt(b.year) : b.year || 0;
      return yearB - yearA;
    });
  }, [searchInput, publications]);

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-hidden scroll-smooth text-[15px] sm:text-base">
      {/* Aceternity UI-inspired static blurred gradient bubbles background - moved outside <main> for full-page coverage */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        {/* Deeper navy/black base */}
        <div className="absolute inset-0 w-full h-full" style={{ background: 'linear-gradient(120deg, #070a18 0%, #10162a 100%)', zIndex: 1 }} />
        {/* Joined, abstract, multi-lobed blurred shape (single div, multi-gradient, organic borderRadius) */}
        <div
          className="absolute"
          style={{
            top: '48%',
            left: '36%',
            transform: 'translate(-50%, -50%)',
            width: '74vw',
            height: '64vw',
            zIndex: 2,
            background: `
              radial-gradient(ellipse 44% 32% at 30% 38%, #FFD700cc 0%, #FFD70000 80%),
              radial-gradient(ellipse 38% 28% at 60% 32%, #00B4D8bb 0%, #00B4D800 80%),
              radial-gradient(ellipse 22% 18% at 68% 68%, #B3A36999 0%, #B3A36900 80%),
              radial-gradient(ellipse 18% 14% at 22% 78%, #3B82F688 0%, #3B82F600 80%),
              radial-gradient(ellipse 16% 12% at 78% 22%, #fff8dc66 0%, #fff8dc00 80%),
              radial-gradient(ellipse 12% 10% at 44% 80%, #FFD70077 0%, #FFD70000 80%),
              radial-gradient(ellipse 10% 8% at 80% 80%, #00B4D877 0%, #00B4D800 80%)
            `,
            filter: 'blur(70px)',
            opacity: 0.34,
            mixBlendMode: 'lighten',
            pointerEvents: 'none',
            borderRadius: '60% 40% 70% 30% / 45% 65% 35% 55%',
            boxShadow: '0 0 120px 40px #FFD70033, 0 0 180px 80px #00B4D822',
          }}
        />
      </div>
      <main className="min-h-screen w-full relative overflow-x-hidden">

        {/* Sticky navbar appears after hero or on section click */}
        {showNav && (
          <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-30 flex justify-center bg-white/10 backdrop-blur-md py-2 sm:py-3 gap-2 sm:gap-4 shadow-md border-b border-white/10 transition-all overflow-x-auto scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="flex flex-row justify-between gap-2 min-w-max sm:flex-wrap sm:w-full sm:justify-center px-2 relative">
              <button
                onClick={() => scrollToSection('research-section')}
                className="px-2 sm:px-6 py-1 sm:py-2 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFEA70] to-[#B3A369] text-black font-semibold shadow-lg border border-[#FFD700] transition-all duration-200 hover:from-[#B3A369] hover:to-[#FFD700] hover:text-black hover:shadow-lg hover:border-[#FFD700] text-xs sm:text-base whitespace-nowrap"
                style={{ boxShadow: '0 2px 16px 0 #FFD70044', borderColor: '#FFD700' }}
              >
                Research
              </button>
              <button
                onClick={() => scrollToSection('team-section')}
                className="px-2 sm:px-6 py-1 sm:py-2 rounded-full border border-white/30 text-white font-semibold shadow backdrop-blur-md bg-white/10 transition-all duration-200 hover:border-[#FFD700] hover:text-[#FFD700] hover:shadow-lg text-xs sm:text-base whitespace-nowrap"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('publications-section')}
                className="px-2 sm:px-6 py-1 sm:py-2 rounded-full border border-white/30 text-white font-semibold shadow backdrop-blur-md bg-white/10 transition-all duration-200 hover:border-[#FFD700] hover:text-[#FFD700] hover:shadow-lg text-xs sm:text-base whitespace-nowrap"
              >
                Publications
              </button>
              <button
                onClick={() => scrollToSection('code-section')}
                className="px-2 sm:px-6 py-1 sm:py-2 rounded-full border border-white/30 text-white font-semibold shadow backdrop-blur-md bg-white/10 transition-all duration-200 hover:border-[#FFD700] hover:text-[#FFD700] hover:shadow-lg text-xs sm:text-base whitespace-nowrap"
              >
                Code
              </button>
              <button
                onClick={() => scrollToSection('contact-section')}
                className="px-2 sm:px-6 py-1 sm:py-2 rounded-full border border-white/30 text-white font-semibold shadow backdrop-blur-md bg-white/10 transition-all duration-200 hover:border-[#FFD700] hover:text-[#FFD700] hover:shadow-lg text-xs sm:text-base whitespace-nowrap"
              >
                Contact
              </button>
              {/* Fade-out gradient on right for scroll hint */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-8" style={{background: 'linear-gradient(to left, rgba(255,255,255,0.12), rgba(255,255,255,0))'}} />
            </div>
          </nav>
        )}

        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center w-full pt-4 pb-10 relative">
          {/* GT logo above lab logo and name */}
          <div className="flex flex-col items-center mb-2">
            <img
              src="/GTVertical_RGB.png"
              alt="Georgia Tech Logo"
              width={100}
              height={100}
              className="inline-block align-middle drop-shadow-xl rounded bg-white/25 border border-white/20 p-1 mb-5 object-contain max-w-[48px] max-h-[48px] sm:max-w-[100px] sm:max-h-[100px]"
              style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            />
            <div className="flex flex-row items-center justify-center gap-4">
              <img
                src="/logo.png"
                alt="Lab logo"
                width={50}
                height={50}
                className="inline-block align-middle drop-shadow-md rounded bg-transparent object-contain max-w-[48px] max-h-[48px] sm:max-w-[100px] sm:max-h-[100px]"
                style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
              />
              <h1 className={"text-3xl sm:text-5xl font-bold text-white drop-shadow-lg mt-2 text-center " + styles["fade-in"]} style={{whiteSpace: 'nowrap'}}>
                <span className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#fffbe9] bg-clip-text text-transparent">Inference</span>&nbsp;Lab
              </h1>
            </div>
          </div>
          {/* Typewriter effect subtitle */}
          <div className={styles["fade-in"] + " " + styles["fade-in-delay-1"]} style={{ fontSize: '8px', lineHeight: '12px' }}>
            <TypewriterEffectSmooth
              words={[
                { text: "We", className: "text-white" },
                { text: "are", className: "text-white" },
                { text: "building", className: "text-white" },
                { text: "universal", className: "text-white" },
                { text: "engineering", className: "text-white" },
                { text: "intelligence", className: "text-white" }
              ]}
              className="text-white mb-8 font-light tracking-tight"
            />
          </div>
          <div className={"flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 justify-center " + styles["fade-in"] + " " + styles["fade-in-delay-2"]}>
            {[
              { label: "Research", section: "research-section", gold: true },
              { label: "Team", section: "team-section" },
              { label: "Publications", section: "publications-section" },
              { label: "Code", section: "code-section" },
              { label: "Contact", section: "contact-section" },
            ].map((btn) => {
              const { label, section, gold } = btn;
              return (
              <button
                key={label}
                onClick={() => scrollToSection(section)}
                className={
                  (gold
                    ? "px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FFEA70] to-[#B3A369] text-black font-semibold shadow-lg border border-[#FFD700] text-base sm:text-lg"
                    : "px-6 py-2 sm:px-8 sm:py-3 rounded-full border border-white/30 text-white font-semibold shadow-lg text-base sm:text-lg backdrop-blur-md bg-white/10"
                  ) +
                  " transition-all duration-200"
                }
                style={{
                  boxShadow: gold
                    ? "0 2px 16px 0 #FFD70044"
                    : "0 2px 12px 0 #0001",
                  borderColor: gold ? "#FFD700" : "#fff5",
                  position: 'relative',
                  zIndex: 1
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = gold
                    ? "0 4px 32px 0 #FFD70088, 0 2px 16px 0 #FFD70044"
                    : (document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches
                        ? "0 4px 32px 0 #FFD70088, 0 2px 16px 0 #0006"
                        : "0 4px 32px 0 #3B82F688, 0 2px 12px 0 #3B82F622");
                  e.currentTarget.style.borderColor = gold
                    ? "#FFD700"
                    : (document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches
                        ? "#FFD700"
                        : "#3B82F6");
                  if (gold) {
                    e.currentTarget.style.background = 'linear-gradient(90deg, #FFD700 0%, #FFEA70 60%, #B3A369 100%)';
                    e.currentTarget.style.color = '#232733';
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = gold
                    ? "0 2px 16px 0 #FFD70044"
                    : "0 2px 12px 0 #0001";
                  e.currentTarget.style.borderColor = gold ? "#FFD700" : "#fff5";
                  if (gold) {
                    e.currentTarget.style.background = '';
                    e.currentTarget.style.color = '#232733';
                  }
                }}
              >
                {label}
              </button>
            );
            })}
          </div>
          {/* Who we are and what we do: simple sentence and YouTube thumbnail, perfectly aligned row, no weird gap */}
          <div className={"w-full max-w-2xl mx-auto flex flex-row items-center justify-center gap-5 sm:gap-10 mt-5 sm:mt-7 mb-6 sm:mb-8 px-1 sm:px-2 " + styles["fade-in"] + " " + styles["fade-in-delay-3"]}>
            {/* Who We Are / What We Do: horizontally long card with split sections */}
            <div className="w-full max-w-xs sm:max-w-2xl mx-auto flex flex-row items-center justify-center">
            <div className="w-full max-w-xs sm:max-w-2xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 flex flex-row overflow-hidden min-h-[72px] sm:min-h-[96px]">
                {/* Who We Are Section */}
                <div className="flex-1 flex flex-row items-center justify-center gap-2 sm:gap-3 py-2 sm:py-4 px-2 sm:px-6">
                  <a
                    href="https://www.youtube.com/watch?v=d7HTo2a7uLc&list=PPSV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-row items-center gap-2"
                    aria-label="Watch our introduction video on YouTube"
                  >
                    <div
                      className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 transition-all duration-200 group-hover:border-[#FFD700] group-hover:shadow-gold flex items-center justify-center bg-black/60 w-11 h-11 min-w-11 min-h-11 lg:w-20 lg:h-20 lg:min-w-20 lg:min-h-20"
                    >
                      <img
                        src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        alt="YouTube video thumbnail"
                        className="absolute inset-0 w-full h-full object-cover opacity-70 transition-transform duration-300 group-hover:scale-105 rounded-2xl lg:rounded-3xl"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="drop-shadow-xl w-7 h-7 sm:w-10 sm:h-10 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                          viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="32" cy="32" r="32" fill="#000" fillOpacity="0.45" />
                          <polygon points="26,20 50,32 26,44" fill="#fff" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-xs sm:text-base font-semibold text-white tracking-tight drop-shadow-lg text-center ml-2 sm:ml-3">Who We Are</span>
                  </a>
                </div>
                {/* Custom vertical divider (shorter bar, matches card border) */}
                <div className="relative flex flex-col items-center justify-center">
                  <div
                    className="hidden sm:block"
                    style={{
                      height: '64px',
                      width: '2px',
                      background: 'rgba(255,255,255,0.3)',
                      borderRadius: '2px',
                      margin: '0 0.5rem',
                    }}
                  />
                </div>
                {/* What We Do Section */}
                <div className="flex-1 flex flex-row items-center justify-center gap-2 sm:gap-3 py-2 sm:py-4 px-2 sm:px-6">
                  <a
                    href="/blog-docs"
                    className="group flex flex-row items-center gap-2"
                    aria-label="Visit our blog or documentation"
                  >
                    <div
                      className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 transition-all duration-200 group-hover:border-[#FFD700] group-hover:shadow-gold flex items-center justify-center bg-white/10 w-11 h-11 min-w-11 min-h-11 lg:w-20 lg:h-20 lg:min-w-20 lg:min-h-20"
                    >
                      <img
                        src="/what_we_do_icon.svg"
                        alt="What We Do Icon"
                        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16"
                        style={{ display: 'block' }}
                      />
                    </div>
                    <span className="text-xs sm:text-base font-semibold text-white tracking-tight drop-shadow-lg text-center ml-2 sm:ml-3">What We Do</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* News & Fun Lab Pictures Section (two columns, same height, improved glass, 3 news, right-aligned photos) */}
          <div className={"w-full max-w-3xl mx-auto flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-8 " + styles["fade-in"] + " " + styles["fade-in-delay-3"] + " sm:items-stretch items-center"}>
            {/* Latest News Card with glassy news items inside */}
            <div className={"bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-2 sm:p-4 flex flex-col min-h-[120px] sm:min-h-[200px] max-h-[120px] sm:max-h-[200px] max-w-xs sm:max-w-sm border border-white/40 w-full mx-auto " + styles["fade-in-pop"]} style={{flex: 1, animationDelay: '100ms'}}>
              <h2 className="text-xs sm:text-lg font-semibold mb-1 sm:mb-2" style={{ color: '#FFD700' }}>Latest News</h2>
              <div className="flex flex-col flex-grow h-full gap-0.5 sm:gap-1">
                {/* Use gap-y-2 for larger vertical gap between news items on desktop */}
                <div className="flex flex-col flex-grow h-full gap-y-2 sm:gap-y-3">
                  {sortedNews.slice(0, 3).map((item, idx) => (
                    (() => {
                      if (typeof item.link === 'string' && item.link.length > 0 && item.link !== '#') {
                        return (
                          <Link
                            key={item.title + '-' + newsPopKey}
                            href={item.link}
                            className={clsx(
                              "flex items-center bg-white/10 rounded-xl px-2 py-0 border border-white/30 transition-all duration-200 hover:border-[#FFD700] hover:shadow-lg hover:scale-[1.025] cursor-pointer",
                              styles["fade-in-pop"],
                              item.focus ? glowClass : ''
                            )}
                            style={{
                              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)',
                              animationDelay: `${idx * 120}ms`,
                              minHeight: '18px',
                              flex: 1,
                              animation: item.focus ? 'glowFade 2.2s linear infinite' : undefined,
                              zIndex: item.focus ? 2 : 1
                            }}
                          >
                            <div className="flex w-full items-center justify-between">
                              <h3 className="text-[10px] sm:text-sm font-semibold text-white mb-0.5 transition-colors duration-200 truncate">{item.title}</h3>
                              <span className="text-[9px] sm:text-[11px] font-semibold ml-1 sm:ml-2 text-[#FFD700] whitespace-nowrap">{item.date}</span>
                            </div>
                          </Link>
                        );
                      } else {
                        return (
                          <div
                            key={item.title + '-' + newsPopKey}
                            className={clsx(
                              "flex items-center bg-white/10 rounded-xl px-2 py-0 border border-white/30 transition-all duration-200 hover:border-[#FFD700] hover:shadow-lg hover:scale-[1.025] cursor-pointer",
                              styles["fade-in-pop"],
                              item.focus ? glowClass : ''
                            )}
                            style={{
                              boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)',
                              animationDelay: `${idx * 120}ms`,
                              minHeight: '18px',
                              flex: 1,
                              animation: item.focus ? 'glowFade 2.2s linear infinite' : undefined,
                              zIndex: item.focus ? 2 : 1
                            }}
                          >
                            <div className="flex w-full items-center justify-between">
                              <h3 className="text-[10px] sm:text-sm font-semibold text-white mb-0.5 transition-colors duration-200 truncate">{item.title}</h3>
                              <span className="text-[9px] sm:text-[11px] font-semibold ml-1 sm:ml-2 text-[#FFD700] whitespace-nowrap">{item.date}</span>
                            </div>
                          </div>
                        );
                      }
                    })()
                  ))}
                </div>
              </div>
            </div>
            {/* Animated Lab Image Carousel (floating up and in) */}
            <div className="flex flex-col items-center justify-center min-h-[120px] sm:min-h-[200px] max-h-[120px] sm:max-h-[200px] w-full max-w-xs sm:w-[340px] overflow-hidden relative mt-4 sm:mt-0 mx-auto" style={{flex: 1}}>
            {/* Outgoing and incoming images animate together */}
            {(animState === 'out' && prevImgIdx !== null) && (
              <>
                {/* Outgoing image slides up and fades out */}
                <img
                  src={labImages[prevImgIdx]}
                  alt="Lab Fun"
                  className={"w-full max-w-xs sm:w-[340px] h-[120px] sm:h-[200px] object-cover rounded-2xl absolute left-0 top-0 z-20 " + styles.labImgOutUp}
                />
                {/* Incoming image slides in from below and fades in */}
                <img
                  src={labImages[(prevImgIdx + 1) % labImages.length]}
                  alt="Lab Fun next"
                  className={"w-full max-w-xs sm:w-[340px] h-[120px] sm:h-[200px] object-cover rounded-2xl absolute left-0 top-0 z-10 " + styles.labImgInUp}
                />
              </>
            )}
            {/* After animation, show the current image in place */}
            {(animState === 'in' || animState === 'idle') && (
              <img
                src={labImages[labImgIdx]}
                alt="Lab Fun"
                className="w-full max-w-xs sm:w-[340px] h-[120px] sm:h-[200px] object-cover rounded-2xl absolute left-0 top-0 transition-all duration-500 ease-in-out translate-y-0 opacity-100 z-20"
              />
            )}
            </div>
          </div>
        </section>
        <section id="research-section" className="w-full min-h-screen flex flex-col items-center pt-40 pb-10 px-4 scroll-mt-32 z-10 relative">
          <h2 className="text-3xl sm:text-6xl font-extrabold text-white mb-6 sm:mb-8">Research</h2>
          <p className="text-gray-200 text-sm sm:text-lg max-w-2xl mb-8 sm:mb-10">
              We create novel artificial intelligence methods for computational design, 
              robotic manufacturing, and AI-native engineering. We deploy these methods in 
              real-world systems for intelligent, real-time decision-making in unstructured environments. 
              Guided by our motto intelligent integration, we aim to unify design, simulation, 
              optimization, and manufacturing into a single scalable platform, what we call 
               <span style={{
                color: '#FFD700',
                fontWeight: 500,
                background: 'none',
                padding: 0,
                borderRadius: 0,
                boxShadow: 'none',
                transition: 'color 0.2s',
              }}> universal engineering intelligence</span>, and some call artificial general engineering 
              intelligence.
          </p>
          
          
          {/* Research Cards (data-driven) */}
          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-5xl justify-center items-center sm:items-stretch mx-auto">
            {research.map((area, idx) => (
              <div
                key={"research-card-" + idx}
                className={clsx(
                  "bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-6 flex flex-col justify-between border border-white/40 transition-all duration-200 hover:border-[#FFD700] hover:shadow-lg hover:scale-[1.025] cursor-pointer items-center text-center",
                  styles["fade-in-pop"]
                )}
                style={{
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)',
                  animationDelay: `${idx * 120}ms`,
                  width: '220px',
                  minHeight: '260px',
                  maxWidth: '220px',
                }}
              >
                <h3 className="text-base sm:text-lg font-semibold mb-12 w-full text-center" style={{ color: '#B3A369' }}>
                  {area.title}
                </h3>
                <div className="flex justify-center items-center my-2" style={{ minHeight: '120px', height: '120px' }}>
                  <img src={area.image} alt={area.title + ' image'} className="w-32 h-32 object-contain mb-2" />
                </div>
                <p className="text-gray-200 text-xs sm:text-sm flex-1 text-center w-full" style={{ minHeight: '32px', maxHeight: '48px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{area.description}</p>
                {area.learnMoreUrl ? (
                  <Link
                    href={area.learnMoreUrl}
                    className="mt-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/30 text-white font-semibold shadow backdrop-blur-md bg-white/10 transition-all duration-200 hover:border-[#FFD700] hover:text-[#FFD700] hover:shadow-lg text-xs sm:text-base text-center"
                  >
                    Learn More
                  </Link>
                ) : (
                  <span className="mt-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20 text-white font-semibold shadow backdrop-blur-md bg-white/10 opacity-60 cursor-not-allowed text-xs sm:text-base text-center">Learn More</span>
                )}
              </div>
            ))}
          </div>
        </section>
          <section id="team-section" className="w-full min-h-screen flex flex-col items-center pt-40 pb-10 px-4 scroll-mt-32 z-10 relative">
          <h2 className="text-3xl sm:text-6xl font-extrabold text-white mb-8 sm:mb-10">Team</h2>

            <div className="w-full flex flex-col items-center mb-8">
              <span className="text-base sm:text-lg text-white/90 text-center font-medium mb-1" style={{maxWidth: '600px', lineHeight: '1.5'}}>
                We do not believe in a hierarchy and treat all ideas with same <span className="font-bold text-[#FFD700]">rigor.</span><br/>
                Ferdous just makes the executive call when democracy fails <span role="img" aria-label="smile">😄</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 mb-6">
              {team.map((member, idx) => (
                <div
                  key={member.name + '-' + teamPopKey}
                  className={clsx(
                    "flex flex-col items-center bg-white/10 rounded-xl p-4 border border-white/30 text-white font-semibold shadow transition-all duration-200 hover:border-[#FFD700] hover:text-[#FFD700] hover:shadow-lg hover:scale-[1.025] cursor-pointer backdrop-blur-md bg-white/10",
                    styles["fade-in-pop"]
                  )}
                  style={{
                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)',
                    animationDelay: `${idx * 120}ms`,
                  }}
                >
                  {member.image && (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="rounded-full object-cover mb-2 w-32 h-32"
                    />
                  )}
                  <span className="text-white font-medium mt-1 text-sm sm:text-base">{member.name}</span>
                  <span className="text-gray-300 text-[11px] sm:text-xs">{member.role}</span>
                  <div className="flex flex-row flex-wrap gap-1.5 mt-2 mb-1 justify-center w-full min-h-[40px]">
                    {/* Website */}
                    {member.links && member.links.find(l => l.label.toLowerCase().includes('website')) && (
                      <a
                        href={member.links.find(l => l.label.toLowerCase().includes('website'))?.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Website"
                        className="transition-all duration-200 rounded-full p-1.5 hover:scale-110 focus:scale-110 focus:outline-none hover:ring-2 hover:ring-[#FFD700] hover:ring-offset-2 hover:ring-offset-black hover:shadow-[0_0_12px_2px_#FFD70080] hover:text-[#FFD700]"
                      >
                        {/* Website SVG */}
                        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle"><circle cx="24" cy="24" r="22" fill="#fff" fillOpacity="0.12"/><path d="M24 12a12 12 0 100 24 12 12 0 000-24zm0 2a10 10 0 018.7 15.1c-1.2-2.2-3.7-3.6-6.7-3.6s-5.5 1.4-6.7 3.6A10 10 0 0124 14zm0 20a10 10 0 01-8.7-4.9c1.2-2.2 3.7-3.6 6.7-3.6s5.5 1.4 6.7 3.6A10 10 0 0124 34zm0-8a4 4 0 100-8 4 4 0 000 8z" fill="#43A047"/></svg>
                      </a>
                    )}
                    {/* LinkedIn */}
                    {member.links && member.links.find(l => l.label.toLowerCase().includes('linkedin')) && (
                      <a
                        href={member.links.find(l => l.label.toLowerCase().includes('linkedin'))?.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="transition-all duration-200 rounded-full p-1.5 hover:scale-110 focus:scale-110 focus:outline-none hover:ring-2 hover:ring-[#FFD700] hover:ring-offset-2 hover:ring-offset-black hover:shadow-[0_0_12px_2px_#FFD70080] hover:text-[#FFD700]"
                      >
                        {/* LinkedIn SVG */}
                        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle"><circle cx="24" cy="24" r="22" fill="#fff" fillOpacity="0.12"/><path d="M17 20h4v12h-4V20zm2-6a2 2 0 110 4 2 2 0 010-4zm5 6h4v1.7c.6-1.1 2-1.7 3.2-1.7 2.5 0 4.8 2.1 4.8 5.2V32h-4v-6c0-1.1-.9-2-2-2s-2 .9-2 2v6h-4V20z" fill="#0A66C2"/></svg>
                      </a>
                    )}
                    {/* Google Scholar */}
                    {member.links && member.links.find(l => l.label.toLowerCase().includes('scholar')) && (
                      <a
                        href={member.links.find(l => l.label.toLowerCase().includes('scholar'))?.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Google Scholar"
                        className="transition-all duration-200 rounded-full p-1.5 hover:scale-110 focus:scale-110 focus:outline-none hover:ring-2 hover:ring-[#FFD700] hover:ring-offset-2 hover:ring-offset-black hover:shadow-[0_0_12px_2px_#FFD70080] hover:text-[#FFD700]"
                      >
                        {/* Google Scholar SVG */}
                        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle">
                          <circle cx="24" cy="24" r="22" fill="#fff" fillOpacity="0.12"/>
                          <g>
                            <path d="M24 14.5L34.5 28H13.5L24 14.5Z" fill="#4285F4"/>
                            <path d="M24 18.5L18.5 26H29.5L24 18.5Z" fill="#34A853"/>
                            <path d="M14 30V32H34V30H14Z" fill="#FBBC05"/>
                            <ellipse cx="24" cy="36" rx="7" ry="2.5" fill="#EA4335"/>
                          </g>
                        </svg>
                      </a>
                    )}
                    {/* GitHub */}
                    {member.links && member.links.find(l => l.label.toLowerCase().includes('github')) && (
                      <a
                        href={member.links.find(l => l.label.toLowerCase().includes('github'))?.url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="transition-all duration-200 rounded-full p-1.5 hover:scale-110 focus:scale-110 focus:outline-none hover:ring-2 hover:ring-[#FFD700] hover:ring-offset-2 hover:ring-offset-black hover:shadow-[0_0_12px_2px_#FFD70080] hover:text-[#FFD700]"
                      >
                        {/* GitHub SVG */}
                        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle"><circle cx="24" cy="24" r="22" fill="#fff" fillOpacity="0.12"/><path d="M24 14c-5.5 0-10 4.5-10 10 0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.7 1.8-1 .1-.7.4-1.1.7-1.3-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1 .8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.7 0 3.7-2.3 4.6-4.5 4.8.4.3.8.9.8 1.8v2.7c0 .3.2.6.7.5A10 10 0 0034 24c0-5.5-4.5-10-10-10z" fill="#fff"/></svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

        <section id="publications-section" className="w-full min-h-screen flex flex-col items-center pt-40 pb-10 px-4 scroll-mt-32 z-10 relative">
          <h2 className="text-3xl sm:text-6xl font-extrabold text-white mb-6 sm:mb-8">Publications</h2>
          <p className="text-gray-200 text-sm sm:text-lg max-w-2xl mb-6 sm:mb-8">Explore our latest publications in top conferences and journals.</p>
          {/* Search bar, top right above publication list */}
          <div className="w-full max-w-6xl flex flex-row justify-end mb-4 z-10 relative">
            <form
              className="flex gap-2 items-center"
              onSubmit={e => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Search papers, authors or years..."
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all backdrop-blur-md w-60 sm:w-80 shadow text-xs sm:text-base"
                aria-label="Search publications"
              />
            </form>
          </div>
          <div className="w-full max-w-6xl overflow-x-auto">
            <div className="rounded-2xl bg-white/10 backdrop-blur-xl shadow-xl border border-white/20 overflow-hidden">
              <table className="w-full text-left text-white">
              <tbody>
                {filteredPublications.map((pub, idx) => (
                  <React.Fragment key={pub.title + '-' + idx}>
                    <tr className={clsx("transition-all duration-200", styles["fade-in-pop"]) } style={{animationDelay: `${idx * 80}ms`}}>
                      <td className="px-6 py-4 align-top min-w-[320px]">
                        <div className="flex items-center gap-6">
                          {/* Show custom media (image/gif/video) if provided, otherwise fallback to default */}
                          {pub.media ? (
                            pub.media.endsWith('.mp4') ? (
                              <video
                                src={pub.media}
                                className="w-28 h-28 object-cover rounded-xl bg-white/10 border border-white/10"
                                autoPlay
                                loop
                                muted
                                playsInline
                              >
                                Sorry, your browser does not support embedded videos.
                              </video>
                            ) : (
                              <Image
                                src={pub.media}
                                alt={pub.title + ' media'}
                                width={112}
                                height={112}
                                className="w-28 h-28 object-cover rounded-xl bg-white/10 border border-white/10"
                              />
                            )
                          ) : (
                            <video
                              src="/paper_logo.mp4"
                              className="w-28 h-28 object-cover rounded-xl bg-white/10 border border-white/10"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              Sorry, your browser does not support embedded videos.
                            </video>
                          )}
                          <div className="flex-1">
                              <div className="font-semibold text-sm sm:text-base text-white leading-tight mb-1">
                              {pub.title}
                            </div>
                            <div className="text-gray-300 text-xs sm:text-sm mb-2">{pub.authors}</div>
                            {pub.venue && (
                              <div className="text-[11px] sm:text-xs text-[#FFD700] font-semibold mb-1">{pub.venue}</div>
                            )}
                            <div className="flex flex-row items-center justify-between mt-2 gap-2">
                              <div className="flex flex-wrap gap-2">
                                {pub.codeUrl && (
                                  <a href={pub.codeUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full border border-white/30 text-white font-semibold text-xs shadow backdrop-blur-md bg-white/10 transition-all duration-200 hover:border-[#FFD700] hover:text-[#FFD700] hover:shadow-lg">Code</a>
                                )}
                                {pub.websiteUrl && (
                                  <a href={pub.websiteUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full border border-white/30 text-white font-semibold text-xs shadow backdrop-blur-md bg-white/10 transition-all duration-200 hover:border-[#FFD700] hover:text-[#FFD700] hover:shadow-lg">Website</a>
                                )}
                                {pub.arxivUrl && (
                                  <a href={pub.arxivUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full border border-white/30 text-white font-semibold text-xs shadow backdrop-blur-md bg-white/10 transition-all duration-200 hover:border-[#FFD700] hover:text-[#FFD700] hover:shadow-lg">arXiv</a>
                                )}
                                {pub.paperUrl && (
                                  <a href={pub.paperUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded-full border border-white/30 text-white font-semibold text-xs shadow backdrop-blur-md bg-white/10 transition-all duration-200 hover:border-[#FFD700] hover:text-[#FFD700] hover:shadow-lg">Paper</a>
                                )}
                                {pub.badge && (
                                  <span className="px-3 py-1 rounded-full border border-[#FFD700] text-black font-semibold text-xs shadow backdrop-blur-md bg-[#FFD700] transition-all duration-200 animate-pulse ml-1 whitespace-nowrap" title={pub.badge}>{pub.badge}</span>
                                )}
                              </div>
                              {pub.year && (
                                <span className="ml-4 text-[#FFD700] text-sm sm:text-base font-bold whitespace-nowrap">{pub.year}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    {idx !== filteredPublications.length - 1 && (
                      <tr aria-hidden="true">
                        <td colSpan={1} className="px-6 py-0">
                          <div className="w-full h-px bg-white/20 my-3" />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
              </table>
            </div>
          </div>
        </section>



        <section id="code-section" className="w-full min-h-screen flex flex-col items-center pt-40 pb-10 px-4 scroll-mt-32 z-10 relative">
          <h2 className="text-3xl sm:text-6xl font-extrabold text-white mb-6 sm:mb-8">Code</h2>
          <p className="text-gray-200 text-sm sm:text-lg max-w-2xl mb-8 sm:mb-10">We share open-source code and tools for the community. Here are some of our most accomplished repositories:</p>
          {/* Featured GitHub Repos */}
          <div className="w-full max-w-5xl flex flex-col sm:flex-row gap-8 justify-center items-center mb-8">
            {/* Featured repo cards from data */}
            {featuredRepos.map((repo, idx) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 max-w-xs w-full bg-white/10 border border-white/30 rounded-2xl shadow-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:border-[#FFD700] hover:shadow-lg hover:scale-[1.035] group backdrop-blur-xl mx-auto"
                style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)' }}
              >
                <div className="flex flex-row items-center gap-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" className="drop-shadow-md"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.07c.85.004 1.71.12 2.51.35 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"/></svg>
                  <span className="text-base sm:text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors">{repo.name}</span>
                </div>
                <p className="text-gray-200 text-sm sm:text-base flex-1">{repo.desc}</p>
                <div className="flex flex-row items-center justify-between mt-2">
                  <span className="flex items-center gap-1 text-[#FFD700] font-semibold text-base sm:text-lg">
                    <svg width="20" height="20" fill="#FFD700" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
                    {repo.stars}
                  </span>
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] sm:text-xs font-semibold">{repo.lang}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
        <section id="contact-section" className="w-full min-h-screen flex flex-col items-center pt-40 pb-10 px-4 scroll-mt-32 z-10 relative">
          <h2 className="text-3xl sm:text-6xl font-extrabold text-white mb-6 sm:mb-8">Contact</h2>
          <p className="text-gray-200 text-sm sm:text-lg max-w-2xl mb-6 sm:mb-8">
            Get in touch with us for collaborations, questions, or opportunities. For any official queries contact
            <a href="https://ferdous-alam.github.io/" className="underline text-[#FFD700] hover:text-[#B3A369] transition-colors font-semibold ml-1">Professor Ferdous Alam</a>{' '}directly.
          </p>
          <div className="w-full max-w-xl bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 p-5 sm:p-8 flex flex-col gap-6 items-center text-white text-sm sm:text-base">
            {/* Email */}
            <div className="flex flex-row items-center gap-4 w-full">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFD70022] shadow-lg">
                {/* Modern email icon */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="3" fill="#181c23"/><path d="M3 7l9 6 9-6" stroke="#FFD700" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="5" width="18" height="14" rx="3" stroke="#FFD700" strokeWidth="1.7"/></svg>
              </span>
              <a href={`mailto:${contact.email}`} className="text-base sm:text-lg font-semibold underline hover:text-[#FFD700] transition-colors break-all">{contact.email}</a>
            </div>
            {/* Office */}
            <div className="flex flex-row items-center gap-4 w-full">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFD70022] shadow-lg">
                {/* Modern office/building icon */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth="1.7"><rect x="4" y="4" width="16" height="16" rx="3" fill="#181c23"/><rect x="4" y="4" width="16" height="16" rx="3" stroke="#FFD700" strokeWidth="1.7"/><rect x="8" y="12" width="2" height="4" fill="#FFD700"/><rect x="14" y="12" width="2" height="4" fill="#FFD700"/></svg>
              </span>
              <span className="text-base sm:text-lg font-semibold break-words">{contact.office}</span>
            </div>
            {/* Lab */}
            <div className="flex flex-row items-center gap-4 w-full">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFD70022] shadow-lg">
                {/* Modern house/building icon */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#FFD700" strokeWidth="1.7">
                  <rect x="4" y="10" width="16" height="8" rx="2" fill="#181c23" stroke="#FFD700" strokeWidth="1.7"/>
                  <path d="M2 12l10-7 10 7" stroke="#FFD700" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="9" y="14" width="2.5" height="4" fill="#FFD700"/>
                  <rect x="12.5" y="14" width="2.5" height="4" fill="#FFD700"/>
                </svg>
              </span>
              <span className="text-base sm:text-lg font-semibold break-words">{contact.lab}</span>
            </div>
          </div>
        </section>
      </main>
    {/* Footer */}
    <footer style={{
      width: "100%",
      textAlign: "center",
      padding: "24px 0 14px 0",
      color: "#FFD700",
      fontSize: 13,
      opacity: 0.85,
      letterSpacing: 0.2,
      position: "relative",
      zIndex: 2
    }}>
      &copy; {new Date().getFullYear()} Inference Lab. All rights reserved.
    </footer>
    </div>
  );
}
