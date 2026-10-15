import React from 'react';
import Section from './Section';

const About = () => (
  <Section id="about" eyebrow="My Story" title="About">
    <div className="space-y-6">
      <p className="text-xl md:text-2xl text-[#333333] leading-snug font-medium">
        I am a{' '}
        <span className="font-bold text-[#333333]">Full Stack Developer</span>{' '}
        focused on building practical, reliable, and user-friendly web
        applications.
      </p>

      <p className="text-[#707070] leading-relaxed text-base md:text-lg">
        I work across both{' '}
        <span className="text-[#333333] font-semibold">
          frontend and backend development
        </span>
        , turning ideas and real-world requirements into functional software.
        My experience includes{' '}
        <span className="text-[#333333] font-semibold">
          React, JavaScript, Tailwind CSS, Node.js, Express, C#, and .NET
        </span>
        , along with relational databases, REST APIs, authentication,
        protected routes, and application deployment.
      </p>

      <p className="text-[#707070] leading-relaxed text-base md:text-lg">
        I enjoy understanding how systems work as a whole—not just building
        the interface, but also developing the backend logic, connecting
        services, managing data, and deploying complete applications. I am
        continuously improving my skills through{' '}
        <span className="text-[#333333] font-semibold">
          real-world projects
        </span>{' '}
        and learning more about{' '}
        <span className="text-[#333333] font-semibold">
          AI and intelligent software
        </span>
        .
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12 pt-10 border-t border-[#b0b0b0]">
      {/* Full Stack Development */}
      <div className="group">
        <h3 className="text-[#333333] text-sm tracking-widest uppercase font-bold mb-3 flex items-center">
          <span className="w-2 h-2 bg-[#333333] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
          Full Stack Development
        </h3>

        <p className="text-[#707070] text-sm leading-7">
          Building complete web applications with{' '}
          <span className="text-[#333333]">
            React, JavaScript, Node.js, Express, and .NET
          </span>
          . I focus on creating clean interfaces and reliable backend
          systems that work together seamlessly.
        </p>
      </div>

      {/* Backend & APIs */}
      <div className="group">
        <h3 className="text-[#333333] text-sm tracking-widest uppercase font-bold mb-3 flex items-center">
          <span className="w-2 h-2 bg-[#333333] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
          Backend & APIs
        </h3>

        <p className="text-[#707070] text-sm leading-7">
          Developing{' '}
          <span className="text-[#333333]">
            REST APIs, authentication, CRUD systems, and database-driven
            applications
          </span>
          , with experience working with MySQL and PostgreSQL.
        </p>
      </div>

      {/* Deployment */}
      <div className="group">
        <h3 className="text-[#333333] text-sm tracking-widest uppercase font-bold mb-3 flex items-center">
          <span className="w-2 h-2 bg-[#333333] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
          Deployment
        </h3>

        <p className="text-[#707070] text-sm leading-7">
          Working with{' '}
          <span className="text-[#333333]">
            application deployment, remote servers, Render, environment
            configuration, and production systems
          </span>{' '}
          to take applications from development to a working environment.
        </p>
      </div>

      {/* AI & Learning */}
      <div className="group">
        <h3 className="text-[#333333] text-sm tracking-widest uppercase font-bold mb-3 flex items-center">
          <span className="w-2 h-2 bg-[#333333] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
          AI & Continuous Learning
        </h3>

        <p className="text-[#707070] text-sm leading-7">
          Expanding my knowledge in{' '}
          <span className="text-[#333333]">
            Python, AI, machine learning, and intelligent applications
          </span>
          , with the goal of becoming a developer capable of building
          modern AI-powered products.
        </p>
      </div>
    </div>

    {/* Education Card */}
    <div className="card-soft mt-12 p-7 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h4 className="text-[#707070] text-xs font-black tracking-[.3em] uppercase mb-2">
          Education
        </h4>

        <p className="text-[#333333] text-lg font-bold">
          B.Sc. in Computer Science
        </p>

        <p className="text-[#707070] text-sm">Debre Tabor University</p>
      </div>

      <div className="px-4 py-2 border border-[#b0b0b0] rounded-full text-[10px] text-[#333333] font-bold uppercase tracking-widest">
        Graduate
      </div>
    </div>
  </Section>
);

export default About;