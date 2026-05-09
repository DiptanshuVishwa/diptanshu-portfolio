import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ── Typed text hook ── */
function useTyped(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wIdx, setWIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wIdx];
    const delay = deleting ? speed / 2 : cIdx === word.length ? pause : speed;
    const t = setTimeout(() => {
      if (!deleting && cIdx < word.length) {
        setDisplay(word.slice(0, cIdx + 1)); setCIdx(c => c + 1);
      } else if (!deleting && cIdx === word.length) {
        setDeleting(true);
      } else if (deleting && cIdx > 0) {
        setDisplay(word.slice(0, cIdx - 1)); setCIdx(c => c - 1);
      } else {
        setDeleting(false); setWIdx(w => (w + 1) % words.length);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [cIdx, deleting, wIdx, words, speed, pause]);

  return display;
}

const floatA: any = { animate: { y: [0,-8,0], transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } } };
const floatB: any = { animate: { y: [0,7,0],  transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 } } };

const fadeUp: any = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22,1,0.36,1] } } };
const stagger: any = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start","end start"] });
  const bgY = useTransform(scrollYProgress, [0,1], ["0%","18%"]);
  const typed = useTyped(["Backend APIs", "MERN Stack", "AI Integrations", "React Systems"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#f6f7fb]"
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      {/* ── Background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_8%_18%,rgba(99,102,241,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_92%_82%,rgba(139,92,246,0.07),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle,#6366f1 1px,transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />
        {/* Ghost watermark */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[22rem] font-black leading-none select-none pointer-events-none"
          style={{ color: "rgba(99,102,241,0.022)", letterSpacing: "-0.05em" }}
        >
          01
        </div>
      </motion.div>

      <div className="max-w-[1160px] mx-auto px-8 w-full pt-24 pb-16">
        <div className="grid md:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-center">

          {/* ════ LEFT ════ */}
          <motion.div variants={stagger} initial="hidden" animate="show">

            {/* Eyebrow */}
            <motion.p variants={fadeUp} className="text-[10px] font-black uppercase tracking-[0.32em] text-slate-400 mb-4">
              MERN Stack Developer · AI Systems · KIIT
            </motion.p>

            {/* ── Headline — controlled sizes ── */}
            <motion.h1
              variants={fadeUp}
              className="font-black text-slate-900 leading-[1.07] tracking-[-0.025em] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Backend-Focused<br />
              <span
                style={{
                  background: "linear-gradient(125deg,#4f46e5 0%,#7c3aed 55%,#a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Full Stack Developer
              </span>
            </motion.h1>

            {/* Animated typed subline */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="h-[1.5px] w-7 bg-indigo-400 flex-shrink-0" />
              <span className="text-sm font-mono font-semibold text-indigo-500 min-w-[190px]">
                {typed}
                <span className="inline-block w-[2px] h-3.5 bg-indigo-400 ml-0.5 align-middle animate-pulse" />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p variants={fadeUp} className="text-[0.95rem] text-slate-500 max-w-[440px] leading-[1.78] mb-8">
              Hi, I'm <span className="font-bold text-slate-800">Diptanshu Vishwa</span> — a backend-focused MERN Stack Developer building scalable APIs, AI-powered systems, and production-ready full-stack applications. Passionate about backend engineering, system architecture, asynchronous workflows, and solving real-world problems through modern web technologies.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              <a
                href="/resume.pdf"
                download
                className="group relative overflow-hidden px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-md hover:shadow-indigo-400/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download Resume
                  <span className="group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 skew-x-12" />
              </a>

              <a
                href="https://github.com/DiptanshuVishwa"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-sm transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/diptanshu-vishwa-0548b0341/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-sm transition-all duration-300"
              >
                LinkedIn
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-between md:justify-start md:flex-nowrap mb-9">
              {[
                { value: "7.58", label: "CGPA", sub: "B.Tech CS" },
                { value: "3+", label: "Projects", sub: "Production-ready" },
                { value: "1st", label: "Hackathons", sub: "Runner-Up SDIS" },
              ].map((s, i) => (
                <div key={i} className="w-[48%] md:w-auto flex flex-col md:flex-row md:items-center mb-6 md:mb-0">
                  <div className="md:px-8">
                    <p className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-1">
                      {s.value}
                    </p>
                    <p className="text-xs font-black uppercase tracking-widest text-indigo-500">
                      {s.label}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{s.sub}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block w-[1px] h-10 bg-slate-200 self-center" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Tech stack pills */}
            <motion.div variants={fadeUp} className="flex items-center gap-2.5 flex-wrap">
              {[
                { icon:"🍃", name:"Node.js" },
                { icon:"⚡", name:"Express" },
                { icon:"🧠", name:"AI / Gemini" },
                { icon:"☁️", name:"AWS S3" },
                { icon:"⚛️", name:"React" },
                { icon:"🌐", name:"MERN" } ,
              ].map((t,i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-600 shadow-sm">
                  <span>{t.icon}</span>{t.name}
                </span>
              ))}
            </motion.div>

          </motion.div>

          {/* ════ RIGHT — Glassmorphism Initials Card ════ */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22,1,0.36,1], delay: 0.2 }}
            className="flex justify-center items-center mt-10 md:mt-0"
          >
            <div className="relative group perspective-1000">

              {/* Glow */}
              <div
                className="absolute -inset-5 rounded-[2.5rem] opacity-50 group-hover:opacity-75 transition duration-700"
                style={{
                  background: "radial-gradient(ellipse at 40% 30%,rgba(99,102,241,0.22) 0%,rgba(139,92,246,0.1) 55%,transparent 75%)",
                  filter: "blur(22px)",
                }}
              />

              {/* Glassmorphism card */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[260px] h-[360px] sm:w-[300px] sm:h-[420px] md:w-[350px] md:h-[500px] rounded-3xl overflow-hidden border border-white/40 shadow-[0_20px_56px_rgba(0,0,0,0.11)] bg-white/20 backdrop-blur-xl flex flex-col items-center justify-center group-hover:scale-[1.02] transition-transform duration-700"
              >
                {/* Subtle gradient inside */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none" />
                
                {/* Initials */}
                <div className="relative z-10 text-center">
                  <h2 
                    className="text-8xl sm:text-9xl font-black tracking-tighter"
                    style={{
                      background: "linear-gradient(135deg, #4f46e5 0%, #a855f7 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0px 10px 30px rgba(99, 102, 241, 0.2)"
                    }}
                  >
                    DV
                  </h2>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-600">
                      System Architecture
                    </p>
                  </div>
                </div>

              </motion.div>

              {/* Float: REST APIs */}
              <motion.div
                variants={floatA} animate="animate"
                className="absolute -top-3 right-0 md:-right-[2.5rem] bg-white border border-slate-200 shadow-xl px-3 py-2.5 rounded-2xl flex items-center gap-2 z-30"
                style={{ boxShadow:"0 8px 26px rgba(99,102,241,0.13)" }}
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-sm flex-shrink-0">⚙️</div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-indigo-600 leading-none mb-0.5">Scale</p>
                  <p className="text-[11px] font-bold text-slate-700 leading-none">RESTful APIs</p>
                </div>
              </motion.div>

              {/* Float: Secure System */}
              <motion.div
                variants={floatB} animate="animate"
                className="absolute -bottom-5 left-0 md:-left-[3.5rem] bg-white border border-slate-200 shadow-xl px-3 py-2.5 rounded-2xl z-30"
                style={{ boxShadow:"0 8px 26px rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600">Auth</span>
                </div>
                <p className="text-[11px] font-bold text-slate-800">JWT & OAuth</p>
                <p className="text-[9px] font-mono text-slate-400 mt-0.5">Secure Workflows</p>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
