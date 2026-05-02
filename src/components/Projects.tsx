import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import brailleImg from "../assets/Braille.png";
import interviewforgeImg from "../assets/interviewforge.webp";
import sentimentImg from "../assets/sentimentIQ.png";
import crowdImg from "../assets/CROWD.jpg";
import coursehiveImg from "../assets/COURSEHIVE.webp";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Smart Assistive Technology",
      description: "A powerful React Native app empowering blind and deaf users with a virtual Braille keyboard featuring vibration feedback for text input. Capture images to receive real-time descriptive feedback about surroundings, people, and emotions—connecting users with their environment through intelligent AI-powered assistance.",
      technologies: ["React Native"],
      image: brailleImg,
      githubUrl: "https://github.com/POOJAELANGO03/Smart-Assistive-Technology"
    },
    {
      id: 2,
      title: "InterviewForge",
      description: "An AI Interview Assistant and Resume Analyzer designed to help job seekers prepare for technical and behavioral interviews while optimizing their resumes using local AI. It leverages a locally running Large Language Model using Ollama (Gemma 2B) to generate questions, evaluate answers, and provide feedback.",
      technologies: ["React", "Gemma AI", "Restful API", "Firebase"],
      image: interviewforgeImg,
      githubUrl: "https://github.com/POOJAELANGO03/InterviewForge"
    },
    {
      id: 3,
      title: "SentimentIQ",
      description: "Transformer-based Sentiment & Emotion Analysis System Designed an AI-powered NLP system using BERT/RoBERTa models to detect emotions and sentiment from multilingual (Tanglish + English) text, with automated preprocessing, translation, and visualization.",
      technologies: ["Python", "Transformers", "PyTorch", "Pandas", "Matplotlib", "Seaborn"],
      image: sentimentImg,
      githubUrl: "https://github.com/POOJAELANGO03/SentimentIQ"
    },
    {
      id: 4,
      title: "Crowd-Intelligence-System",
      description: "An intelligent video analytics system that detects people, estimates crowd density, and analyzes gender demographics using YOLOv8 and DeepFace. It provides time-series insights, crowd-level classification, and API-based analytics for real-time monitoring and decision-making.",
      technologies: ["Python", "Transformers", "PyTorch", "Pandas", "Matplotlib", "Seaborn"],
      image: crowdImg,
      githubUrl: "https://github.com/POOJAELANGO03/Crowd-Intelligence-System"
    },
    {
      id: 5,
      title: "CourseHive",
      description: "A Flutter-based peer-to-peer course upload and learning platform developed as part of a 2nd-round interview task. The app allows trainers to upload structured video lessons, learners to browse/preview/unlock courses, and admins to monitor platform analytics.",
      technologies: ["Flutter", "Firebase", "Cloudinary"],
      image: coursehiveImg,
      githubUrl: "https://github.com/POOJAELANGO03/CourseHive"
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Things I’ve Shipped</h2>
        </div>

        <div className="projects-flex-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-wrapper hover-target">
                <div className="project-image-box">
                  <img src={project.image} alt={project.title} className="project-img" />
                </div>
                <div className="project-header-row">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-arrow">↗</span>
                </div>
              </a>
              <div className="project-info-box">
                <p className="project-description">{project.description}</p>
                <div className="project-tech-list">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="more-projects-wrapper">
          <a href="https://github.com/POOJAELANGO03" target="_blank" rel="noopener noreferrer" className="more-projects-btn hover-target">
            More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
