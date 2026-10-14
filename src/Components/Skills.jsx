import React from 'react';
import Section from './Section';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiHtml5,
  SiCss3,
  SiDotnet,
  SiSharp,
} from 'react-icons/si';

const skillSet = [
  {
    name: 'HTML5',
    icon: <SiHtml5 className="text-orange-600" />,
  },
  {
    name: 'CSS3',
    icon: <SiCss3 className="text-blue-500" />,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    name: 'React.js',
    icon: <SiReact className="text-cyan-400" />,
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-cyan-500" />,
  },
  {
    name: 'Node.js',
    icon: <SiNodedotjs className="text-green-500" />,
  },
  {
    name: 'Express.js',
    icon: <SiExpress className="text-white" />,
  },
  {
    name: 'C#',
    icon: <SiSharp className="text-purple-500" />,
  },
  {
    name: '.NET',
    icon: <SiDotnet className="text-purple-400" />,
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="text-blue-400" />,
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className="text-blue-500" />,
  },
  {
    name: 'Git',
    icon: <SiGit className="text-orange-500" />,
  },
];

const Skills = () => (
  <Section id="skills" eyebrow="Toolbox" title="Skills">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {skillSet.map((skill) => (
        <div
          key={skill.name}
          className="tile-mint group flex flex-col items-center justify-center py-8 px-4"
        >
          <div className="text-4xl mb-4 transition-transform duration-500 group-hover:scale-110">
            {skill.icon}
          </div>

          <span className="text-xs font-bold text-emerald-100/80 group-hover:text-white transition-colors uppercase tracking-widest text-center">
            {skill.name}
          </span>
        </div>
      ))}
    </div>

    {/* Additional Skills */}
    <div className="mt-10 pt-8 border-t border-white/10">
      <div className="flex flex-wrap gap-3 justify-center">
        {[
          'REST APIs',
          'Authentication',
          'CRUD Applications',
          'Database Design',
          'API Integration',
          'Protected Routes',
          'Responsive Design',
          'Deployment',
        ].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-gray-400 text-xs font-medium tracking-wide hover:text-white hover:border-cyan-400/30 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </Section>
);

export default Skills;