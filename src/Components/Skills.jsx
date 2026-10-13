import React from 'react';
import Section from './Section';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';

const skillSet = [
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-600" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'React.js', icon: <SiReact className="text-cyan-400" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'Express', icon: <SiExpress className="text-white" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
  { name: 'Git', icon: <SiGit className="text-orange-500" /> },
];

const Skills = () => (
  <Section id="skills" eyebrow="Toolbox" title="Skills">
    {/* 3 x 3 grid of mint tiles */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
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
  </Section>
);

export default Skills;
