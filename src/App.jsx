import React from 'react';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import CustomCursor from './Components/CustomCursor';
import usePanelScroll from './usePanelScroll';

function App() {
  const shrunk = usePanelScroll();

  return (
    <div className="relative min-h-screen bg-[#020b10] bg-[radial-gradient(ellipse_at_top,_#144e5a_0%,#061920_45%,#020b10_100%)] text-white font-sans cursor-none selection:bg-cyan-500/30">
      <CustomCursor />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.4)_100%)] pointer-events-none"></div>

      <div className="relative z-10">
        <Navbar />

        {/* Home panel: always here, top-left, on every section */}
        <Home shrunk={shrunk} />

        <main className="page">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
