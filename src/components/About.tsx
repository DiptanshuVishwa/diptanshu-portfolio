import Container from "../layout/Container";
import { motion } from "framer-motion";
import { Fingerprint, Database, Cpu, FileText } from "lucide-react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: any = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const About = () => {
  return (
    <section id="about" className="pt-24 pb-12 bg-white relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#4f46e5 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-16 items-start"
        >
          {/* LEFT CONTENT */}
          <motion.div className="lg:col-span-7 z-10">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 mb-6 text-indigo-600 font-mono text-sm tracking-[0.2em] uppercase"
            >
              <Fingerprint size={18} />
              Full Stack Developer
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight"
            >
              Engineering the <span className="text-indigo-600 italic">Core</span>, <br />
              not just the surface.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="mt-10 space-y-6 text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              <p>
                I am a Backend-focused Full Stack Developer pursuing a B.Tech in Computer Science with hands-on experience building scalable <span className="text-indigo-600 font-bold">RESTful APIs</span>, JWT-based authentication systems, and MongoDB-backed web applications using <span className="font-semibold text-slate-800">Node.js and Express.js</span>.
              </p>

              <p>
                Proficient in <span className="text-slate-900 font-semibold">React.js</span>, <span className="text-indigo-600 font-bold">AI/LLM integrations</span>, and asynchronous workflows, with production-deployed applications and 2nd Runner-Up recognition at competitive hackathons.
              </p>
            </motion.div>

            {/* Features & Download */}
            <motion.div variants={fadeUp} className="mt-12 pt-10 border-t border-slate-100">
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex gap-4">
                  <Database size={20} className="text-indigo-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">MERN Stack</h4>
                    <p className="text-sm text-slate-500 text-nowrap">Node, Express, MongoDB, React</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Cpu size={20} className="text-indigo-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">AI Pipelines</h4>
                    <p className="text-sm text-slate-500 text-nowrap">LLM & Gemini Integration.</p>
                  </div>
                </div>
              </div>

              {/* Download Resume Button */}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-indigo-600 transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-indigo-200"
              >
                <FileText size={18} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT TERMINAL CARD */}
          <motion.div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative p-8 bg-gradient-to-br from-slate-950 to-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-indigo-500/10 pointer-events-none" />

              <div className="flex gap-1.5 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              </div>

              <div className="space-y-8">
                {[
                  { label: "Performance", value: "7.58 CGPA", color: "text-emerald-400" },
                  { label: "Context", value: "KIIT • CS Eng.", color: "text-indigo-400" },
                  { label: "Stack", value: "MERN / Node.js", color: "text-white" },
                  { label: "Focus", value: "Backend APIs & AI", color: "text-white" },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="group/item">
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500 mb-1">
                      {item.label}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xl font-mono font-bold ${item.color}`}>{item.value}</span>
                      <div className="h-[1px] flex-grow mx-4 bg-slate-800 group-hover/item:bg-indigo-500/70 transition-colors" />
                      <div className="w-2 h-2 rounded-full bg-slate-800" />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
