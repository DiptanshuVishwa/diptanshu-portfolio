import Navbar from "./layout/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Certification from "./components/Certification";

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <About />       
      <Skills />       
      <Projects />    
      <Experience />   
      <Education />    
      <Certification />
      <Stats />        
      <Contact />
    </div>
  );
}

export default App;
