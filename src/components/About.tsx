import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.css';
import pubCert from '../assets/PUBLICATION CERTIFICATE.pdf';
import twinCert from '../assets/TWIN COMPLETTION CERTIFICATE.pdf';
import cubeCert from '../assets/CUBE INTERN CERTIFICATE.pdf';
import sqlCert from '../assets/SQL CERTIFICATE.pdf';
import deloitteCert from '../assets/DELOITTE CERTIFICATION.pdf';

// Icons
import expressIcon from '../assets/icons/Express.png';
import githubIcon from '../assets/icons/GITHUB.png';
import mongoIcon from '../assets/icons/MongoDB.png';
import postgresIcon from '../assets/icons/PostgreSQL.png';
import firebaseIcon from '../assets/icons/firebase.png';
import flutterIcon from '../assets/icons/flutter.png';
import javaIcon from '../assets/icons/java.png';
import jiraIcon from '../assets/icons/jira.svg';
import nodeIcon from '../assets/icons/node.png';
import pythonIcon from '../assets/icons/python.png';
import reactIcon from '../assets/icons/react.svg';
import supabaseIcon from '../assets/icons/supabase.png';

const techStack = [
  { name: 'React', icon: reactIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Express', icon: expressIcon },
  { name: 'Flutter', icon: flutterIcon },
  { name: 'Java', icon: javaIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'Firebase', icon: firebaseIcon },
  { name: 'MongoDB', icon: mongoIcon },
  { name: 'PostgreSQL', icon: postgresIcon },
  { name: 'Supabase', icon: supabaseIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'Jira', icon: jiraIcon },
];

const aiStack = [
  "TensorFlow", "Keras", "CNN", "VGG-16", "Inception v3", "YOLO-v3", "OpenCV", "DeepFace", "InsightFace"
];

const education = [
  {
    year: "2024 – 2026",
    degree: "MCA at Kongu Engineering College",
    details: "CGPA: 8.86/10"
  },
  {
    year: "2021 – 2024",
    degree: "BCA at Vellalar College for Women",
    details: "CGPA: 7.64/10"
  },
  {
    year: "2020 – 2021",
    degree: "HSC at Vidyaa Vikas Girls Matric Hr. Sec. School",
    details: "Percent: 83%"
  },
  {
    year: "2018 – 2019",
    degree: "SSLC at Vidyaa Vikas Girls Matric Hr. Sec. School",
    details: "Percent: 83%"
  }
];

const experience = [
  {
    period: "December 2025 – April 2026",
    role: "Mobile Application Developer",
    company: "ZenThink Technologies Pvt. Ltd.",
    type: "INTERNSHIP",
    desc: [
      "Developing a real-time Flutter application integrated with Supabase backend services, focusing on production-ready features and Jira-based workflows.",
      "Building a cross-platform pharmacy management ecosystem to automate sales, inventory, and administration on a scalable monorepo architecture.",
      "Gaining hands-on experience in relational schemas, role-based data access, and real-time updates for scalable mobile apps."
    ]
  },
  {
    period: "August 2025 – November 2025",
    role: "Mobile Application Developer",
    company: "Twincord Technologies Pvt. Ltd.",
    type: "INTERNSHIP (3 Months)",
    desc: [
      "Worked on a real-time Flutter project involving role-based modules (User, Owner, Admin).",
      "Integrated key features like geolocation, Firebase Storage, and Razorpay payments.",
      "Strengthened understanding of Flutter architectures and state management."
    ],
    certificate: twinCert
  },
  {
    period: "June 2025 – August 2025",
    role: "App Developer – Flutter",
    company: "Cube AI Solutions",
    type: "INTERNSHIP (2 Months)",
    desc: [
      "Self-learned key Flutter development concepts to independently build a functional product model.",
      "Developed and presented a working product prototype to the client, securing confirmation for further development."
    ],
    certificate: cubeCert
  }
];

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      
      {/* ABOUT ME SECTION */}
      <section className="about-section">
        <motion.div 
          className="watermark-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="watermark-bg">POOJA</h1>
          <h2 className="watermark-fg">About Me</h2>
        </motion.div>
        
        <motion.div 
          className="section-content about-text-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <p>Hello!</p>
          <p>
            My name is Pooja, a recent postgraduate in Computer Applications from Kongu Engineering College, Erode. Currently, I am kneeling down to the Dart side and an AI enthusiast.
          </p>
        </motion.div>
      </section>

      {/* TECH SECTION */}
      <section className="about-section">
        <motion.div 
          className="watermark-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="watermark-bg">TECH STACK</h1>
          <h2 className="watermark-fg">Tech I'm familiar with</h2>
        </motion.div>
        
        <motion.div 
          className="section-content tech-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <div className="modern-tech-grid">
            {techStack.map((tech, i) => (
               <motion.div 
                 className="modern-tech-card hover-target" 
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ delay: i * 0.05, type: "spring", stiffness: 120 }}
               >
                 <img 
                   src={tech.icon} 
                   alt={tech.name} 
                   style={tech.name === 'PostgreSQL' ? { width: '75px', height: '75px' } : {}}
                 />
                 <span>{tech.name}</span>
               </motion.div>
            ))}
          </div>

          <div className="modern-ai-stack">
            <h3>AI/ML & DEEP LEARNING</h3>
            <div className="modern-ai-tags">
              {aiStack.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="modern-ai-tag hover-target"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="about-section">
        <motion.div 
          className="watermark-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="watermark-bg">ACADEMICS</h1>
          <h2 className="watermark-fg">Education</h2>
        </motion.div>
        
        <div className="section-content">
          <div className="modern-timeline">
            {education.map((edu, index) => (
              <motion.div 
                className="modern-timeline-item" 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              >
                <div className="modern-timeline-dot"></div>
                <div className="modern-timeline-card hover-target">
                  <div className="modern-timeline-year">{edu.year}</div>
                  <h3 className="modern-timeline-degree">{edu.degree}</h3>
                  <p className="modern-timeline-details">{edu.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="about-section">
        <motion.div 
          className="watermark-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="watermark-bg">PROFILE</h1>
          <h2 className="watermark-fg">Experience</h2>
        </motion.div>
        
        <div className="section-content list-container">
          {experience.map((exp, index) => (
            <motion.div 
              className="traditional-exp-item" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="traditional-exp-role">{exp.role}</h3>
              <h4 className="traditional-exp-company">{exp.company}</h4>
              <p className="traditional-exp-date">{exp.period}</p>
              {Array.isArray(exp.desc) ? (
                <ul className="traditional-exp-bullets">
                  {exp.desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="traditional-exp-bullets-text">{exp.desc}</p>
              )}
              {exp.certificate && (
                <div style={{ marginTop: '15px' }}>
                  <a 
                    href={exp.certificate} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="pub-link hover-target"
                    style={{ padding: '8px 20px', fontSize: '0.95rem' }}
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PUBLICATION-RESEARCH SECTION */}
      <section className="about-section">
        <motion.div 
          className="watermark-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="watermark-bg">RESEARCH</h1>
          <h2 className="watermark-fg">Publication</h2>
        </motion.div>
        
        <motion.div 
          className="section-content pub-text-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <div className="pub-card hover-target">
            <h3 className="pub-title">Contextual Sentiment Analysis Using Transformer-Based Models</h3>
            <h4 className="pub-conference">Paper Presentation — International Conference on Electronics and Renewable Systems (ICEARS)</h4>
            <p className="pub-desc">
              Presented a research paper on analyzing Tanglish chat messages using a Transformer-based NLP model (BERT) to detect emotions such as joy, anger, sadness, and fear.
            </p>
            <div className="pub-links">
              <a href="https://github.com/POOJAELANGO03/SentimentIQ" target="_blank" rel="noopener noreferrer" className="pub-link hover-target">
                View on GitHub
              </a>
              <a href={pubCert} target="_blank" rel="noopener noreferrer" className="pub-link hover-target">
                Publication Certificate
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section className="about-section">
        <motion.div 
          className="watermark-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="watermark-bg">ACCOLADES</h1>
          <h2 className="watermark-fg">Certifications</h2>
        </motion.div>
        
        <motion.div 
          className="section-content list-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          {/* Oracle Certification Card */}
          <div className="traditional-exp-item" style={{ marginBottom: '50px' }}>
            <h3 className="traditional-exp-role">Oracle Certified Associate (OCA) — MySQL Implementation</h3>
            <h4 className="traditional-exp-company">Oracle University</h4>
            <p className="traditional-exp-date">July 2025</p>
            <div style={{ marginTop: '15px' }}>
              <a 
                href={sqlCert} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="pub-link hover-target"
                style={{ padding: '8px 20px', fontSize: '0.95rem' }}
              >
                View Oracle Certificate
              </a>
            </div>
          </div>

          {/* Deloitte Certification Card */}
          <div className="traditional-exp-item">
            <h3 className="traditional-exp-role">Deloitte Technology Job Simulation — Coding & Development</h3>
            <h4 className="traditional-exp-company">Deloitte</h4>
            <p className="traditional-exp-date">July 2025</p>
            <div style={{ marginTop: '15px' }}>
              <a 
                href={deloitteCert} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="pub-link hover-target"
                style={{ padding: '8px 20px', fontSize: '0.95rem' }}
              >
                View Deloitte Certificate
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Inspired By Footnote */}
      <div className="inspired-by-footer">
        <p>
          Website inspired from{' '}
          <a href="https://github.com/adamsyy" target="_blank" rel="noopener noreferrer" className="hover-target inspired-link">
            adamsyy
          </a>{' '}
          🎉 ☕
        </p>
      </div>

    </div>
  );
};

export default About;
