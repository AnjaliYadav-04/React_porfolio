import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const sections = {
    about: {
      title: "About Me",
      content: (
        <div className="section-content">
          <h2>Anjali Yadav</h2>
          <p className="tagline">BSc IT Graduate | Freshers</p>
          <p>
            Motivated BSc IT student with a strong foundation in programming and IT concepts, 
            seeking full-time software development opportunities. Skilled in problem-solving 
            and quick adaptability, I aim to drive innovation and make a meaningful impact 
            in a forward-thinking organization.
          </p>
          <div className="contact-info">
            <p><i className="fas fa-map-marker-alt"></i> Thane, India</p>
            <p><i className="fas fa-envelope"></i> anjalisydv@gmail.com</p>
            <p><i className="fas fa-phone"></i> 9987483478</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/anjali-yadav-6a6527198" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/AnjaliYadav-04" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
        </div>
      )
    },
    education: {
      title: "Education",
      content: (
        <div className="section-content">
          <div className="education-item">
            <h3>K.B College of Commerce for Women</h3>
            <p>Bachelor of Science (Information Technology)</p>
            <p>CGPA: 9.2 | 07/2022 - 04/2023</p>
          </div>
          <div className="education-item">
            <h3>Mulund College of Commerce</h3>
            <p>Bachelor of Science (Information Technology)</p>
            <p>CGPA: 9.2 | 06/2023 - 04/2025</p>
          </div>
          <div className="education-item">
            <h3>Sarvodaya Public School</h3>
            <p>SSC: CGPA 8.4 | HSC: CGPA 8.3</p>
          </div>
        </div>
      )
    },
    skills: {
      title: "Skills",
      content: (
        <div className="skills-grid">
          {['Java', 'Python', 'Data Structures', 'HTML/CSS', 'JavaScript', 
            'Node.js', 'MongoDB', 'Flutter', 'Git/GitHub'].map((skill) => (
            <div key={skill} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      )
    },
    projects: {
      title: "Projects",
      content: (
        <div className="projects-list">
          <div className="project-item">
            <h3>Myntra Clone</h3>
            <p>Developed a dynamic e-commerce platform mimicking Myntra's functionality</p>
            <p><strong>Technologies:</strong> HTML, CSS, JavaScript</p>
          </div>
          <div className="project-item">
            <h3>Learning Course App</h3>
            <p>E-Learning application with various course options (ongoing)</p>
            <p><strong>Technologies:</strong> Java, Android Studio</p>
          </div>
        </div>
      )
    },
    experience: {
      title: "Experience",
      content: (
        <div className="experience-item">
          <h3>Python Developer Intern</h3>
          <p>At Codesoft | 09/2024 - 10/2024</p>
        </div>
      )
    }
  };

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Anjali Yadav</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </header>

      <nav>
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={activeSection === section ? 'active' : ''}
          >
            {sections[section].title}
          </button>
        ))}
      </nav>

      <main>
        <div className="resume-container">
          <h2>{sections[activeSection].title}</h2>
          {sections[activeSection].content}
        </div>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Anjali Yadav - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;