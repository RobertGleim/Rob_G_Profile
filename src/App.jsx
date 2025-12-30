import React, { useState } from 'react';
import './App.css';
import LiquidEther from './LiquidEther';
import Particles from './Particles';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  const toggleChatModal = () => {
    setIsChatModalOpen(!isChatModalOpen);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  const profileData = {
    name: "Robert Gleim",
    title: "Professional Profile",
    tagline: "Innovative professional with expertise in technology and business solutions",
    about: "Dedicated professional with a strong background in leveraging technology to drive business outcomes. Passionate about continuous learning and applying cutting-edge solutions to real-world challenges.",
    linkedin: "www.linkedin.com/in/robert-gleim",
    github: "https://github.com/RobertGleim",
    email: "contact@robertgleim.com",
    
    experience: [
      {
        title: "Professional Experience",
        company: "Various Organizations",
        period: "Career History",
        description: "Extensive experience in technology implementation, project management, and business development. Skilled in identifying opportunities and delivering innovative solutions that drive growth and efficiency."
      }
    ],
    
    skills: [
      "React & JavaScript",
      "Web Development",
      "Project Management",
      "Business Analysis",
      "AI & Automation",
      "n8n Workflows",
      "Problem Solving",
      "Technical Leadership"
    ],
    
    education: [
      {
        degree: "Professional Development",
        institution: "Continuous Learning",
        year: "Ongoing"
      }
    ]
  };

  return (
    <div className="App">
      {/* Particle Background */}
      <div className="particles-background">
        <Particles
          particleColors={['#60a5fa', '#93c5fd', '#1e40af']}
          particleCount={150}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Header Section */}
      <header className="header">
        <div className="liquid-ether-background">
          <LiquidEther
            colors={['#1e40af', '#60a5fa', '#93c5fd']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        <div className="container">
          <nav className="nav">
            <h1 className="logo">Full Stack Developer</h1>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="hero">
            <div className="profile-picture-container">
              <div className="profile-picture">
                <img src="/robertgleim.png" alt="Robert Gleim" />
              </div>
            </div>
            <h2 className="hero-title">{profileData.name}</h2>
            <p className="hero-tagline">{profileData.tagline}</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href={`https://${profileData.linkedin}`} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
            </div>
            <div className="certification-badges">
              <img src="/certbadge.png" alt="Full-Stack Software Engineering Certificate" className="badge" />
              <img src="/frontendbadge.png" alt="Frontend Specialist Certificate" className="badge" />
              <img src="/backendbadge.png" alt="Backend Specialist Certificate" className="badge" />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">{profileData.about}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-grid">
            {profileData.experience.map((exp, index) => (
              <div key={index} className="experience-card">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-meta">
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-grid">
            {profileData.skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">LinkedIn:</span>
                <a href={`https://${profileData.linkedin}`} target="_blank" rel="noopener noreferrer">
                  {profileData.linkedin}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">GitHub:</span>
                <a href={profileData.github} target="_blank" rel="noopener noreferrer">
                  {profileData.github}
                </a>
              </div>
              <button onClick={toggleChatModal} className="btn btn-primary chat-launch-btn">
                🤖 Open AI Chat Assistant
              </button>
            </div>
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Your message..."
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-submit">Send Message</button>
                {formStatus && <p className="form-status">{formStatus}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Modal */}
      {isChatModalOpen && (
        <>
          <div className="modal-overlay" onClick={toggleChatModal}></div>
          <div className="chat-modal">
            <div className="chat-modal-header">
              <h3>🤖 AI Chat Assistant</h3>
              <button onClick={toggleChatModal} className="close-modal-btn">&times;</button>
            </div>
            <div className="chat-modal-body">
              <div className="chat-placeholder-content">
                <p className="chat-placeholder-text">AI Chat Assistant</p>
                <p className="chat-placeholder-subtext">Powered by n8n automation</p>
                <div className="chat-info">
                  <p>This is where your n8n-powered AI chat agent will be integrated.</p>
                  <p>You can embed your chat widget here by adding the n8n webhook URL and chat interface.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Floating Chat Button */}
      <button onClick={toggleChatModal} className="floating-chat-btn" aria-label="Open chat">
        💬
      </button>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
