import Contact from "./components/Contact";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export const metadata = {
  title: 'Shivam Sharma | Portfolio',
  description: 'Welcome to my awesome portfolio!',
}

export default function Home() {
  return (
    <>
    
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/50 backdrop-blur-lg z-50 cyber-border">
         <Navigation/>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 relative overflow-hidden">
         <Hero/>
      </section>

    
      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <About/>
      </section>

      {/* Experience */}

      <section id="experience" className="py-20 bg-gray-900/50 relative overflow-hidden">
        <Experience/> 
        </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50 relative overflow-hidden">
        <Projects/>
      </section>

      {/* Education */}
      <section id="education" className="py-20 bg-gray-900/50 relative overflow-hidden">
        <Education/>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative overflow-hidden">
        <Skills/>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50 relative overflow-hidden">
        <Contact/>
      </section>

      {/* Footer */}
      <Footer/>
      
    </div>
    </>
  );
}
