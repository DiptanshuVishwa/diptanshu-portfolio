import Container from "./Container";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll with offset
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setMenuOpen(false); // close menu after click (mobile UX)
  };

  // Active section tracking (scroll spy)
  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "experience",
      "skills",
      "projects",
      "achievements",
      "education",
      "contact",
    ];

    const handleScrollSpy = () => {
      let current = "hero";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Engineering Journey" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Achievements" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
      <Container>
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => handleScroll("hero")}
            className="group text-2xl font-extrabold tracking-tighter text-slate-900 transition-all duration-300 hover:scale-105"
          >
            Diptanshu
            <span className="inline-block text-indigo-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125">
              .
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[14px] lg:text-[15px] font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`group relative transition ${
                  active === item.id
                    ? "text-indigo-600"
                    : "text-slate-600 hover:text-indigo-600"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-indigo-600 transition-all duration-300 ${
                    active === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Hamburger (Mobile Only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span className="w-6 h-[2px] bg-slate-800" />
            <span className="w-6 h-[2px] bg-slate-800" />
            <span className="w-6 h-[2px] bg-slate-800" />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 pb-4 flex flex-col gap-4 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`text-left transition ${
                  active === item.id
                    ? "text-indigo-600"
                    : "text-slate-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
