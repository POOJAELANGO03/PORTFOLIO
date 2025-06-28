import React from 'react';
import './Skills.css';

import cssIcon from "../assets/icons/css.png";
import firebaseIcon from "../assets/icons/firebase.png";
import flutterIcon from "../assets/icons/flutter.png";
import htmlIcon from "../assets/icons/html.png";
import javaIcon from "../assets/icons/java.png";
import javascriptIcon from "../assets/icons/javascript.png";
import mongoDBIcon from "../assets/icons/MongoDB.png";
import nodeIcon from "../assets/icons/node.png";
import pythonIcon from "../assets/icons/python.png";
import reactIcon from "../assets/icons/react.png";
import typescriptIcon from "../assets/icons/typescript.png";

// Map icon keys to image imports
const iconMap: Record<string, string> = {
  css: cssIcon,
  firebase: firebaseIcon,
  flutter: flutterIcon,
  html: htmlIcon,
  java: javaIcon,
  javascript: javascriptIcon,
  mongodb: mongoDBIcon,
  nodejs: nodeIcon,
  python: pythonIcon,
  react: reactIcon,
  typescript: typescriptIcon,
};

interface Skill {
  
  category: string;
  icon: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {  category: 'frontend', icon: 'react' },
    {  category: 'frontend', icon: 'typescript' },
    {  category: 'frontend', icon: 'javascript' },
    { category: 'frontend', icon: 'html' },
    {  category: 'frontend', icon: 'css' },
    {  category: 'backend', icon: 'nodejs' },
    { category: 'backend', icon: 'python' },
    {  category: 'backend', icon: 'mongodb' },
    {  category: 'backend', icon: 'firebase' },
    { category: 'backend', icon: 'java' },
    {  category: 'backend', icon: 'flutter' },
  ];

  const categories = [
    { id: 'frontend', label: 'Frontend Development', color: 'var(--lavender)' },
    { id: 'backend', label: 'Backend Development', color: 'var(--lavender-light)' },
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-gradient">Skills & Technologies</h2>
          <p className="section-subtitle">My Digital DNA</p>
        </div>

        <div className="skills-content">
          {categories.map(category => (
            <div key={category.id} className="skill-category">
             
              <div className="skills-grid">
                {skills
                  .filter(skill => skill.category === category.id)
                  .map(skill => (
                    <div key={skill.name} className="skill-item glass">
                      <div className="skill-header">
                        <div className="skill-icon">
                          <img
                            src={iconMap[skill.icon]}
                            alt={`${skill.name} icon`}
                            className="icon-image"
                          />
                        </div>
                        <div className="skill-info">
                          <h4 className="skill-name">{skill.name}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
