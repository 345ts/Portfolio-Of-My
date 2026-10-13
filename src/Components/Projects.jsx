import React, { useState } from 'react';
import Section from './Section';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaDatabase,
  FaLayerGroup,
  FaDesktop,
} from 'react-icons/fa';

const projectData = [
  {
    name: 'Clinic Management System',
    category: 'Fullstack',
    desc: 'Integrated healthcare platform managing patient lifecycles, clinical records, and automated billing systems. Designed for high reliability in medical environments.',
    tech: ['React', 'TailwindCss', 'Node.js', 'MySQL', 'Express', 'JWT', 'Git'],
    icon: <FaLayerGroup />,
    link: '#',
    github: '#',
  },
  {
    name: 'TaskFlow Personal Platform',
    category: 'Fullstack',
    desc: 'A multi-user workspace featuring full CRUD capabilities, where each user manages their own private task environment with secure JWT authentication and real-time data persistence.',
    tech: ['React', 'Node.js', 'MySQL', 'Express', 'JWT', 'TailwindCss'],
    icon: <FaDatabase />,
    link: '#',
    github: '#',
  },
  {
    name: 'Student Information Portal',
    category: 'Fullstack',
    desc: 'A comprehensive academic management system featuring full CRUD operations and Role-Based Access Control (RBAC) to securely manage student records, grades, and enrollments based on user permissions.',
    tech: ['React', 'Node.js', 'MySQL', 'Express', 'JWT', 'TailwindCss'],
    icon: <FaLayerGroup />,
    link: '#',
    github: '#',
  },
  {
    name: 'School Website',
    category: 'Frontend',
    desc: 'A clean, responsive multi-page website designed for schools to showcase programs and academic resources. Focused on high-speed performance and intuitive navigation across all device sizes.',
    tech: ['Html', 'CSS3', 'Javascript'],
    icon: <FaDesktop />,
    link: '#',
    github: '#',
  },
  {
    name: 'Personal Portfolio',
    category: 'Frontend',
    desc: 'A modern, responsive digital showcase built with a mobile-first approach. Features a sleek glassmorphism UI and optimized performance to present professional projects and technical skills.',
    tech: ['Html', 'CSS3', 'Javascript'],
    icon: <FaDesktop />,
    link: '#',
    github: '#',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Fullstack'];

  const filteredProjects =
    filter === 'All'
      ? projectData
      : projectData.filter((p) => p.category === filter);

  return (
    <Section id="projects" eyebrow="Archive" title="Projects">
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-lg text-[10px] font-bold tracking-widest uppercase transition-all duration-500 border ${
              filter === cat
                ? 'bg-violet-200 text-[#1a1440] border-violet-200'
                : 'bg-transparent text-gray-400 border-white/10 hover:border-violet-300/60 hover:text-violet-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Stacked project cards (the lavender cards in the wireframe) */}
      <div className="flex flex-col gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.name}
            className="card-violet group p-6 md:p-7 flex flex-col gap-5"
          >
            <div className="flex items-start gap-5">
              <div className="text-violet-300/60 text-2xl mt-1 group-hover:text-violet-200 transition-colors duration-500">
                {project.icon}
              </div>
              <div className="flex-1">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-violet-300/70 mb-1 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.name}
                </h3>
                <p className="text-gray-300/80 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-violet-300/15">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] bg-violet-300/10 px-2.5 py-1 rounded text-violet-100/80 border border-violet-300/15 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <a
                  href={project.github}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="View Github Source"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={project.link}
                  className="flex items-center text-[9px] font-black uppercase tracking-widest text-white hover:text-violet-200 transition-all"
                >
                  Project Link <FaExternalLinkAlt className="ml-2" size={10} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
