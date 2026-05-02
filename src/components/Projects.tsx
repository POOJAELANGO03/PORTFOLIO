import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import project1Image from "../assets/project2.png"; // Placeholder since project1.png is missing
import project2Image from "../assets/project2.png";
import project4Image from "../assets/project4.png";
import project5Image from "../assets/project4.png"; // Placeholder since project5.png is missing

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AI Interview System",
      description: "An AI-driven system that generates real-time interview questions, evaluates answers, and provides AI-powered feedback using Gemma AI.",
      technologies: ["React.js", "Node.js", "Gemma AI", "FastAPI"],
      image: project1Image,
      liveUrl: "#",
      githubUrl: "https://github.com/POOJAELANGO03/AI-Powered-Interview-System-and-Resume-Analyzer"
    },
    {
      id: 2,
      title: "Smart Assistive Tech",
      description: "Native Android app enabling blind and deaf users to learn through Braille vibrations and voice assistance.",
      technologies: ["React Native", "OpenAI"],
      image: project2Image,
      liveUrl: "#",
      githubUrl: "https://github.com/POOJAELANGO03/Smart-Assistive-Technology"
    },
    {
      id: 4,
      title: "Learns Platform",
      description: "A dynamic web application simplifying access to structured, categorized placement resources for freshers.",
      technologies: ["React.js", "Node.js", "Firebase"],
      image: project4Image,
      liveUrl: "#",
      githubUrl: "https://github.com/POOJAELANGO03/Learns"
    },
    {
      id: 5,
      title: "Academic Resource Hub",
      description: "Streamlined MERN stack application for managing and accessing categorized academic resources efficiently.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      image: project5Image,
      liveUrl: "#",
      githubUrl: "https://github.com/POOJAELANGO03/ACADEMIC-RESOURCE-HUB"
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Selected works from 2023–2024</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="action-link" target="_blank" rel="noopener noreferrer">
                      Code — GitHub
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a href={project.liveUrl} className="action-link" target="_blank" rel="noopener noreferrer">
                      Live — Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
