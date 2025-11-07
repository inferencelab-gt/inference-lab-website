"use client";
import { useState, useEffect } from "react";

export default function UniversalEngineeringIntelligencePage() {
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
          Foundation Models for AI-native Engineering
        </span>
        
        <p className="mt-18 text-left w-full">

            Mechanical and computational engineering has been evolving towards an 
            intelligent and integrated system over the last few decades by 
            developing new technologies such as Computer-Aided Design for 
            digital design, advanced simulation and modeling tools, 
            Computer-Aided Manufacturing and Digital Twins 
            for digital manufacturing, the Internet of Things for real-time sensing, 
            planning, control and predictive maintenance.<br /><br />


            Despite these significant advancements, there remains a critical gap,
            <span style={{
              textDecoration: 'underline',
              textDecorationColor: '#FFD700',
              textDecorationThickness: '2px',
              textUnderlineOffset: '3px',
              color: '#FFD700',
              fontWeight: 500
            }}>
              {' '}no universal platform exists to unify these technologies due to the lack 
              of truly capable engineering intelligence.
            </span> Our research vision addresses 
            this gap by utilizing our core expertise in advanced artificial intelligence 
            to build a universal platform for the design and manufacturing domain with 
            artificial general engineering intelligence. The impact of such a platform 
            will be transformative, enabling intelligent decision-making and automation 
            across the entire design and manufacturing pipeline.  For decades, engineering 
            software has been built around rigid, unintelligent tools; we are reimagining this 
            foundation by developing the AI-native software for engineering tasks.<br /><br />
            
            Central to achieving this goal are three key challenges:
            <ol className="list-decimal ml-6 my-2">
                <li>lack of unified representation framework for diverse engineering data modalities,</li>
                <li>lack of first-principles knowledge in AI algorithms for robust and feasible decision-making,</li>
                <li>lack of embodied AI for seamless integration of AI-software with hardware.</li>
            </ol>
    

            Current foundation models, trained on 
            text and images, have transformed language and vision understanding but 
            cannot reason about the physical world or 3D geometry or rigorous engineering tasks. We envision 
            <span style={{
              textDecoration: 'underline',
              textDecorationColor: '#FFD700',
              textDecorationThickness: '2px',
              textUnderlineOffset: '3px',
              color: '#FFD700',
              fontWeight: 500
            }}>
              {' Vision-Language-Shape (VLS) models '}
            </span>
            , a new generation of foundation models that unify geometric, physical, 
            and semantic reasoning. These models will connect form, function, and 
            fabrication, enabling AI to truly understand the built world rather 
            than simply describe it.<br /><br />
            
            From a fundamental perspective, our research deepens our understanding 
            of 3D data representation, functional design, autonomy in robotics and 
            manufacturing, and the interplay between data and first principles. 
            Our research also creates new intellectual relationships between mechanical 
            engineering and data-driven techniques, and identify fundamental capabilities, 
            and limitations of computational intelligence for engineering applications. 
            The societal impact of our research will be to make engineering more 
            sustainable, efficient, and accessible while accelerating innovation.  
        
        </p>

        <footer className="mt-16 text-center text-base opacity-70 w-full">
          &copy; {new Date().getFullYear()} Inference Lab. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
