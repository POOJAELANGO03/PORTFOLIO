import React, { useState } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform with advanced filtering, cart management, and secure payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      image: "project1",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      category: "web",
      image: "project2",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines.",
      technologies: ["Figma", "Illustrator", "Photoshop"],
      category: "design",
      image: "project3"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and budget tracking.",
      technologies: ["React Native", "Redux", "Node.js", "PostgreSQL"],
      category: "mobile",
      image: "project4",
      liveUrl: "#"
    },
    {
      id: 5,
      title: "Restaurant Website",
      description: "Modern restaurant website with online reservation system, menu display, and location integration.",
      technologies: ["React", "Gatsby", "Contentful", "Netlify"],
      category: "web",
      image: "project5",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "UI/UX Case Study",
      description: "Complete redesign of a healthcare platform focusing on user experience and accessibility improvements.",
      technologies: ["Figma", "Principle", "Sketch"],
      category: "design",
      image: "project6"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-gradient">Featured Projects</h2>
          <p className="section-subtitle">
           From Code to Reality
          </p>
        </div>

        <div className="filter-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card glass glow">
              <div className="project-image">
                <div className="project-placeholder">
                  <div className="placeholder-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
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
                    <span key={tech} className="tech-tag">{tech}</span>//ONU PURILA
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