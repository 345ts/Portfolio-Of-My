import React from 'react';
import Section from './Section';

const About = () => (
  <Section id="about" eyebrow="My Story" title="About">
    <div className="space-y-6">
      <p className="text-xl md:text-2xl text-gray-200 leading-snug font-medium">
        I am an aspiring{' '}
        <span className="text-cyan-400">Junior Full Stack Developer</span> and
        4th-year CS student at Debre Tabor University, dedicated to building
        functional and user-centric web applications.
      </p>
      <p className="text-gray-400 leading-relaxed text-base md:text-lg">
        With a strong foundation in <span className="text-white">Frontend</span>{' '}
        design and <span className="text-white">Backend</span> logic, I enjoy
        turning complex problems into simple, elegant code. I am actively
        applying my classroom knowledge to real-world{' '}
        <span className="text-cyan-400">Full Stack projects</span>, constantly
        learning new technologies to build faster and more reliable systems.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12 pt-10 border-t border-white/10">
      <div className="group">
        <h3 className="text-white text-sm tracking-widest uppercase font-bold mb-3 flex items-center">
          <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
          Backend Systems
        </h3>
        <p className="text-gray-500 text-sm leading-7">
          Building robust server-side logic and{' '}
          <span className="text-gray-300">Node.js APIs</span>. I emphasize
          secure database management and efficient data processing to ensure
          system reliability.
        </p>
      </div>
      <div className="group">
        <h3 className="text-white text-sm tracking-widest uppercase font-bold mb-3 flex items-center">
          <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
          Frontend Logic
        </h3>
        <p className="text-gray-500 text-sm leading-7">
          Creating responsive, high-fidelity user interfaces using{' '}
          <span className="text-gray-300">React</span>. I combine state
          management with clean UI principles to deliver seamless digital
          experiences.
        </p>
      </div>
    </div>

    {/* Education card (the lavender card in the wireframe) */}
    <div className="card-violet mt-12 p-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h4 className="text-violet-300 text-xs font-black tracking-[.3em] uppercase mb-2">
          Education
        </h4>
        <p className="text-white text-lg font-bold">
          B.Sc. in Computer Science
        </p>
        <p className="text-gray-400 text-sm">Debre Tabor University</p>
      </div>
      <div className="px-4 py-2 border border-violet-300/30 rounded-full text-[10px] text-violet-200 font-bold uppercase tracking-widest">
        Year IV Candidate
      </div>
    </div>
  </Section>
);

export default About;
