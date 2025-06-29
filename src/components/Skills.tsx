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
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">My Digital DNA</p>
        </motion.div>

        <div className="skills-grid">
          {skillList.map((skill, index) => (
            <motion.div
              key={skill.icon}
              className="skill-box"
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                type: 'spring',
                stiffness: 100,
              }}
              viewport={{ once: false, amount: 0.4 }}
              whileHover={{ scale: 1.05, y: -6 }}
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
