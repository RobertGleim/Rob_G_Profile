import React, { useState } from 'react';
import './App.css';
import LiquidEther from './LiquidEther';
import Particles from './Particles';

function App() {
  const profilePic = '/robertgleim.png';
  
  // Webhook URLs - toggle testMode to switch between production and test
  const testMode = true; // Set to true to use test webhook
  const webhookUrls = {
    production: 'https://robert-gleim.app.n8n.cloud/webhook/ed5ba3bd-d6d2-4f64-bb67-c57a156e4d54',
    test: 'https://robert-gleim.app.n8n.cloud/webhook-test/ed5ba3bd-d6d2-4f64-bb67-c57a156e4d54'
  };
  const activeWebhook = testMode ? webhookUrls.test : webhookUrls.production;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);

  const toggleChatModal = () => {
    setIsChatModalOpen(!isChatModalOpen);
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = { role: 'user', content: chatInput };
    const messageToSend = chatInput; // Store the message before clearing
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput(''); // Clear input after storing
    setIsChatLoading(true);

    console.log('Sending to webhook:', activeWebhook);
    console.log('Message payload:', { message: messageToSend });

    try {
      const response = await fetch(activeWebhook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageToSend })
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        const data = await response.json();
        console.log('Response data:', data);
        // Handle different response formats
        const responseText = data.message || data.response || data.answer || data.output || data.text || JSON.stringify(data);
        const assistantMessage = { role: 'assistant', content: responseText };
        setChatMessages(prev => [...prev, assistantMessage]);
      } else {
        console.error('Response not ok:', response.status, response.statusText);
        const errorMessage = { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' };
        setChatMessages(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' };
      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send data to n8n webhook
      const response = await fetch(activeWebhook, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setFormStatus('Failed to send message. Please try again.');
      console.error('Error sending message:', error);
    }
    
    setTimeout(() => setFormStatus(''), 3000);
  };

  const profileData = {
    name: "Robert Gleim",
    title: "Professional Profile",
    tagline: "Full Stack Developer passionate about building scalable, user-focused web solutions that drive business values.",
    about: "Dedicated professional with a strong background in leveraging technology to drive business outcomes. Passionate about continuous learning and applying cutting-edge solutions to real-world challenges.",
    linkedin: "www.linkedin.com/in/robert-gleim",
    github: "https://github.com/RobertGleim",
    email: "Rgleim0603@gmail.com",
    
    experience: [
      {
        title: "Professional Experience",
        company: "Various Organizations",
        period: "Career History",
        description: "Experienced software developer with expertise in Flask, React, SQL, and Python. Proven ability to deliver responsive web applications, manage cross-functional teams, and solve complex problems. Adept at project management, process improvement, and adapting to fast-paced environments."
      },
      {
        title: "Software Engineer",
        company: "Coding Temple",
        period: "Jun 2025 – Dec 2025",
        description: "• Developed full stack projects using React, Flask, Python, and SQL, demonstrating modern coding principles and best practices.\n• Created responsive web applications, integrating third-party APIs and adapting quickly to new technologies.\n• Consistently met deadlines and delivered high-quality solutions in a collaborative environment."
      },
      {
        title: "Maintenance Manager",
        company: "Lane Enterprises",
        period: "Apr 2019 – May 2025",
        description: "• Led process optimization initiatives, analyzing system failures and designing data-driven solutions that improved reliability and efficiency.\n• Developed structured procedures and documentation, reducing error rates and enabling knowledge transfer.\n• Collaborated with leadership, vendors, and technical teams to deliver scalable solutions while balancing performance, cost, and user experience.\n• Managed multiple concurrent projects, prioritized tasks, and mentored team members, resulting in increased productivity and adoption of new tools."
      },
      {
        title: "Maintenance Supervisor",
        company: "Lane Enterprises",
        description: "• Promoted and helped define roles in the plant like operation leaders, as well as helped transition the production supervisor into his new position.\n• Maintained all repairs of facility while consistently looking for ways to improve and implementing any new procedures or product improvements.\n• Oversaw and installed a new production line to run small size pipe, including running water and vacuum pipes from the pump room."
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
      "Technical Leadership",
      "HTML5 & CSS3",
      "Flask & Python",
      "SQL & Databases",
      "API Integration",
      
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
          
          <div className="about-details">
            <div className="about-detail-card">
              <h3 className="about-detail-title">Education & Certifications</h3>
              <ul className="about-detail-list">
                <li>Coding Temple, Certificate – Software Engineering</li>
                <li>Womack Hydraulics Training, Troubleshooting & Repairs</li>
              </ul>
            </div>
            
            <div className="about-detail-card">
              <h3 className="about-detail-title">Additional Information</h3>
              <ul className="about-detail-list">
                <li><strong>Testing:</strong> pytest, unittest</li>
                <li><strong>Soft Skills:</strong> Strong communication, leadership, and adaptability</li>
              </ul>
            </div>
          </div>
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
              <div className="chat-messages">
                {chatMessages.length === 0 ? (
                  <div className="chat-placeholder-content">
                    <p className="chat-placeholder-text">AI Chat Assistant</p>
                    <p className="chat-placeholder-subtext">Powered by n8n automation</p>
                    <p>Start a conversation by typing a message below.</p>
                  </div>
                ) : (
                  chatMessages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.role}`}>
                      {msg.role === 'assistant' && (
                        <img src={profilePic} alt="AI Avatar" className="chat-avatar" />
                      )}
                      <div className="message-content">{msg.content}</div>
                    </div>
                  ))
                )}
                {isChatLoading && (
                  <div className="chat-message assistant">
                    <img src={profilePic} alt="AI Avatar" className="chat-avatar" />
                    <div className="message-content">Typing...</div>
                  </div>
                )}
              </div>
              <form onSubmit={handleChatSubmit} className="chat-input-form">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your message..."
                  className="chat-input"
                  disabled={isChatLoading}
                />
                <button type="submit" className="chat-send-btn" disabled={isChatLoading || !chatInput.trim()}>
                  Send
                </button>
              </form>
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
