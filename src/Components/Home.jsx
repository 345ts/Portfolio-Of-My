import React from 'react';

// The Home panel. Full screen at the top of the page, then shrinks into the
// top-left corner (curved bottom-right edge) and stays there.
const Home = ({ shrunk }) => {
  return (
    <div className={`home-panel ${shrunk ? 'is-shrunk' : ''}`}>
      <section
        id="home"
        className="relative h-full flex flex-col justify-center overflow-hidden"
      >
        <div className="absolute top-1/3 -left-24 w-64 h-64 bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="home-inner relative z-10">
          <div className="home-tag flex items-center space-x-3">
            <div className="w-6 h-[1px] bg-cyan-500/40"></div>
            <span className="tracking-[0.5em] text-cyan-500/70 uppercase font-bold">
              Full-stack Developer
            </span>
          </div>

          <h1 className="home-name font-bold text-white tracking-tighter">
            Tsion Fikre<span className="text-cyan-500">.</span>
          </h1>

          <p className="home-sub uppercase text-gray-400 font-medium leading-relaxed">
            Frontend and Backend. Crafting digital solutions with precision
          </p>

          <a
            href="#projects"
            className="home-cta group relative inline-block uppercase font-bold text-white"
          >
            <span className="relative z-10">View Work</span>
            <div className="absolute -bottom-2 left-0 w-4 h-[2px] bg-cyan-500 transition-all group-hover:w-full"></div>
          </a>
        </div>

        <div className="home-scroll absolute bottom-10 right-10 hidden sm:flex flex-col items-center gap-4">
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
          <span className="text-[8px] tracking-[0.4em] text-gray-600 uppercase [writing-mode:vertical-lr]">
            Scroll
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
