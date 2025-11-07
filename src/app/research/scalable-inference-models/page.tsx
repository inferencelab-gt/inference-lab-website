"use client";
import { useState, useEffect } from "react";

export default function ScalableInferenceModelsPage() {
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

  if (dark === null) {
    return <div style={{background:'#181c23',minHeight:'100vh',width:'100vw'}} />;
  }
  return (
    <div
      className={
        (dark ? 'bg-[#181c23] text-white' : 'bg-white text-[#181c23]') +
        ' min-h-screen transition-colors duration-300 flex flex-col items-center pt-32 sm:pt-40 text-lg sm:text-xl relative'
      }
    >
      {/* Toggle in top right, smaller */}
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
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto px-4 sm:px-6">
        <span
          className={
            'font-bold tracking-wide ' +
            (dark ? 'text-[#FFD700] drop-shadow-lg' : 'text-[#232733] drop-shadow') +
            ' text-3xl sm:text-5xl text-center w-full'
          }
        >
          Physics and knowledge-integrated AI
        </span>

        <p className="mt-18 text-left w-full">

          Modern AI systems, trained on text and images, can imitate reasoning but cannot truly 

          <span style={{
            textDecoration: 'underline',
            textDecorationColor: '#FFD700',
            textDecorationThickness: '2px',
            textUnderlineOffset: '3px',
            color: '#FFD700',
            fontWeight: 500
          }}>
            {' reason '} 
          </span>

          about engineering. They lack spatial understanding,
          cannot interpret how 3D shapes behave under load, and fail to connect geometry, physics, 
          and design intent. Engineering, however, demands structured reasoning, from spatial intuition 
          to first-principles analysis, and the ability to connect these with tacit human expertise.<br /><br />

          Our research aims to build AI that can reason like an engineer. This means teaching machines 
          to understand geometry, infer relationships among forces, materials, and constraints, and 
          ground their decisions in physics. We go beyond numerical prediction: our goal is 
          
          <span style={{
            textDecoration: 'underline',
            textDecorationColor: '#FFD700',
            textDecorationThickness: '2px',
            textUnderlineOffset: '3px',
            color: '#FFD700',
            fontWeight: 500
          }}>
            {'  engineering reasoning '} 
          </span>, 
          AI systems that can analyze, explain,
          and make physically valid decisions.<br /><br />

          A major challenge is that engineering knowledge is partly explicit (governed by physics) 
          and partly implicit (human intuition, heuristics, and preferences). The latter remains 
          unencoded and unscalable while current heuristics are useful but brittle and domain-specific. 
          We address this by developing methods to represent both physical laws and unstructured 
          human expertise in unified learning frameworks.<br /><br />

          This integration allows AI to reason across levels of abstraction, from geometry to fabrication, 
          creating systems that generalize beyond narrow datasets. By grounding intelligence in physics 
          and human insight, we move toward AI that not only computes but           
          <span style={{
            textDecoration: 'underline',
            textDecorationColor: '#FFD700',
            textDecorationThickness: '2px',
            textUnderlineOffset: '3px',
            color: '#FFD700',
            fontWeight: 500
          }}>
            {'  understands '} 
          </span>, 
          engineering.

        </p>


        <footer className="mt-16 text-center text-base opacity-70 w-full">
          &copy; {new Date().getFullYear()} Inference Lab. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
