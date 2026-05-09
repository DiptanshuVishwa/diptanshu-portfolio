import Container from "../layout/Container";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Star } from "lucide-react";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-[420px] h-[420px] bg-indigo-50/40 rounded-full blur-3xl -z-10" 
      />

      <Container>
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT: Static Header */}
          <div className="lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className="mb-3 flex items-center gap-2 text-indigo-600 text-xs font-mono uppercase tracking-widest">
                <GraduationCap size={14} className="animate-bounce" />
                Journey
              </div>

              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Academic{" "}
                <span className="text-indigo-600">Background</span>
              </h2>

              <p className="mt-4 text-sm text-slate-500 max-w-[240px] leading-relaxed">
                A chronological look at my technical foundation and academic excellence.
              </p>
            </motion.div>
          </div>

          {/* RIGHT: Animated Timeline */}
          <div className="lg:col-span-9 relative">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[10px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500 via-slate-200 to-slate-100" 
            />

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
             <TimelineItem
                title="Kalinga Institute of Industrial Technology (KIIT)"
                date="2023 – 2027"
                subtitle="B.Tech in Computer Science and Communication Engineering"
                description="Strong focus on core Computer Science including System Design, Full-Stack Development, and AI/ML. Hands-on experience with Node.js, Express.js, MongoDB, scalable backend architectures, and AI integrations."
                stats={[
                  { label: "CGPA", value: "7.58", highlight: true, icon: <Star size={10} /> },
                ]}
              />
              <TimelineItem
                title="Shradhalaya Public School (Rawatbhata)"
                date="2023"
                subtitle="Higher Secondary Education (CBSE) - Class 12"
                description="Completed higher secondary education with focus on analytical and technical subjects, building the academic foundation for engineering and software development."
                stats={[
                  { label: "Percentage", value: "67%", highlight: false },
                ]}
              />
              <TimelineItem
                title="Atomic Energy Central School No. 4 (Rawatbhata)"
                date="2021"
                subtitle="Secondary School Education (CBSE) - Class 10"
                description="Developed strong academic fundamentals and early interest in technology, logic, and computer science."
                stats={[
                  { label: "Percentage", value: "87%", highlight: false },
                ]}
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ── Enhanced Timeline Item ── */
const TimelineItem = ({ title, date, subtitle, description, stats }: any) => {
  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="relative pl-10 group"
    >
      <motion.div 
        whileHover={{ scale: 1.5 }}
        className="absolute left-0 top-1.5 w-[20px] h-[20px] rounded-full bg-white border-2 border-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.2)] z-10 transition-colors group-hover:bg-indigo-600" 
      />

      <div className="bg-transparent hover:bg-slate-50/50 p-4 rounded-xl transition-colors duration-300 -m-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <h3 className="text-xl font-semibold text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors">
            {title}
          </h3>

          <div className="flex items-center gap-1.5 text-sm font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
            <Calendar size={13} className="text-indigo-500" />
            {date}
          </div>
        </div>

        <p className="text-base font-medium text-indigo-600/80 mb-1">
          {subtitle}
        </p>
        
        <p className="text-sm text-slate-500 mb-4 leading-relaxed max-w-2xl">
          {description}
        </p>

        <div className="flex flex-wrap gap-3">
          {stats.map((stat: any, i: number) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                stat.highlight
                  ? "bg-indigo-50 border-indigo-100 text-indigo-700 shadow-sm shadow-indigo-100"
                  : "bg-white border-slate-100 text-slate-600"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="block text-[10px] uppercase tracking-wider font-bold opacity-60">
                  {stat.label}
                </span>
                {stat.icon && <span className="text-indigo-400">{stat.icon}</span>}
              </div>
              <span className="font-bold tabular-nums">{stat.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
