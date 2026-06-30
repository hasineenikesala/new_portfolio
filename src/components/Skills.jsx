import React, { useState } from 'react';
import { Terminal, Globe, Server, Database, Palette, Wrench } from 'lucide-react';

// Sub-component to dynamically load Devicon SVGs with custom fallback vectors
const SkillIcon = ({ name, slug }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError || !slug) {
    // Elegant fallback SVG for tools/concepts without direct Devicon files
    return (
      <svg 
        className="tech-fallback-svg" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
        />
      </svg>
    );
  }

  return (
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}`}
      alt={`${name} logo`}
      className="tech-logo-img"
      onError={() => setImgError(true)}
    />
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Terminal size={20} />,
      skills: [
        { name: 'Java', slug: 'java/java-original.svg' },
        { name: 'PHP', slug: 'php/php-original.svg' },
        { name: 'Python', slug: 'python/python-original.svg' },
        { name: 'TypeScript', slug: 'typescript/typescript-original.svg' }
      ]
    },
    {
      title: 'Web Development',
      icon: <Globe size={20} />,
      skills: [
        { name: 'React.js', slug: 'react/react-original.svg' },
        { name: 'Angular', slug: 'angularjs/angularjs-original.svg' },
        { name: 'HTML5', slug: 'html5/html5-original.svg' },
        { name: 'CSS3', slug: 'css3/css3-original.svg' },
        { name: 'Tailwind CSS', slug: 'tailwindcss/tailwindcss-original.svg' },
        { name: 'JavaScript', slug: 'javascript/javascript-original.svg' },
        { name: 'Bootstrap', slug: 'bootstrap/bootstrap-original.svg' }
      ]
    },
    {
      title: 'Backend & Frameworks',
      icon: <Server size={20} />,
      skills: [
        { name: 'Node.js', slug: 'nodejs/nodejs-original.svg' },
        { name: 'Express.js', slug: 'express/express-original.svg' },
        { name: 'Spring Boot', slug: 'spring/spring-original.svg' },
        { name: 'RESTful APIs', slug: '' }, // Fallback concept icon
        { name: 'MVC', slug: '' },          // Fallback concept icon
        { name: 'Hibernate', slug: 'hibernate/hibernate-original.svg' },
        { name: 'JPA', slug: '' }           // Fallback concept icon
      ]
    },
    {
      title: 'Databases',
      icon: <Database size={20} />,
      skills: [
        { name: 'MySQL', slug: 'mysql/mysql-original.svg' },
        { name: 'MongoDB', slug: 'mongodb/mongodb-original.svg' }
      ]
    },
    {
      title: 'UI/UX & Design',
      icon: <Palette size={20} />,
      skills: [
        { name: 'Figma', slug: 'figma/figma-original.svg' },
        { name: 'Illustrator', slug: 'illustrator/illustrator-plain.svg' },
        { name: 'Photoshop', slug: 'photoshop/photoshop-original.svg' }
      ]
    },
    {
      title: 'IDEs & Tools',
      icon: <Wrench size={20} />,
      skills: [
        { name: 'Git', slug: 'git/git-original.svg' },
        { name: 'GitHub', slug: 'github/github-original.svg' },
        { name: 'VS Code', slug: 'vscode/vscode-original.svg' },
        { name: 'Postman', slug: 'postman/postman-original.svg' },
        { name: 'IntelliJ', slug: 'intellij/intellij-original.svg' },
        { name: '.NET', slug: 'dot-net/dot-net-original.svg' },
        { name: 'Linux OS', slug: 'linux/linux-original.svg' },
        { name: 'Maltego', slug: '' }        // Fallback concept icon
      ]
    }
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Technical <span>Arsenal</span></h2>

      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div className="skills-card" key={idx}>
            <div className="skills-card-header">
              <div className="skills-icon-container">
                <div className="skills-icon-ring"></div>
                <div className="skills-icon-inner">
                  {cat.icon}
                </div>
              </div>
              <h3 className="skills-card-title">{cat.title}</h3>
            </div>
            
            <div className="skills-list">
              {cat.skills.map((skill, sIdx) => (
                <div className="skill-node" key={sIdx}>
                  <div className="skill-gear-container">
                    {/* Micro-gear rotating border ring with staggered independent delay loop */}
                    <div 
                      className="skill-gear-ring"
                      style={{ animationDelay: `-${(sIdx * 0.3).toFixed(1)}s` }}
                    ></div>
                    
                    {/* Skill icon core container */}
                    <div className="skill-icon-core">
                      <SkillIcon name={skill.name} slug={skill.slug} />
                    </div>
                  </div>

                  {/* Centered Plain-text Label underneath the rotating gear ring */}
                  <span className="skill-label">{skill.name}</span>
                  
                  {/* Tooltip detail overlay */}
                  <span className="skill-tooltip">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
