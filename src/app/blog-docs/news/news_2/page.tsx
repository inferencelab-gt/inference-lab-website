"use client";
import { useState, useEffect } from "react";
import HighlightGlow from "@/components/HighlightGlow";

export default function NewsHiringPage() {
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
        <div className={
          (dark ? 'bg-[#181c23] text-white' : 'bg-white text-[#181c23]') +
      ' min-h-screen transition-colors duration-300 flex flex-col items-center pt-32 sm:pt-40 text-[15px] sm:text-base relative'
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
          {/* Top image */}
          <div className="w-full flex justify-center mb-8">
            <img
              src="/group1.jpg"
              alt="Lab group"
              className="rounded-2xl shadow-xl max-w-md w-full object-cover"
              style={{ maxHeight: '180px' }}
            />
          </div>
          <div className="flex flex-col items-center w-full">
            <span className={
              'font-bold tracking-wide ' +
              (dark ? 'text-[#FFD700] drop-shadow-lg' : 'text-[#232733] drop-shadow') +
              ' text-2xl sm:text-4xl mb-2'
            }>
              Inference Lab is Hiring!
            </span>
            <div className="relative w-120 h-2 mt-4 mb-8 mx-auto rounded-full overflow-hidden">
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
          <main className="w-full max-w-2xl mx-auto">
            <section className="mb-10 px-4 sm:px-6">
              <div className={dark ? "mx-auto bg-[#232733] bg-opacity-90 rounded-2xl shadow-[0_8px_32px_0_rgba(255,215,0,0.25),0_1.5px_8px_0_rgba(0,0,0,0.45)] p-6 my-6 max-w-xl w-full sm:w-4/5 text-left" : "mx-auto bg-blue-50 bg-opacity-80 rounded-2xl shadow-2xl p-6 my-6 max-w-xl w-full sm:w-4/5 text-left"}>
                <div className="mb-4">
                  <span className="font-semibold text-base block mb-1">PhD Positions (Fall 2026)</span>
                  <span>
                    We are looking for multiple passionate PhD students at the intersection of the following two themes, to join Inference Lab for Fall 2026. If you are excited about pushing the boundaries of AI and engineering, join us at Georgia Tech and help shape the future of intelligent design and manufacturing.
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-base block mb-1">Undergraduate Research (Immediate)</span>
                  <span>
                    We are also looking for motivated undergraduate and BS/MS students interested in joining our research projects right away! If you want hands-on experience in AI-native design, manufacturing, or robotics, reach out and get involved in cutting-edge research at Inference Lab.
                  </span>
                </div>
              </div>

              <section className="mb-32">
                <h2 className={dark ? "text-lg font-bold text-[#FFD700] mb-2" : "text-lg font-bold text-[#232733] mb-2"}></h2>
                <h2 className={dark ? "text-lg font-bold text-[#FFD700] mb-2" : "text-lg font-bold text-[#232733] mb-2"}></h2>
              </section>
              
              {/* Section 1: Foundational AI for Computational Design & Manufacturing */}
              <section className="mb-8">
                <h2 className={dark ? "text-lg font-bold text-[#FFD700] mb-2" : "text-lg font-bold text-[#232733] mb-2"}>Theme 1</h2>
                <h2 className={dark ? "text-lg font-bold text-[#FFD700] mb-2" : "text-lg font-bold text-[#232733] mb-2"}>Foundational AI for Computational Design, Simulation & Manufacturing</h2>
                <p>
                  We are building the next generation of engineering-native multimodal foundation models. AI systems that move beyond language and vision to reason about 3D shapes, 
                  integrate physics, and drive design–simulation–manufacturing automation. 
                  We are aiming to create a new type of foundation models that not only generates text and image but can create, simulate, and optimize computational design at scale. 
                  We are mainly interested in creating AI systems that generalize to a broad range of applications.
                </p>&nbsp;

                <p>
                  As a PhD student, you will work at the intersection of <b>generative modeling, agentic framework, physics-guided AI, computational design, and programming language theory</b>. 
                  You will make pioneering contribution to developing AI that unifies design and simulation into intelligent, autonomous engineering systems.
                </p>&nbsp;

                <p>
                  Candidates with strong mathematical, computational, or AI backgrounds are encouraged to apply. Strong programming background is a plus.
                  Most importantly, we seek students with the vision and maturity to tackle high-risk, high-reward problems that can redefine the future of engineering and AI.
                </p>
              </section>
              {/* Section 2: Embodied manufacturing intelligence: Robotic Manufacturing + AI */}
              <section className="mb-8">
                <h2 className={dark ? "text-lg font-bold text-[#FFD700] mb-2" : "text-lg font-bold text-[#232733] mb-2"}>Theme 2</h2>
                <h2 className={dark ? "text-lg font-bold text-[#FFD700] mb-2" : "text-lg font-bold text-[#232733] mb-2"}>Embodied manufacturing intelligence</h2>

                <p>
                  Here at Inference Lab we believe that embodiment is a core part of creating truly capable machine intelligence. 
                  While today’s robots excel at scripted pick-and-place, they cannot yet <strong>understand and manipulate 3D 
                  geometry for precision manufacturing tasks</strong>. We are aiming to work at the intersection of robot
                  learning and 3D shape manipulation with high impact application in precision tasks. We are particularly interested in deploying our methods for 
                  robotic manufacturing tasks to redefine the next generation of manufacturing workflow. This is critical because manufacturing alone 
                  contributed to almost $2.91 trillion in value to the US economy in 2024. 
                </p>&nbsp;

                <p>
                  The research will begin with AI- and RL-driven sensor based 3D printing systems, but the scope is much larger: enabling robots to grasp, orient, and operate on complex 3D parts, whether tightening a screw, assembling components, or adapting tools for subtractive and finishing processes. 
                  We like to think that our research is not just perception or control, but to give robots a <strong>geometric understanding of objects and tasks</strong> so they can plan and execute with the same nuance as human experts.
                </p>&nbsp;

                <p>
                  You will work at the intersection of <strong>ROS, multimodal sensing, reinforcement learning, behavior cloning/imitation learning, geometric reasoning, teleoperation, and robotic manipulation</strong>. 
                  In the long term, we will build robotic intelligence that integrate CAD-level knowledge with real-time perception, simulate possible outcomes, and then <em>act with precision and adaptability</em> in real-world 
                  unstructured manufacturing tasks.
                </p>&nbsp;

                <p>
                  Candidates with backgrounds in robotics, controls, computer vision, or AI/RL are encouraged to apply. Experience with hardware is a plus. 
                  You will have the opportunity to make pioneering contribution to a new and upcoming field of research in high impact application areas by building <strong>geometry-aware, autonomous systems</strong>, the robotic backbone of a Universal Manufacturing OS.
                </p>


              </section>

              {/* Postdoc Section */}
              <section className="mb-8">
                <h2 className={dark ? "text-base font-bold text-[#FFD700] mb-2" : "text-base font-bold text-[#232733] mb-2"}>Postdoctoral and Visiting Researcher Opportunities</h2>
                <p>
                  While I do not currently have funding for postdoctoral researchers or visiting students, this situation can always change! 
                  If you have your own funding through a fellowship, that's also nice! 
                  So, if you have relevant background and you are strongly interested in our vision, please reach out. 
                  Perhaps, we can figure something out :) 
                </p>
              </section>
              {/* Georgia Tech Undergrad & MS Section */}
              <section className="mb-8">
                <h2 className={dark ? "text-base font-bold text-[#FFD700] mb-2" : "text-base font-bold text-[#232733] mb-2"}>Georgia Tech Undergrad & MS Students</h2>
                <p>
                  Georgia Tech undergraduate and MS students are welcome to join the lab for research credit, BS/MS research, or independent study. 
                  If you are interested in gaining hands-on experience in AI-native design, simulation, or computational manufacturing research, please reach out! 
                  I am always looking for motivated students to join our projects.
                </p>
              </section>
              {/* General PhD Application Info */}
              <section className="mb-8">
                <h2 className={dark ? "text-base font-bold text-[#FFD700] mb-2" : "text-base font-bold text-[#232733] mb-2"}>General Application Information</h2>
                <p>
                  In general, I plan to hire one or more PhD students each year. The best way to ensure I see your application is to mention my name and your specific interests in your application materials. You are welcome to reach out directly, but please note that a response is not guaranteed due to the volume of inquiries. In any case, I will review all applications that mention my name and interests.<br /><br />
                  If you do choose to reach out, please send a copy of your CV and a brief note about your research interests to Professor Alam (<a href="mailto:ferdous@gatech.edu" className={dark ? "text-[#FFD700] underline" : "text-[#232733] underline"}>ferdous@gatech.edu</a>). Please avoid generic terms, instead share what truly excites you and is unique to your personal interests and background. 
                  As a research lab, we value your uniqueness and passion above everything else.<br /><br />
                  <span className={dark ? "text-[#FFD700] font-semibold" : "text-[#232733] font-semibold"}>Please write your own thoughts when reaching out. An LLM-driven summary of our research vision is hardly attractive to read.</span>
                </p>
              </section>
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