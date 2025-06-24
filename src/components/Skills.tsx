import React from 'react';
import './Skills.css';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', level: 95, category: 'frontend', icon: 'react' },
    { name: 'TypeScript', level: 90, category: 'frontend', icon: 'typescript' },
    { name: 'JavaScript', level: 95, category: 'frontend', icon: 'javascript' },
    { name: 'HTML/CSS', level: 98, category: 'frontend', icon: 'html' },
    { name: 'Sass/SCSS', level: 85, category: 'frontend', icon: 'sass' },
    { name: 'Node.js', level: 88, category: 'backend', icon: 'nodejs' },
    { name: 'Python', level: 82, category: 'backend', icon: 'python' },
    { name: 'MongoDB', level: 80, category: 'backend', icon: 'mongodb' },
    { name: 'PostgreSQL', level: 85, category: 'backend', icon: 'postgresql' },
    { name: 'Figma', level: 92, category: 'design', icon: 'figma' },
    { name: 'Adobe XD', level: 88, category: 'design', icon: 'xd' },
    { name: 'Photoshop', level: 85, category: 'design', icon: 'photoshop' }
  ];

  const categories = [
    { id: 'frontend', label: 'Frontend Development', color: 'var(--lavender)' },
    { id: 'backend', label: 'Backend Development', color: 'var(--lavender-light)' },
    { id: 'design', label: 'Design Tools', color: 'var(--lavender-dark)' }
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-gradient">Skills & Technologies</h2>
          <p className="section-subtitle">
            My technical expertise and creative tools
          </p>
        </div>

        <div className="skills-content">
          {categories.map(category => (
            <div key={category.id} className="skill-category">
              <h3 className="category-title" style={{ color: category.color }}>
                {category.label}
              </h3>
              <div className="skills-grid">
                {skills
                  .filter(skill => skill.category === category.id)
                  .map(skill => (
                    <div key={skill.name} className="skill-item glass">
                      <div className="skill-header">
                        <div className="skill-icon">
                          <div className="icon-placeholder">
                            {skill.name.charAt(0)}
                          </div>
                        </div>
                        <div className="skill-info">
                          <h4 className="skill-name">{skill.name}</h4>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className="skill-progress-bar"
                          style={{ 
                            width: `${skill.level}%`,
                            background: category.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3 className="additional-title">Additional Expertise</h3>
          <div className="expertise-grid">
            <div className="expertise-card glass">
              <div className="expertise-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h4>Web Technologies</h4>
              <p>REST APIs, GraphQL, Progressive Web Apps, Responsive Design</p>
            </div>
            <div className="expertise-card glass">
              <div className="expertise-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                </svg>
              </div>
              <h4>Development Tools</h4>
              <p>Git, Docker, Webpack, CI/CD, Testing Frameworks, Agile Methodology</p>
            </div>
            <div className="expertise-card glass">
              <div className="expertise-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4>Design Systems</h4>
              <p>Component Libraries, Brand Guidelines, Accessibility, User Research</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;