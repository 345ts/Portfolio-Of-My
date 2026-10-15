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

// Icons are one charcoal colour to match the Elegant Minimalism palette.
const skillSet = [
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React.js', icon: <SiReact /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'C#', icon: <SiSharp /> },
  { name: '.NET', icon: <SiDotnet /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Git', icon: <SiGit /> },
];

const Skills = () => (
  <Section id="skills" eyebrow="Toolbox" title="Skills">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {skillSet.map((skill) => (
        <div
          key={skill.name}
          className="tile-soft group flex flex-col items-center justify-center py-8 px-4"
        >
          <div className="text-4xl mb-4 text-[#333333] transition-transform duration-500 group-hover:scale-110">
            {skill.icon}
          </div>

          <span className="text-xs font-bold text-[#333333] uppercase tracking-widest text-center">
            {skill.name}
          </span>
        </div>
      ))}
    </div>

    {/* Additional Skills */}
    <div className="mt-10 pt-8 border-t border-[#b0b0b0]">
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
            className="px-4 py-2 rounded-full border border-[#b0b0b0] bg-white text-[#707070] text-xs font-medium tracking-wide hover:text-[#333333] hover:border-[#333333] transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </Section>
);

export default Skills;