"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export default function OSPage() {
  // Section nav items split for two-row nav
  // Three-row navbar for better organization
  const navItemsRow1 = [
    { label: 'What is Inference OS?', id: 'os-what' },
    { label: 'Mutual expectations', id: 'os-expectations' },
    { label: 'Career development', id: 'os-career' },
  ];
  const navItemsRow2 = [
    { label: 'When and where do we publish', id: 'os-publish' },
    { label: 'How do we communicate', id: 'os-comm' },
    { label: 'Lab culture', id: 'os-culture' },
  ];
  const navItemsRow3 = [
    { label: 'Ethical considerations', id: 'os-ethics' },
    { label: 'Code & documentation', id: 'os-code' },
    { label: 'What course should you take', id: 'os-courses' },
  ];
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
      {/* Minimal two-row nav below title */}
      
      <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 mb-2">
        <div className="flex flex-col items-center w-full">
          <span className={
            'font-bold tracking-wide ' +
            (dark ? 'text-[#FFD700] drop-shadow-lg' : 'text-[#232733] drop-shadow') +
            ' text-3xl sm:text-5xl'
          }>
            Inference OS
          </span>
          {/* Gradient divider matching box outlines */}
          <div className="relative w-90 h-2 mt-4 mb-8 mx-auto rounded-full overflow-hidden">
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

      
      <div style={{ height: 28 }} />
      <nav style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.2rem',
        marginBottom: 16,
      }}>
        {[navItemsRow1, navItemsRow2, navItemsRow3].map((row, idx) => (
          <ul
            key={idx}
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1.1rem',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 0,
              padding: 0,
              listStyle: 'none',
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: 0.1,
            }}
          >
            {row.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  style={{
                    color: dark ? '#FFD700' : '#232733',
                    opacity: 0.85,
                    textDecoration: 'none',
                    padding: '4px 8px',
                    borderRadius: 8,
                    transition: 'background 0.15s, color 0.15s',
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                  onMouseOver={e => e.currentTarget.style.background = dark ? '#FFD70022' : '#23273311'}
                  onMouseOut={e => e.currentTarget.style.background = 'none'}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </nav>
        <main style={{ maxWidth: 720, margin: "0 auto", padding: "2.5rem 1.5rem" }}>      
        <section id="os-what" style={{ marginBottom: 48 }}>
          <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 12, opacity: 0.85 }}>
            We call the operating principles of our lab <strong>Inference OS</strong>. It’s a mindset, a culture, and a way of working that empowers us to tackle hard problems in new ways. <strong>Inference OS</strong> is built on the theme <span style={{ color: '#FFD700', fontWeight: 600, letterSpacing: '0.04em' }}>FREE</span>:
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0, margin: '1.2em 0 2em 0', fontSize: '1.08em' }}>
            <li><span style={{ color: '#FFD700', fontWeight: 600 }}>F</span>earless in curiosity</li>
            <li><span style={{ color: '#FFD700', fontWeight: 600 }}>R</span>uthless in execution</li>
            <li><span style={{ color: '#FFD700', fontWeight: 600 }}>E</span>mpathetic in collaboration</li>
            <li><span style={{ color: '#FFD700', fontWeight: 600 }}>E</span>mpowered in vision</li>
          </ul>
          <div style={{ margin: '36px 0 0 0', borderBottom: `1.5px solid ${dark ? '#FFD700' : '#232733'}`, width: '100%', opacity: 0.12, borderRadius: 2 }} />
        </section>


        <section id="os-expectations" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '0 0 14px 0', letterSpacing: 0.2 }}>Mututal expectations</h2>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
            <img
              src={typeof window !== 'undefined' ? '/mentorship.png' : ''}
              alt="Mentorship illustration"
              style={{ maxWidth: '600px', width: '100%', borderRadius: 12, boxShadow: dark ? '0 2px 12px #FFD70022' : '0 2px 12px #23273322', background: dark ? '#232733' : '#fff', margin: '0 auto' }}
            />
          </div>
          <div style={{ marginBottom: 8 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '0 0 8px 0', letterSpacing: 0.1 }}>My expectation for you</h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 12, opacity: 0.85 }}>
              We are a very fast moving lab and I expect you to be proactive, 
              self-motivated, and ready to <span style={{ color: '#FFD700', fontWeight: 600 }}>take ownership of your projects. </span> 
              I value creativity, critical thinking, and a willingness to experiment. 
              You should be comfortable with ambiguity and ready to adapt as we explore 
              new ideas. I do NOT expect you to come up with good results right away or everytime we meet,
              but I do expect you to be able to learn from failures and iterate quickly. <br></br> <br></br>

              From my experience, most successful students think deeply about their projects. You have to care for your work and 
              be extremely invested in it. You will be the person who will care most about your work, and I will be the second most invested. 
              This is something very hard to teach, and you will need to internalize it. How motivated you are about 
              your research often differentiates between a good work and a great one. When we will fail at something, we will learn a lot 
              from it. The important thing is to not give up and keep iterating. <br></br> <br></br>


              As an engineering AI lab that operates at the bleeding edge of technology, it will sometimes become 
               difficult to keep track of literature. People often say, in AI, a paper published last week, is a bit 
               old. Obviously, I will help you, but you will be the main person who stay at the top of your literature.
               We will also need to stay informed about upcoming startups or industry trends that can influence 
               your research. I cannot remember how many times a rigorous lit review has saved me from major 
               mistakes in research. I can guarantee you that the more informed you are about your lit review, the 
               more mature your will be in your field. Over the time you will learn how to read large amounts of 
               literature very efficiently. This is a skill that has to be learned with patience and time.   <br></br> <br></br>

              You should learn to be proactive in research and outreach. If I miss any outreach or 
              publication opportunity, please let me know. Keep an eye out for research collaborations, other similar projects in your topic, 
              other labs and companies who are relevant to you, grants or fellowship opportunities. <br></br> <br></br>

              Publications are extremely important for your career, and our research productivity. 
              You should learn any skills that can help you improve your research writing. It can be 
              learning illustrator, LaTex, Animation tools, Video editing, or anything else that can help you
              communicate your research better. You should be proactive in learning these associated skills. 
           
            </p>
          </div>
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '0 0 8px 0', letterSpacing: 0.1 }}>Your expectation for me</h3>

            <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 12, opacity: 0.85 }}>
              My role as your advisor is to provide you with the resources, guidance, and support you need to succeed. 
              My top priority will be to ensure that you are funded, especially if you are a PhD student or postdoc. My second priority will be 
              to ensure that you are making reasonable progress in your research. I will help you set clear goals and milestones, and we will
              regularly review your progress. I will provide you with constructive feedback on your work, and help you identify areas for improvement. 
              I will also help you navigate the academic and professional landscape, including networking, publishing, and career development. I have discussed the career 
              development details in a later section in this document, please read it carefully. <br></br> <br></br>

              I will work hard to make sure that you are one of the world leading researchers in your field by the time you graduate. My general philosophy is that if another lab can do our 
              work better than us, then probably they should do it. So, I will help you by providing high level visions and create connections in distinct ideas, so that you are always at the top of our game. 
              My fundamental goal will be to teach you how to think and how to create a compelling research vision. In my humble opinion, this is something that is not taught to a lot of the students. <br></br> <br></br>

              I will also work hard to ensure that you have top notch communication skills to desseminate your research. This includes helping you write top quality papers and teaching you 
              important skills in scientific writing based on my experiences. The modern research world is very competitive and doing amazing work is not enough, you also need to be able to communicate your work effectively and build your reputation in the community. 
              To this end,I will also help you to apply for any relevant workshops, awards, internships and fellowships, whenever possible. <br></br> <br></br>

              I will be proactive in our communication and will try to be available for you whenever you need me. You can expect a response from me within 24 hours, unless I am traveling, or in a conference. 
              For paper feedback, I do not want to rush a draft. Most of the time, a rushed draft is not a good draft. So, we will work according to well defined timelines to ensure that you have sufficient time to write a good draft. 
              If you send me a draft, I will try to provide my comments within a week. For logistics issues, like qualifying exams, dissertation related requirements, I will be most proactive and facilitate my part 
              without any delay. For any professional requirements, such as recommendation letters, I will definitely provide them before your deadline. <br></br> <br></br>

              Finally, I will try everything within my capabilities to ensure that you have a healthy learning and working environment. If you face any personal or professional challenges, 
              that you are comfortable sharing, please let me know. I will do my best to help you overcome them or guide you to the right resources. While I had an awesome PhD experience, I also struggled a lot to 
              cope up with the challenges and my mental health took a hit. I learned some things here and there, that helped me to overcome those challenges. I will try to share those with you, 
              so that you can overcome similar challenges. <br></br> <br></br>

              Once you become part of the Inference lab, you will always get my support, even after you graduate, in any ways that I can. I learned a lot from my mentors, who helped me throughout 
              my career, and I will try to be the same for you. 


            </p>
          </div>
          <div style={{ margin: '36px 0 0 0', borderBottom: `1.5px solid ${dark ? '#FFD700' : '#232733'}`, width: '100%', opacity: 0.12, borderRadius: 2 }} />
        </section>


        <section id="os-career" style={{ marginBottom: 48 }}>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '0 0 14px 0', letterSpacing: 0.2 }}>Career development for students and postdocs</h2>
              <img
                src={typeof window !== 'undefined' ? '/mentoring_2.png' : ''}
                alt="Mentorship illustration"
                style={{ maxWidth: '600px', width: '100%', borderRadius: 12, boxShadow: dark ? '0 2px 12px #FFD70022' : '0 2px 12px #23273322', background: dark ? '#232733' : '#fff', margin: '0 auto' }}
              />
              <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 12, opacity: 0.85 }}>
              
              <br></br> <br></br>

              As a student, you need to focus on building your skills in addition to your research. Often times, students focus too much on their research and forget to build their skills. 
              For example, if you have an okay programming skills, try to use this time to improve you programming skills to the next level. If you are working with transofrmers, try to also learn 
              about reinforcement learning, traditional computer vision techniques. This is important because when you will be applying for jobs, you will be competing with people with different experiences. 
              You will be able to translate your skills from other domains in your research and create diverse viewpoints. I may not always have time to push you to learn new skills, you might need to learn 
              this on your own. Having said that, if you require any resources, such as books, online courses, workshops, or anything else, please let me know. <br></br> <br></br>

              For PhD students, we will have a meeting about your future career plans during the thrid year of your time at the lab. This will help me to support you and prepare you in advance. We will also meet more seriously during the 
              start of your last year to discuss your job applications and resources you might need to be successful. If you decide to pursue an academic career, I will be there to help you 
              prepare your job applications, and interviews. For postdocs, I will work closely since you start at the lab so that we have a clear plan for your career development. 

              Finally, I will help you build your network in the community. I will spend significant amount of time in building a network for the lab and connecting you with 
              other researchers and professionals in your field.

              </p>
              <div style={{ margin: '36px 0 0 0', borderBottom: `1.5px solid ${dark ? '#FFD700' : '#232733'}`, width: '100%', opacity: 0.12, borderRadius: 2 }} />
          </section>



        <section id="os-publish" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '0 0 14px 0', letterSpacing: 0.2 }}>When and where do we publish</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 12, opacity: 0.85 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
              <img
                src={typeof window !== 'undefined' ? '/lit_review.png' : ''}
                alt="Mentorship illustration"
                style={{ maxWidth: '600px', width: '100%', borderRadius: 12, boxShadow: dark ? '0 2px 12px #FFD70022' : '0 2px 12px #23273322', background: dark ? '#232733' : '#fff', margin: '0 auto' }}
              />
            </div>
              I do not think it is possible to tie research productivity to publication numbers as a good metric. But someone once mentioned, 
              "Not everyone can read, but everyone can count". The publication quality is 
              our top most priority but we should work as a team to ensure you have a competitive number of 
              research publications. This is more critical for your career as the competition grows every year. I expect you to publish regularly at 
              major peer reviewed conferences each year. Once a work matures, we will submit it to a top journal. 
              Publishing regularly is a good way to stay focused and build up your reputation and networking in the community. 
              I personally find it helpful to <span style={{ color: '#FFD700', fontWeight: 600 }}>aim for two top conferences each year</span>, and work on that. This will provide you sufficient 
              opportunities to create strong networking within the community. To help you on this, 
              we will plan potential publications at the beginning of each academic year 
              based on our research progress and see how it goes.<br></br><br></br>

              Where we publish depends on your topic. Obviously, our goal is to publish in the top venues. Here is a nonexhaustive list of venues where we can publish our work:
              <div style={{ margin: '18px 0 18px 0' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 16 }}>
                  <li style={{ marginBottom: 12 }}>
                    <span style={{ color: '#FFD700', fontWeight: 700 }}>AI (heavy):</span>
                    <span style={{ marginLeft: 8 }}>TMLR, NeurIPS, ICML, AAAI</span>
                  </li>
                  <li style={{ marginBottom: 12 }}>
                    <span style={{ color: '#FFD700', fontWeight: 700 }}>Computational Design/CAD:</span>
                    <span style={{ marginLeft: 8 }}>CVPR, ICCV, ICLR, JMD, JCISE, SIGGRAPH, SIGGRAPH Asia, IEEE TVCG, ACM TOG, CAD</span>
                  </li>
                  <li style={{ marginBottom: 12 }}>
                    <span style={{ color: '#FFD700', fontWeight: 700 }}>Digital Manufacturing:</span>
                    <span style={{ marginLeft: 8 }}>Nature Advanced Manufacturing, Additive Manufacturing, JMSE, Journal of Manufacturing Systems</span>
                  </li>
                  <li style={{ marginBottom: 12 }}>
                    <span style={{ color: '#FFD700', fontWeight: 700 }}>Robotics/Controls/RL:</span>
                    <span style={{ marginLeft: 8 }}>T-RO, RA-L, ICRA, IROS, ACC, CDC</span>
                  </li>
                </ul>
              </div>
        

            </p>
            <div style={{ margin: '36px 0 0 0', borderBottom: `1.5px solid ${dark ? '#FFD700' : '#232733'}`, width: '100%', opacity: 0.12, borderRadius: 2 }} />
          </section>


        <section id="os-comm" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '0 0 14px 0', letterSpacing: 0.2 }}>How do we communicate</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 12, opacity: 0.85 }}>

            Communication is the most important and often poorly done aspect of any mentorship. I have heard countless horror 
            stories of students and postdocs who felt lost in their research because of poor communication with their advisors. 
            Fortunately, I have been lucky to have had some great mentors in my career who taught me the importance of clear and regular communication. 
            I strongly advise you to take communication very seriously, not just with me, but with you colleagues, classmaters, 
            manager, and collaborators. Good communication can make the difference between a successful project and a failed one. 
            My philosophy is that if you maintain the following aspects carefully, it should not be difficult to have effective communicatin. 
            <br></br><br></br>
            <ul style={{ listStyle: 'disc', paddingLeft: 24, margin: '0 0 18px 0', fontSize: 16 }}>
              <li style={{ marginBottom: 10 }}>
                <span style={{ color: '#FFD700', fontWeight: 600 }}>Respect and humility:</span> Always be respectful in your communication, even when you disagree.
              </li>
              <li style={{ marginBottom: 10 }}>
                <span style={{ color: '#FFD700', fontWeight: 600 }}>Openness and transparency:</span> Be open about your challenges and ask for help when needed. I am here to support you.
              </li>
              <li style={{ marginBottom: 10 }}>
                <span style={{ color: '#FFD700', fontWeight: 600 }}>Clarity:</span> Be clear and concise in your messages. Avoid jargon and be direct about your needs and expectations. Sometimes, if you think an additional figure will help someone understand your point, add it and go the extra mile.
              </li>
              <li style={{ marginBottom: 10 }}>
                <span style={{ color: '#FFD700', fontWeight: 600 }}>Regularity:</span> Schedule regular check-ins to discuss progress, challenges, and next steps.
              </li>
            </ul>
            <span style={{ color: '#FFD700', fontWeight: 700, background: dark ? '#FFD70022' : '#FFF8DC', padding: '4px 10px', borderRadius: 8, display: 'inline-block', boxShadow: dark ? '0 2px 8px #FFD70033' : '0 2px 8px #FFD70022', margin: '10px 0' }}>
              I do not like micromanaging and will fully trust you on your work.
            </span> To ensure that you are not 
            drifting away from your goals, we will have regular meetings to discuss your progress. My personal 
            choice is to have a weekly meeting with each student and postdoc. We will schedule <span style={{ color: '#FFD700', fontWeight: 600 }}>weekly one-hour or 30-minute meeting</span>
            depending on your needs. We will also have a group meeting for approximately one and a half hours every week. 
            I will also be available for ad-hoc meetings if you need to discuss something urgently. I will 
            schedule the meeting apriori each semester based on everyone's availability.
            <br></br><br></br>
            
            </p>
            <div style={{ margin: '36px 0 0 0', borderBottom: `1.5px solid ${dark ? '#FFD700' : '#232733'}`, width: '100%', opacity: 0.12, borderRadius: 2 }} />
          </section>

        <section id="os-culture" style={{ marginBottom: 48 }}>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '0 0 14px 0', letterSpacing: 0.2 }}>Lab culture</h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 12, opacity: 0.85 }}>

              Inference Lab thrives on respect, collaboration, and shared curiosity. We work in a space where everyone’s contributions matter, and where mutual respect, both in words and actions, is non-negotiable. Treat your labmates with the same professionalism you would expect in return, even when you disagree. Keep our shared workspace clean, organized, and ready for productive work. A cluttered space slows everyone down. If you are working with hardware keep everything organized and in specific plcaes. Safety is also non-negotiable and all safety protocols must be properly followed

              Be curious about what others are doing, even if it’s outside your immediate research area. Ask questions, share ideas, and learn from each other’s projects—this applies not only to our lab but also to colleagues in other labs and departments. Stay active in seminars and talks; these are opportunities to expand your perspective and network.

              When a labmate asks for feedback, give it honestly and constructively, with the aim of strengthening their work. Share your own code, data, and resources openly within the group to accelerate collective progress. If someone reaches out for help, respond promptly, you might be the one who needs that quick answer next time. Also, try to celebrate each other's success stories. 

              </p>
              <div style={{ margin: '36px 0 0 0', borderBottom: `1.5px solid ${dark ? '#FFD700' : '#232733'}`, width: '100%', opacity: 0.12, borderRadius: 2 }} />
          </section>


        <section id="os-ethics" style={{ marginBottom: 48 }}>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '0 0 14px 0', letterSpacing: 0.2 }}>Ethical considerations</h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 12, opacity: 0.85 }}>



              </p>
              <div style={{ margin: '36px 0 0 0', borderBottom: `1.5px solid ${dark ? '#FFD700' : '#232733'}`, width: '100%', opacity: 0.12, borderRadius: 2 }} />
          </section>


        <section id="os-code" style={{ marginBottom: 48 }}>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '0 0 14px 0', letterSpacing: 0.2 }}>Code and documentation</h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 12, opacity: 0.85 }}>



              </p>
              <div style={{ margin: '36px 0 0 0', borderBottom: `1.5px solid ${dark ? '#FFD700' : '#232733'}`, width: '100%', opacity: 0.12, borderRadius: 2 }} />
          </section>


        <section id="os-courses" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '0 0 14px 0', letterSpacing: 0.2 }}>What course should you take</h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 12, opacity: 0.85 }}>



            </p>
            <div style={{ margin: '36px 0 0 0', borderBottom: `1.5px solid ${dark ? '#FFD700' : '#232733'}`, width: '100%', opacity: 0.12, borderRadius: 2 }} />
          </section>


        <section style={{ marginBottom: 48 }}>
              <h2 style={{ fontSize: 22, fontWeight: 600, color: dark ? '#FFD700' : '#232733', margin: '0 0 14px 0', letterSpacing: 0.2 }}>Career development for students and postdocs</h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, marginBottom: 12, opacity: 0.85 }}>



              </p>
              <div style={{ margin: '36px 0 0 0', borderBottom: `1.5px solid ${dark ? '#FFD700' : '#232733'}`, width: '100%', opacity: 0.12, borderRadius: 2 }} />
          </section>

      </main>

      {/* TL;DR Bar removed, now per-section */}
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
