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
import figmaIcon from "../assets/icons/figma.png";

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
  figma: figmaIcon,
};

const skillList = [
  { icon: 'react', label: 'Crafted UIs' },
  { icon: 'typescript', label: 'Typed Power' },
  { icon: 'javascript', label: 'Logic Flow' },
  { icon: 'html', label: 'Skeleton Maker' },
  { icon: 'css', label: 'Style Wizard' },
  { icon: 'nodejs', label: 'API Architect' },
  { icon: 'python', label: 'Smart Scripts' },
  { icon: 'mongodb', label: 'Data Trees' },
  { icon: 'firebase', label: 'Realtime Sync' },
  { icon: 'java', label: 'Backbone Logic' },
  { icon: 'flutter', label: 'Mobile Magic' },
  { icon: 'figma', label: 'Design Lab' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">My Digital DNA</p>
        </div>

        <div className="skills-grid">
          {skillList.map((skill, index) => (
            <div key={index} className="flip-card">
              <div className="flip-inner">
                <div className="flip-front">
                  <img src={iconMap[skill.icon]} alt={skill.icon} className="icon-image" />
                </div>
                <div className="flip-back">
                  <p>{skill.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
