import React, { useState } from 'react';
import Section from './Section';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaHospital,
  FaTasks,
  FaUsers,
  FaCode,
} from 'react-icons/fa';

const projectData = [
  {
    name: 'Zion Education Platform',
    category: 'Fullstack',
    desc: 'A full-stack education platform designed to give students one place to access academic resources, manage personal study materials, track learning activity, and use modern learning tools.',
    tech: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'JWT',
      'Cloudinary',
    ],
    icon: <FaGraduationCap />,
    link: '#',
    github: '#',
  },

  {
    name: 'College Management System',
    category: 'Fullstack',
    desc: 'A multi-tenant college management system built with ASP.NET Core and React. The system supports tenant-based architecture, authentication, academic management, and database-driven administrative workflows.',
    tech: [
      'React',
      'C#',
      '.NET',
      'ASP.NET Core',
      'SQL',
      'REST API',
      'Git',
    ],
    icon: <FaUsers />,
    link: '#',
    github: '#',
  },

  {
    name: 'Clinic Management System',
    category: 'Fullstack',
    desc: 'A database-driven healthcare management application for managing patients, clinical information, and administrative workflows through a structured web interface.',
    tech: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MySQL',
      'JWT',
    ],
    icon: <FaHospital />,
    link: '#',
    github: '#',
  },

  {
    name: 'Task Management System',
    category: 'Fullstack',
    desc: 'A secure task management application where authenticated users can create, update, organize, and manage their own tasks through a responsive interface.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MySQL',
      'JWT',
      'Tailwind CSS',
    ],
    icon: <FaTasks />,
    link: '#',
    github: '#',
  },

  {
    name: 'Student Management System',
    category: 'Fullstack',
    desc: 'An academic management system for managing students, teachers, subjects, and related academic records with CRUD functionality and role-based access.',
    tech: [
      'React',
      'Node.js',
      'Express',
      'MySQL',
      'JWT',
      'Tailwind CSS',
    ],
    icon: <FaUsers />,
    link: '#',
    github: '#',
  },

  {
    name: 'Personal Portfolio',
    category: 'Frontend',
    desc: 'A modern responsive portfolio website designed to present my development experience, technical skills, projects, and professional background.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    icon: <FaCode />,
    link: '#',
    github: '#',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Frontend', 'Fullstack'];

  const filteredProjects =
    filter === 'All'
      ? projectData
      : projectData.filter((project) => project.category === filter);

  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects">

      {/* Filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 border ${
              filter === category
                ? 'bg-cyan-400 text-[#061920] border-cyan-400'
                : 'bg-transparent text-gray-400 border-white/10 hover:border-cyan-400/50 hover:text-cyan-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.name}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-7
                       hover:border-cyan-400/30 hover:bg-white/[0.04]
                       transition-all duration-500"
          >
            {/* Top */}
            <div className="flex items-start justify-between gap-5 mb-6">

              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center
                             bg-cyan-400/10 border border-cyan-400/10
                             text-cyan-400 text-lg
                             group-hover:bg-cyan-400/15
                             transition-all duration-300"
                >
                  {project.icon}
                </div>

                <div>
                  <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-cyan-400/70">
                    {project.category}
                  </span>

                  <h3 className="text-lg md:text-xl font-bold text-white mt-1">
                    {project.name}
                  </h3>
                </div>
              </div>

              <span className="text-xs text-gray-600">
                {String(projectData.indexOf(project) + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-7 mb-6">
              {project.desc}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((technology) => (
                <span
                  key={technology}
                  className="px-2.5 py-1 rounded-md
                             bg-white/[0.03]
                             border border-white/10
                             text-[9px] font-medium
                             text-gray-400"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between pt-5 border-t border-white/10">

              <span className="text-[9px] uppercase tracking-[0.2em] text-gray-600">
                Full Stack Project
              </span>

              <div className="flex items-center gap-5">

                <a
                  href={project.github}
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label={`View ${project.name} GitHub repository`}
                >
                  <FaGithub size={17} />
                </a>

                <a
                  href={project.link}
                  className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest
                             text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  View Project
                  <FaExternalLinkAlt size={9} />
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