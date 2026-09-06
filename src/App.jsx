import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { ThemeProvider } from "./contexts/ThemeContext";
import Footer from "./components/Footer";

function App() {
    return(
      <ThemeProvider>
        <div className="min-h-screen text-[#18181B] bg-white text-gray-900 dark:bg-[#08080A] dark:text-[#F5F5F7] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.08),transparent_35%)]">
          <Navbar />
          <Hero />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Services />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    )
}

export default App;
