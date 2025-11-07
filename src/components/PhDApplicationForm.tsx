"use client";
import React, { useState, useRef } from "react";

const WELCOME_TITLE = "Fully funded PhD position – Inference Lab, Georgia Tech (Fall 2026)";
const WELCOME_SUBTITLE =
  "If you are obsessed with AI, frustrated by today’s design, simulation, and manufacturing tools, and want to change how we build things, reach out. Let’s build Universal Engineering Intelligence together and change the world.";

const experienceOptions = [
  "Python programming",
  "Neural network training and inference",
  "LLMs (Large Language Models)",
  "VLMs (Vision–Language Models)",
  "Programming languages (PL)",
  "Computational design / CAD",
  "Other (please specify)"
];

const hearAboutOptions = [
  "LinkedIn",
  "Lab Website",
  "Conference",
  "Email list",
  "Referral",
  "Other"
];

const totalSteps = 10;

export default function PhDApplicationForm() {
  const [step, setStep] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [cv, setCV] = useState<File | null>(null);
  const [cvError, setCVError] = useState("");
  const [loveHate, setLoveHate] = useState("");
  const [noInterface, setNoInterface] = useState("");
  const [infiniteBuild, setInfiniteBuild] = useState("");
  const [experience, setExperience] = useState<string[]>([]);
  const [otherExperience, setOtherExperience] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [anythingElse, setAnythingElse] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Email validation
  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // CV validation
  function handleCVChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCVError("");
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      setCVError("Only PDF files are allowed.");
      setCV(null);
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setCVError("File size must be less than 10MB.");
      setCV(null);
      return;
    }
    setCV(file);
  }

  // Google Sheets export placeholder (to be implemented with API/serverless)
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Send data to Google Sheets or backend
  }

  // Progress bar calculation
  const progress = Math.min((step / totalSteps) * 100, 100);

  // Modular step rendering
  return (
    <div className="w-full max-w-[95vw] sm:max-w-lg mx-auto bg-[#232733] rounded-2xl shadow-xl p-4 sm:p-10 flex flex-col items-center relative min-h-screen overflow-x-hidden">
      {/* Lab Logo */}
      <img src="/logo.png" alt="Inference Lab Logo" className="w-20 h-20 mb-4" />
      {/* Progress Bar */}
      <div className="w-full h-2 bg-[#181c23] rounded mb-8 overflow-hidden">
        <div className="h-full bg-[#FFD700] transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
      {/* Welcome Screen */}
      {step === 0 && (
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-[#FFD700]">{WELCOME_TITLE}</h1>
          <p className="mb-6 text-base sm:text-lg opacity-90">{WELCOME_SUBTITLE}</p>
          <button
            className="mt-2 px-6 py-2 rounded-full bg-[#FFD700] text-[#232733] font-semibold text-lg shadow hover:bg-[#ffe066] transition"
            onClick={() => setStep(1)}
          >
            Start Application
          </button>
        </div>
      )}
      {/* Step 1: Full Name */}
      {step === 1 && (
        <form className="flex flex-col items-center w-full" onSubmit={e => { e.preventDefault(); if (fullName.trim()) setStep(2); }}>
          <label htmlFor="fullName" className="text-lg font-semibold mb-4 text-[#FFD700] w-full text-left">Full Name <span className="text-red-400">*</span></label>
          <input id="fullName" type="text" className="w-full px-4 py-2 rounded-lg bg-[#181c23] text-white border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] mb-6" value={fullName} onChange={e => setFullName(e.target.value)} required autoFocus placeholder="Enter your full name" />
          <div className="flex w-full justify-between mt-2">
            <button type="button" className="px-4 py-2 rounded bg-[#232733] border border-[#FFD700] text-[#FFD700] font-semibold hover:bg-[#181c23] transition" onClick={() => setStep(0)}>Back</button>
            <button type="submit" className="px-6 py-2 rounded-full bg-[#FFD700] text-[#232733] font-semibold text-lg shadow hover:bg-[#ffe066] transition disabled:opacity-60" disabled={!fullName.trim()}>Next</button>
          </div>
        </form>
      )}
      {/* Step 2: Email Address */}
      {step === 2 && (
        <form className="flex flex-col items-center w-full" onSubmit={e => { e.preventDefault(); if (validateEmail(email)) setStep(3); else setEmailError("Please enter a valid email address."); }}>
          <label htmlFor="email" className="text-lg font-semibold mb-4 text-[#FFD700] w-full text-left">Email Address <span className="text-red-400">*</span></label>
          <input id="email" type="email" className="w-full px-4 py-2 rounded-lg bg-[#181c23] text-white border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] mb-2" value={email} onChange={e => { setEmail(e.target.value); setEmailError(""); }} required autoFocus placeholder="Enter your email address" />
          {emailError && <div className="text-red-400 text-sm mb-2 w-full text-left">{emailError}</div>}
          <div className="flex w-full justify-between mt-2">
            <button type="button" className="px-4 py-2 rounded bg-[#232733] border border-[#FFD700] text-[#FFD700] font-semibold hover:bg-[#181c23] transition" onClick={() => setStep(1)}>Back</button>
            <button type="submit" className="px-6 py-2 rounded-full bg-[#FFD700] text-[#232733] font-semibold text-lg shadow hover:bg-[#ffe066] transition disabled:opacity-60" disabled={!email.trim()}>Next</button>
          </div>
        </form>
      )}
      {/* Step 3: Portfolio (optional) */}
      {step === 3 && (
        <form className="flex flex-col items-center w-full" onSubmit={e => { e.preventDefault(); setStep(4); }}>
          <label htmlFor="portfolio" className="text-lg font-semibold mb-4 text-[#FFD700] w-full text-left">LinkedIn / Personal Website / Portfolio <span className="text-gray-400">(optional)</span></label>
          <input id="portfolio" type="text" className="w-full px-4 py-2 rounded-lg bg-[#181c23] text-white border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] mb-6" value={portfolio} onChange={e => setPortfolio(e.target.value)} autoFocus placeholder="Paste your LinkedIn, website, or portfolio link" />
          <div className="flex w-full justify-between mt-2">
            <button type="button" className="px-4 py-2 rounded bg-[#232733] border border-[#FFD700] text-[#FFD700] font-semibold hover:bg-[#181c23] transition" onClick={() => setStep(2)}>Back</button>
            <button type="submit" className="px-6 py-2 rounded-full bg-[#FFD700] text-[#232733] font-semibold text-lg shadow hover:bg-[#ffe066] transition">Next</button>
          </div>
        </form>
      )}
      {/* Step 4: Upload CV (PDF only, max 10MB) */}
      {step === 4 && (
        <form className="flex flex-col items-center w-full" onSubmit={e => { e.preventDefault(); if (cv) setStep(5); else setCVError("Please upload your CV."); }}>
          <label htmlFor="cv" className="text-lg font-semibold mb-4 text-[#FFD700] w-full text-left">Upload Your CV <span className="text-red-400">*</span></label>
          <input id="cv" type="file" accept="application/pdf" className="w-full mb-2" ref={fileInputRef} onChange={handleCVChange} required style={{ color: '#FFD700' }} />
          {cvError && <div className="text-red-400 text-sm mb-2 w-full text-left">{cvError}</div>}
          <div className="flex w-full justify-between mt-2">
            <button type="button" className="px-4 py-2 rounded bg-[#232733] border border-[#FFD700] text-[#FFD700] font-semibold hover:bg-[#181c23] transition" onClick={() => setStep(3)}>Back</button>
            <button type="submit" className="px-6 py-2 rounded-full bg-[#FFD700] text-[#232733] font-semibold text-lg shadow hover:bg-[#ffe066] transition disabled:opacity-60" disabled={!cv}>Next</button>
          </div>
        </form>
      )}
      {/* Step 5: Love/Hate about engineering software */}
      {step === 5 && (
        <form className="flex flex-col items-center w-full" onSubmit={e => { e.preventDefault(); if (loveHate.trim()) setStep(6); }}>
          <label htmlFor="loveHate" className="text-lg font-semibold mb-4 text-[#FFD700] w-full text-left">What do you love and hate about current engineering design/simulation/manufacturing software? <span className="text-red-400">*</span></label>
          <textarea id="loveHate" className="w-full px-4 py-2 rounded-lg bg-[#181c23] text-white border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] mb-6 min-h-[120px]" value={loveHate} onChange={e => setLoveHate(e.target.value)} required autoFocus placeholder="Share your thoughts..." />
          <div className="flex w-full justify-between mt-2">
            <button type="button" className="px-4 py-2 rounded bg-[#232733] border border-[#FFD700] text-[#FFD700] font-semibold hover:bg-[#181c23] transition" onClick={() => setStep(4)}>Back</button>
            <button type="submit" className="px-6 py-2 rounded-full bg-[#FFD700] text-[#232733] font-semibold text-lg shadow hover:bg-[#ffe066] transition disabled:opacity-60" disabled={!loveHate.trim()}>Next</button>
          </div>
        </form>
      )}
      {/* Step 6: No interface question */}
      {step === 6 && (
        <form className="flex flex-col items-center w-full" onSubmit={e => { e.preventDefault(); if (noInterface.trim()) setStep(7); }}>
          <label htmlFor="noInterface" className="text-lg font-semibold mb-4 text-[#FFD700] w-full text-left">If engineering software disappeared overnight — no buttons, no sketches, no thousands of options to choose from — how do you think people would still design digitally? <span className="text-red-400">*</span></label>
          <textarea id="noInterface" className="w-full px-4 py-2 rounded-lg bg-[#181c23] text-white border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] mb-6 min-h-[120px]" value={noInterface} onChange={e => setNoInterface(e.target.value)} required autoFocus placeholder="Imagine a new way to design..." />
          <div className="flex w-full justify-between mt-2">
            <button type="button" className="px-4 py-2 rounded bg-[#232733] border border-[#FFD700] text-[#FFD700] font-semibold hover:bg-[#181c23] transition" onClick={() => setStep(5)}>Back</button>
            <button type="submit" className="px-6 py-2 rounded-full bg-[#FFD700] text-[#232733] font-semibold text-lg shadow hover:bg-[#ffe066] transition disabled:opacity-60" disabled={!noInterface.trim()}>Next</button>
          </div>
        </form>
      )}
      {/* Step 7: Infinite time/money question */}
      {step === 7 && (
        <form className="flex flex-col items-center w-full" onSubmit={e => { e.preventDefault(); if (infiniteBuild.trim()) setStep(8); }}>
          <label htmlFor="infiniteBuild" className="text-lg font-semibold mb-4 text-[#FFD700] w-full text-left">If you had infinite time and money, what would you build — and why? <span className="text-red-400">*</span></label>
          <textarea id="infiniteBuild" className="w-full px-4 py-2 rounded-lg bg-[#181c23] text-white border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] mb-6 min-h-[120px]" value={infiniteBuild} onChange={e => setInfiniteBuild(e.target.value)} required autoFocus placeholder="Dream big..." />
          <div className="flex w-full justify-between mt-2">
            <button type="button" className="px-4 py-2 rounded bg-[#232733] border border-[#FFD700] text-[#FFD700] font-semibold hover:bg-[#181c23] transition" onClick={() => setStep(6)}>Back</button>
            <button type="submit" className="px-6 py-2 rounded-full bg-[#FFD700] text-[#232733] font-semibold text-lg shadow hover:bg-[#ffe066] transition disabled:opacity-60" disabled={!infiniteBuild.trim()}>Next</button>
          </div>
        </form>
      )}
      {/* Step 8: Experience checkboxes */}
      {step === 8 && (
        <form className="flex flex-col items-center w-full" onSubmit={e => { e.preventDefault(); if (experience.length > 0) setStep(9); }}>
          <label className="text-lg font-semibold mb-4 text-[#FFD700] w-full text-left">Do you have experience with any of the following? <span className="text-red-400">*</span></label>
          <div className="flex flex-col gap-2 w-full mb-4">
            {experienceOptions.map(opt => (
              <label key={opt} className="flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={experience.includes(opt)}
                  onChange={e => {
                    if (e.target.checked) setExperience([...experience, opt]);
                    else setExperience(experience.filter(x => x !== opt));
                  }}
                  className="accent-[#FFD700] w-4 h-4"
                />
                {opt}
              </label>
            ))}
            {experience.includes("Other (please specify)") && (
              <input
                type="text"
                className="w-full px-3 py-1 rounded bg-[#181c23] text-white border border-[#FFD700] mt-2"
                placeholder="Please specify other experience"
                value={otherExperience}
                onChange={e => setOtherExperience(e.target.value)}
              />
            )}
          </div>
          <div className="flex w-full justify-between mt-2">
            <button type="button" className="px-4 py-2 rounded bg-[#232733] border border-[#FFD700] text-[#FFD700] font-semibold hover:bg-[#181c23] transition" onClick={() => setStep(7)}>Back</button>
            <button type="submit" className="px-6 py-2 rounded-full bg-[#FFD700] text-[#232733] font-semibold text-lg shadow hover:bg-[#ffe066] transition disabled:opacity-60" disabled={experience.length === 0}>Next</button>
          </div>
        </form>
      )}
      {/* Step 9: Where did you hear about this opening? */}
      {step === 9 && (
        <form className="flex flex-col items-center w-full" onSubmit={e => { e.preventDefault(); if (hearAbout) setStep(10); }}>
          <label className="text-lg font-semibold mb-4 text-[#FFD700] w-full text-left">Where did you hear about this opening? <span className="text-red-400">*</span></label>
          <div className="flex flex-col gap-2 w-full mb-4">
            {hearAboutOptions.map(opt => (
              <label key={opt} className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  name="hearAbout"
                  checked={hearAbout === opt}
                  onChange={() => setHearAbout(opt)}
                  className="accent-[#FFD700] w-4 h-4"
                />
                {opt}
              </label>
            ))}
          </div>
          <div className="flex w-full justify-between mt-2">
            <button type="button" className="px-4 py-2 rounded bg-[#232733] border border-[#FFD700] text-[#FFD700] font-semibold hover:bg-[#181c23] transition" onClick={() => setStep(8)}>Back</button>
            <button type="submit" className="px-6 py-2 rounded-full bg-[#FFD700] text-[#232733] font-semibold text-lg shadow hover:bg-[#ffe066] transition disabled:opacity-60" disabled={!hearAbout}>Next</button>
          </div>
        </form>
      )}
      {/* Step 10: Anything else (optional) + Submit */}
      {step === 10 && !submitted && (
        <form className="flex flex-col items-center w-full" onSubmit={handleSubmit}>
          <label htmlFor="anythingElse" className="text-lg font-semibold mb-4 text-[#FFD700] w-full text-left">Anything else you want us to know? <span className="text-gray-400">(optional)</span></label>
          <textarea id="anythingElse" className="w-full px-4 py-2 rounded-lg bg-[#181c23] text-white border border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700] mb-6 min-h-[80px]" value={anythingElse} onChange={e => setAnythingElse(e.target.value)} placeholder="Share anything else..." />
          <div className="flex w-full justify-between mt-2">
            <button type="button" className="px-4 py-2 rounded bg-[#232733] border border-[#FFD700] text-[#FFD700] font-semibold hover:bg-[#181c23] transition" onClick={() => setStep(9)}>Back</button>
            <button type="submit" className="px-6 py-2 rounded-full bg-[#FFD700] text-[#232733] font-semibold text-lg shadow hover:bg-[#ffe066] transition">Submit</button>
          </div>
        </form>
      )}
      {/* Thank you screen */}
      {submitted && (
        <div className="flex flex-col items-center text-center py-12">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Thanks for applying!</h2>
          <p className="text-lg mb-6 text-white">We will review your responses and reach out if there’s a potential match.</p>
        </div>
      )}
    </div>
  );
}
