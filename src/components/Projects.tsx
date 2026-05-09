import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "../data/projects";

const fadeUp: any = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22,1,0.36,1] } } };
const stagger: any = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "AI-Powered", "Full Stack", "Frontend"];

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "AI-Powered" && project.title === "MEDI-VAULT") return true;
    if (filter === "AI-Powered" && project.title === "NagarMitra") return true;
    if (filter === "Full Stack" && (project.title === "MEDI-VAULT" || project.title === "NagarMitra")) return true;
    if (filter === "Frontend" && project.title === "Spotify Clone") return true;
    return false;
  });

  return (
    <section 
      id="projects"
      className="py-20 bg-[#f6f7fb] overflow-hidden"
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      <div className="max-w-[1160px] mx-auto px-8 w-full">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-[1.5px] w-7 bg-indigo-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.32em] text-slate-400">
            Selected Work
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-500 mb-4">
            Projects
          </p>

          <h2
            className="font-black text-slate-900 tracking-[-0.03em] leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)" }}
          >
            Projects That{" "}
            <span className="text-indigo-600">Actually Ship</span>
          </h2>

          <p className="text-slate-500 text-lg max-w-2xl mb-8">
            Built with real-world use in mind — scalable, performant, and ready for production.
          </p>

          {/* Filtering */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  filter === cat 
                    ? "bg-slate-900 text-white shadow-md" 
                    : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Projects ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* ── View All CTA ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-slate-200 flex flex-col items-center text-center"
        >
          <p className="text-slate-500 mb-6 font-medium">Want to see the rest of my architecture experiments?</p>
          <a
            href="https://github.com/DiptanshuVishwa"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-900 rounded-2xl text-slate-900 font-black uppercase tracking-widest text-xs transition-all duration-300 hover:bg-slate-900 hover:text-white hover:shadow-xl active:scale-95"
          >
            <svg 
              className="w-5 h-5 fill-current" 
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
};

/* ── Project Card ── */
function ProjectCard({ project, index }: { project: any, index: number }) {
  const ref = useRef(null);
  // @ts-ignore
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="relative"
    >
      <div className={`grid md:grid-cols-2 gap-10 items-center ${isEven ? "" : "md:[direction:rtl]"}`}>

        {/* ── IMAGE ── */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22,1,0.36,1] }}
          className="relative group"
        >
          <div className="relative rounded-2xl border border-slate-200 shadow-lg bg-white p-3 overflow-hidden aspect-video flex items-center justify-center bg-slate-50">
            <img
              src={project.image || "/project-placeholder.jpg"}
              alt={project.title}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML += '<div class="text-slate-400 font-medium text-sm flex flex-col items-center"><svg class="w-8 h-8 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L28 20"></path></svg>Screenshot coming soon</div>';
              }}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* ── CONTENT ── */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22,1,0.36,1] }}
          className={`${isEven ? "" : "md:[direction:ltr]"}`}
        >
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-indigo-600 mb-3">
            {project.type}
          </span>

          <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
            {project.title}
          </h3>

          <p className="text-sm md:text-base text-slate-600 leading-[1.7] mb-5">
            {project.description}
          </p>

          <ul className="space-y-2 mb-5">
            {project.results.map((point: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                <span className="text-sm text-slate-700">{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-semibold text-slate-700 bg-slate-100 rounded-md border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Code →
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 skew-x-12" />
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default Projects;
