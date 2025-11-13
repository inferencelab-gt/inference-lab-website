"use client";
import { useState, useEffect } from "react";

export default function PhilosophyPage() {
  const [dark, setDark] = useState<null | boolean>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('inference-dark-mode');
    if (stored === 'true' || stored === 'false') {
      setDark(stored === 'true');
    } else {
      setDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  const handleToggle = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem('inference-dark-mode', String(next));
      return next;
    });
  };

  const bg = dark ? '#181c23' : '#fff';
  const text = dark ? '#f7f7f7' : '#232733';

  if (dark === null) return null;

  return (
    <div className={
      (dark ? 'bg-[#181c23] text-white' : 'bg-white text-[#232733]') +
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
            Philosophy
          </span>
          {/* Gradient divider matching box outlines */}
          <div className="relative w-75 h-2 mt-4 mb-8 mx-auto rounded-full overflow-hidden">
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
      <div>
        <main style={{ maxWidth: 720, margin: "0 auto", padding: "2.5rem 1.5rem" }}>
          {/* --- Philosophy Content Start --- */}
          <section style={{ marginBottom: 48 }}>

          <div className={dark ? "mx-auto bg-[#232733] bg-opacity-90 rounded-2xl shadow-[0_8px_32px_0_rgba(255,215,0,0.25),0_1.5px_8px_0_rgba(0,0,0,0.45)] p-6 my-6 transform -translate-y-1 max-w-xl w-full sm:w-4/5 text-center" : "mx-auto bg-blue-50 bg-opacity-80 rounded-2xl shadow-2xl p-6 my-6 transform -translate-y-1 max-w-xl w-full sm:w-4/5 text-center"}>
              It's all about ideas
          </div>

            As a research lab, we are driven by the impact of our work. Papers should be a byproduct of the research, not the main focus. <span style={{ opacity: 0.7 }}>But what do I mean by impact?</span> 
            
            <h2 style={{ fontSize: 20, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '32px 0 12px 0', letterSpacing: 0.2 }}>What makes an idea impactful?</h2>
            <ul style={{ margin: '0 0 18px 24px', fontSize: 16, lineHeight: 1.7, opacity: 0.92 }}>
              <li><strong>Generalizability:</strong> Ideas must generalize to a wide range of similar problems and not just solve a narrow niche.</li>
              <li><strong>Scalability:</strong> Ideas must scale to real-world implementation. Most new ideas face the challenge of scalability; only those that scale can survive.</li>
              <li><strong>Value creation:</strong> Ideas must create value in the real world by helping society and human civilization. They should solve real, not fabricated, problems.</li>
            </ul>
            <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
              What I have learned the hard way is that your work will almost always be judged by its impact.<br />
              <span style={{ opacity: 0.7 }}>What you work on is perhaps more important than how hard you work on something.</span><br />
              So it is critical that you start thinking about this as early as possible in your research career.
            </p>
            <div style={{ margin: '36px 0 0 0', borderBottom: `1.5px solid ${dark ? '#FFD700' : '#232733'}`, width: '100%', opacity: 0.12, borderRadius: 2 }} />
          </section>
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '0 0 14px 0', letterSpacing: 0.2 }}>Before an idea, we need a problem</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 12, opacity: 0.85 }}>
              Picking an important problem is more art than science. I have been learning this since the start of my research career and continue to do so.<br />
              My general view is to spend sufficient time studying a problem before jumping to a solution. Real progress comes from understanding a research problem from diverse perspectives and discovering novel insights.<br />
              Our lab expects students to deeply think about the problem they are attempting to solve. This often requires rigorous analysis and experimental design—a habit that will put you ahead in your professional career.
            </p>
            <ul style={{ margin: '0 0 18px 24px', fontSize: 16, lineHeight: 1.7, opacity: 0.92 }}>
              <li>Impactful</li>
              <li>Interesting</li>
              <li>Not possible to solve efficiently even with state-of-the-art methods</li>
            </ul>
            <p style={{ fontSize: 16, lineHeight: 1.7, opacity: 0.8 }}>
              <span style={{ opacity: 0.7 }}>What does “efficiency” mean here?</span> Efficiency can come from many perspectives: Is it straightforward to deploy? Does it use extensive resources? Does it require extensive expertise? Does it generalize? Can it solve unstructured problems?
            </p>
            <div style={{ margin: '36px 0 0 0', borderBottom: `1.5px solid ${dark ? '#FFD700' : '#232733'}`, width: '100%', opacity: 0.12, borderRadius: 2 }} />
          </section>
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '0 0 14px 0', letterSpacing: 0.2 }}>Role of publications</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 12, opacity: 0.85 }}>
              To perform research at the bleeding edge of technology, we need to communicate our ideas frequently with the research community and get feedback from peer reviewers. With all its flaws, peer review is still critical to make a work more rigorous.<br />
              Publishing regularly helps us make realistic progress towards a goal. The rule of thumb is to show a working idea on simpler problems and publish a peer-reviewed conference paper. Hopefully, the idea matures quickly and we can opt for a journal publication with more rigorous discussion.<br />
              I encourage a central theme throughout all the publications of a student. This becomes very important on the job market. If we are prepared apriori, you will not need to fabricate a story to tie all your work together.
            </p>
            <div style={{ margin: '36px 0 0 0', borderBottom: `1.5px solid ${dark ? '#FFD700' : '#232733'}`, width: '100%', opacity: 0.12, borderRadius: 2 }} />
          </section>
          <section>
            <h2 style={{ fontSize: 22, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '0 0 14px 0', letterSpacing: 0.2 }}>Why and when AI for engineering?</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 12, opacity: 0.85 }}>
              This is an important question. We see a lot of AI applications that sometimes come from chasing trends rather than real-world necessity. My PhD advisor used to call this GIGO (garbage-in, garbage-out).<br />
              In general, I am not in favor of applying AI as a first solution to an existing problem. This may sound oxymoronic as I am an AI researcher, but let me explain.<br />
              Most of human history has been spent on empirical understanding. In the last few hundred years, we have focused on formalizing many physical phenomena. Despite tremendous progress, we still have limited understanding of many tasks. Friction, for example, is difficult to model mathematically. The same goes for engineering workflows that require human cognition rather than a mathematical model.<br />
              The age of AI is about combining and automating both empirical learning and formalization. Whenever a problem is unstructured and a mathematical model is not feasible, AI can be a viable solution. The approach of Inference Lab is to ask:
            </p>
            <ul style={{ margin: '0 0 18px 24px', fontSize: 16, lineHeight: 1.7, opacity: 0.92 }}>
              <li>Is the problem unstructured?</li>
              <li>Is it possible to get a mathematical model of the problem?</li>
              <li>Do we have a lot of data to extract meaningful understanding?</li>
              <li>How easy or difficult is it to verify a solution?</li>
            </ul>

            <div style={{ margin: '36px 0 0 0', borderBottom: `1.5px solid ${dark ? '#FFD700' : '#232733'}`, width: '100%', opacity: 0.12, borderRadius: 2 }} />

          </section>
          <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '32px 0 14px 0', letterSpacing: 0.2 }}>About Inference lab</h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 12, opacity: 0.85 }}>
            We are not just a research group, we are building <span style={{ color: '#FFD700', fontWeight: 600, textDecoration: 'underline', textDecorationColor: '#FFD700', textUnderlineOffset: '3px' }}>Universal Engineering Intelligence</span>, 
            a movement to rethink how we make things for the physical world. We think of Inference Lab as the world’s first academic research accelerator, where students are co-builders, not just authors. It’s a place that moves like a startup, fast, focused, and fearless, but with the freedom to pursue ideas that no investor would fund, and the vision to build what industry won’t dare.

            At Inference Lab, we explore how AI can reason about materials, geometry, forces, and machines. Our work spans computational design, engineering logic, robotic manufacturing, and simulation, unified by a single goal: to teach machines how to think like engineers.

            We are creating intelligent systems that can synthesize, validate, and optimize shapes, processes, and decisions without relying on traditional, rigid tools. Our work has the potential to transform how we design, simulate, and manufacture everything, not incrementally, but fundamentally. We build systems that don’t just run algorithms, they infer, adapt, and understand.

            If you're obsessed with AI, frustrated by today’s design, simulation, and manufacturing tools, and dream of changing how we build things, then reach out. Intelligence alone won’t get us there. We need people who are curious, relentless, visionary, and wildly passionate about this pursuit. If that’s you, let’s build <span style={{ color: '#FFD700', fontWeight: 600 }}>Universal Engineering Intelligence</span> together and change the world.
          </p>
            <div style={{ margin: '36px 0 0 0', borderBottom: `1.5px solid ${dark ? '#FFD700' : '#232733'}`, width: '100%', opacity: 0.12, borderRadius: 2 }} />
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
    </div>
  );
}
