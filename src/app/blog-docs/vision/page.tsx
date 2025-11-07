"use client";
import { useState, useEffect } from "react";
import HighlightGlow from "@/components/HighlightGlow";

export default function VisionPage() {
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

  // Prevent white flash: render a full-screen dark background while determining mode
  if (dark === null) {
    return <div style={{background:'#181c23',minHeight:'100vh',width:'100vw'}} />;
  }
  return (
    <div className={
      (dark ? 'bg-[#181c23] text-white' : 'bg-white text-[#181c23]') +
      ' min-h-screen transition-colors duration-300 flex flex-col items-center pt-32 sm:pt-40 text-lg sm:text-xl relative'
    }>
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
      <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 mb-2">
        <div className="flex flex-col items-center w-full">
          <span className={
            'font-bold tracking-wide ' +
            (dark ? 'text-[#FFD700] drop-shadow-lg' : 'text-[#232733] drop-shadow') +
            ' text-3xl sm:text-5xl'
          }>
            Vision
          </span>
          {/* Gradient divider matching box outlines */}
          <div className="relative w-50 h-2 mt-4 mb-8 mx-auto rounded-full overflow-hidden">
            <div className={dark
              ? "absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#232733] to-[#FFD700] opacity-80"
              : "absolute inset-0 bg-gradient-to-r from-blue-300 via-blue-50 to-blue-300 opacity-80"
            } />
            <div className={dark
              ? "absolute inset-1 bg-[#232733] rounded-full"
              : "absolute inset-1 bg-blue-50 rounded-full"
            } />
          </div>
        </div>
      </div>
      <main className="w-full max-w-2xl mx-auto">
        <section className="mb-10 px-4 sm:px-6">
            <div className={dark ? "mx-auto bg-[#232733] bg-opacity-90 rounded-2xl shadow-[0_8px_32px_0_rgba(255,215,0,0.25),0_1.5px_8px_0_rgba(0,0,0,0.45)] p-6 my-6 transform -translate-y-1 max-w-xl w-full sm:w-4/5 text-center" : "mx-auto bg-blue-50 bg-opacity-80 rounded-2xl shadow-2xl p-6 my-6 transform -translate-y-1 max-w-xl w-full sm:w-4/5 text-center"}>
              An academic lab with a startup soul<br />
              our product is impact, not just papers.
          </div>
          <p className="text-[17px] leading-[1.7]">

            The field of mechanical engineering has been evolving towards an 
            intelligent and integrated system over the last few decades by 
            developing new technologies such as Computer-Aided Design for 
            digital design, advanced simulation and modeling tools, 
            Computer-Aided Manufacturing and Digital Twins 
            for digital manufacturing, the Internet of Things for real-time sensing, 
            planning, control and predictive maintenance.<br /><br />


            Despite these significant advancements, there remains a critical gap, <HighlightGlow dark={dark} glow={dark ? "0_0_6px_#FFD700" : "0_0_6px_#3B82F6"}>no universal platform exists to unify these technologies</HighlightGlow> due to the lack of truly capable engineering intelligence.
             
             
            Our research vision addresses 
            this gap by utilizing our core expertise in advanced artificial intelligence 
            to build a universal platform for the design and manufacturing domain with 
            artificial general engineering intelligence. The impact of such a platform 
            will be transformative, enabling intelligent decision-making and automation 
            across the entire design and manufacturing pipeline. <br /><br />


            Our long-term vision is to build the next generation of engineering and manufacturing 
            automation by taking a synergistic hardware-software approach.
            We envision an <HighlightGlow dark={dark} glow={dark ? "0_0_6px_#FFD700" : "0_0_6px_#3B82F6"}>Intelligent and Integrated Universal Engineering Operating System</HighlightGlow> that 
            combines foundational AI systems at its core for intelligent CAD, CAE, CAM, PDM/PLM, robotic manufacturing 
            and process control. 

            <div className={dark ? "bg-[#232733] bg-opacity-90 rounded-2xl shadow-[0_8px_32px_0_rgba(255,215,0,0.25),0_1.5px_8px_0_rgba(0,0,0,0.45)] p-6 my-6 transform -translate-y-1" : "bg-blue-50 bg-opacity-80 rounded-2xl shadow-2xl p-6 my-6 transform -translate-y-1"}>
              <span className={dark ? "font-semibold text-lg mb-2 block px-2" : "font-semibold text-lg mb-2 block px-2"}>Central to achieving this goal are three key challenges:</span>
              <ol className="list-decimal ml-6 my-2 space-y-2">
                <li>
                  <HighlightGlow dark={dark} glow={dark ? "0_0_6px_#FFD700" : "0_0_6px_#3B82F6"}>
                    lack of unified representation framework
                  </HighlightGlow>
                  {" "}for diverse engineering data modalities
                </li>
                <li>
                  <HighlightGlow dark={dark} glow={dark ? "0_0_6px_#FFD700" : "0_0_6px_#3B82F6"}>
                    lack of first-principles knowledge
                  </HighlightGlow>
                  {" "}in AI algorithms for robust and feasible decision-making
                </li>
                <li>
                  <HighlightGlow dark={dark} glow={dark ? "0_0_6px_#FFD700" : "0_0_6px_#3B82F6"}>
                    lack of embodied AI
                  </HighlightGlow>
                  {" "}for seamless integration of AI-software with manufacturing hardware
                </li>
              </ol>
            </div>

            <span>
              <HighlightGlow dark={dark} glow={dark ? "0_0_6px_#FFD700" : "0_0_6px_#3B82F6"}>
                Off-the-shelf AI algorithms
              </HighlightGlow>
              , while powerful in areas like text and image processing, are <HighlightGlow dark={dark} glow={dark ? "0_0_6px_#FFD700" : "0_0_6px_#3B82F6"}>
                inadequate for rigorous engineering tasks
              </HighlightGlow>.
            </span> Current generative AI technologies, designed for large-scale internet data, 
            often struggle with even basic design and manufacturing problems. 
            Engineering requires AI algorithms that can understand 3D data 
            representations, efficiently combine physics with data-driven 
            approaches, and self-correct in real-world processes, which are often beyond the capability of existing AI solutions.<br /><br /> 

            From a fundamental perspective, research at inference lab deepens our understanding 
            of 3D data representation, functional design, autonomy in robotics and 
            manufacturing, and the interplay between data and first principles. 
            Our research also creates new intellectual relationships between mechanical 
            engineering and data-driven techniques, and identify fundamental capabilities, 
            and limitations of computational intelligence for engineering applications. 
            The societal impact of our research will be to make engineering and 
            manufacturing more sustainable, efficient, and accessible while 
            accelerating unprecedented innovation.<br /><br />          
          </p>
          <div className={
            'w-full mt-8 border-b-2 rounded opacity-15 ' +
            (dark ? 'border-[#FFD700]' : 'border-[#232733]')
          } />
        </section>
      </main>
      {/* Footer */}
      <footer className={
        'w-full text-center pt-10 pb-5 font-semibold ' +
        (dark ? 'text-[#FFD700]' : 'text-[#232733]') +
        ' opacity-70 tracking-wide text-[15px]'
      }>
        &copy; {new Date().getFullYear()} Inference Lab. All rights reserved.
      </footer>
    </div>
  );
}
