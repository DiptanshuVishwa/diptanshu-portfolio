import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Hackathon Competitor",
      company: "SDIS Hackathon",
      shortCompany: "SDIS",
      duration: "2024",
      accentColor: "#6366f1",
      type: "Competition",
      mode: "On-site",
      slogan: "Building robust architectures under pressure.",
      emoji: "🏆",
      image: "/sdis-hackathon.jpg",
      points: [
        "Achieved 2nd Runner-Up out of multiple participating teams",
        "Developed an innovative full-stack solution under strict time constraints",
        "Demonstrated problem-solving capabilities and robust system architecture",
      ],
    },
    {
      role: "Top 5 Team",
      company: "Smart India Hackathon (SIH)",
      shortCompany: "SIH",
      duration: "2023",
      accentColor: "#8b5cf6",
      type: "Internal Selections",
      mode: "On-site",
      slogan: "National level competitive coding.",
      emoji: "⚡",
      image: "/sih-team.png",
      points: [
        "Ranked Top 5 in internal selections for national-level hackathon",
        "Built a scalable backend API using modern MERN stack principles",
        "Focused on rapid prototyping and database modeling",
      ],
    },
    {
      role: "Full Stack Development Journey",
      company: "Production Projects",
      shortCompany: "Production",
      duration: "2023 - Present",
      accentColor: "#0ea5e9",
      type: "Engineering",
      mode: "Remote",
      slogan: "Code that connects & converts.",
      emoji: "🚀",
      image: "/projects/medi-vault.png",
      points: [
        "Built and deployed MEDI-VAULT with AWS S3 and Gemini API integrations",
        "Engineered NagarMitra, a mobile-first civic issue platform on Firebase",
        "Consistently designing and deploying secure authentication and RESTful APIs",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-[#fafafa]">
      <div className="max-w-[1000px] mx-auto px-6">

        {/* Compact Header */}
        <div className="mb-12 relative">

          {/* Floating Tag */}
          <div className="inline-block mb-4">
            <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 bg-indigo-50 rounded-full border border-indigo-100">
              Journey
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Engineering <span className="text-slate-400 font-light">Journey</span>
          </h2>

          {/* Accent Line */}
          <div className="mt-4 w-20 h-[3px] bg-gradient-to-r from-indigo-500 to-transparent rounded-full" />

          {/* Subtle Background Number */}
          <div className="absolute -top-6 right-0 text-[5rem] font-black text-slate-100 select-none pointer-events-none">
            03
          </div>

        </div>
        {/* Wide Integrated Cards */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ExperienceCard({ exp }: { exp: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const rotateX = useTransform(mouseY, [0, 300], [1, -1]);
  const rotateY = useTransform(mouseX, [0, 1000], [-1, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        style={{ rotateX: isHovered ? rotateX : 0, rotateY: isHovered ? rotateY : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all"
      >
        {/* IMAGE SIDE: Dark Visual Area with Integrated Preview */}
        <div className="relative w-full md:w-[38%] h-60 md:h-auto overflow-hidden bg-slate-950 flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50 z-10 pointer-events-none" />
          
          {/* Top/Right Emoji */}
          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-xl z-20 border border-white/5">
            <span className="text-xl leading-none">{exp.emoji}</span>
          </div>

          {/* Small Preview Image */}
          <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8 z-0">
             <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100 bg-slate-900">
                 <img
                   src={exp.image}
                   alt={exp.company}
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.onerror = null; // prevent infinite loop
                     target.src = "/projects/nagarmitra.jpg";
                     target.parentElement!.innerHTML += `<div class="absolute inset-0 flex items-center justify-center w-full h-full text-white font-black text-2xl opacity-20 tracking-tighter z-[-1] pointer-events-none">${exp.shortCompany}</div>`;
                   }}
                   className="w-full h-full object-cover"
                 />
             </div>
          </div>

          {/* Text Labels at Bottom */}
          <div className="absolute bottom-4 left-4 text-white z-20">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">{exp.type}</p>
            <h4 className="text-xl font-black leading-tight text-slate-100">{exp.shortCompany}</h4>
          </div>
        </div>

        {/* CONTENT SIDE: Tightened text and smaller fonts */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              {exp.role}
            </h3>
            <span className="text-[11px] font-bold text-slate-400 mt-1">{exp.duration}</span>
          </div>

          <p className="text-sm font-bold mb-3" style={{ color: exp.accentColor }}>
            {exp.company}
          </p>

          <p className="text-xs italic text-slate-500 mb-4 border-l-2 pl-3" style={{ borderColor: exp.accentColor + '40' }}>
            "{exp.slogan}"
          </p>

          <div className="grid grid-cols-1 gap-2">
            {exp.points.map((point: string, i: number) => (
              <div key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: exp.accentColor }} />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Experience;
