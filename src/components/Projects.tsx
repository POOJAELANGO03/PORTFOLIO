import React from 'react';
import './Projects.css';
import project4Image from "../assets/icons/project4.png";


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
      title: "AI-Powered Interview System & Resume Analyzer",
      description: "An AI-driven system that generates real-time interview questions, evaluates answers, and provides AI-powered feedback. Integrated resume analysis using Gemma AI, offering structured improvements and professional insights.",
      technologies: ["React.js", "Node.js", "Express.js", "Gemma AI", "Ollama API", "FastAPI", "Firebase"],
      image: "project1",
      liveUrl: "#",
      githubUrl: "https://github.com/POOJAELANGO03/AI-Powered-Interview-System-and-Resume-Analyzer"
    },
    {
      id: 2,
      title: "Smart Assistive Technology",
      description: "Native Android app that enables blind and deaf users to learn independently through Braille vibrations, voice assistance, hands-free controls, chatbot support, and accessible, self-paced tutorials.Incorporated inclusive design principles to ensure seamless accessibility and user empowerment across all interaction modes.",
      technologies:  ["React Native", "OpenAI"],
      image: "project2",
      liveUrl: "#",
      githubUrl: "https://github.com/POOJAELANGO03/Smart-Assistive-Technology"
    },
    {
      id: 4,
      title: "Learns",
      description: "Engineered a dynamic web application that simplifies access to structured, categorized placement resources. Integrated features are thoughtfully tailored for freshers, offering personalized preparation tools, curated company insights, and intuitive navigation to enhance placement readiness.",
      technologies:["React.js", "Node.js", "Express.js", "Firebase"],
      image: project4Image,
      liveUrl: "#",
      githubUrl: "https://github.com/POOJAELANGO03/Learns" // ✅ GitHub link added
    },
    {
      id: 5,
      title: "Academic Resource Hub",
      description: "Developed a MERN stack web application to streamline access to categorized academic resources with specialized features for freshers.",
      technologies:  ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: "project5",
      liveUrl: "#",
      githubUrl: "https://github.com/POOJAELANGO03/ACADEMIC-RESOURCE-HUB"
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-gradient">Featured Projects</h2>
          <p className="section-subtitle">From Code to Reality</p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card glass glow">
              <div className="project-image">
                <div className="project-placeholder">
  {project.id === 4 ? (
    <img src={project.image} alt={project.title} className="project-img" />
  ) : (
    <div className="placeholder-icon">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
      </svg>
    </div>
  )}
  <div className="project-overlay">
    <div className="project-actions">
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="action-btn" target="_blank" rel="noopener noreferrer">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                          </svg>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="action-btn" target="_blank" rel="noopener noreferrer">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
