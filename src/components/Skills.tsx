import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

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

interface Skill {
  icon: string;
  label: string;
}

const skillList: Skill[] = [
  { icon: 'react', label: 'React' },
  { icon: 'typescript', label: 'TypeScript' },
  { icon: 'javascript', label: 'JavaScript' },
  { icon: 'nodejs', label: 'Node.js' },
  { icon: 'python', label: 'Python' },
  { icon: 'mongodb', label: 'MongoDB' },
  { icon: 'firebase', label: 'Firebase' },
  { icon: 'java', label: 'Java' },
  { icon: 'flutter', label: 'Flutter' },
  { icon: 'figma', label: 'Figma' },
  { icon: 'html', label: 'HTML5' },
  { icon: 'css', label: 'CSS3' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Stack</h2>
          <p className="section-subtitle">Core technologies I use to build digital products.</p>
        </div>

        <div className="skills-grid">
          {skillList.map((skill, index) => (
            <motion.div
              key={skill.icon}
              className="skill-box"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
            >
              <img src={iconMap[skill.icon]} alt={skill.label} />
              <p className="skill-label">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
