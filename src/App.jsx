import React, { useState, useEffect } from 'react';
import './index.css';

const NeetNodeLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'solutions', 'process', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="neetnode-landing">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('hero')}>
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#006A4E"/>
                <path d="M10 16L14 20L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>NeetNode</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
            <a 
              href="#solutions" 
              className={activeSection === 'solutions' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }}
            >
              Solutions
            </a>
            <a 
              href="#process" 
              className={activeSection === 'process' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}
            >
              Our Process
            </a>
            <a 
              href="#testimonials" 
              className={activeSection === 'testimonials' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </div>
          
          <button 
            className="cta-button"
            onClick={() => scrollToSection('contact')}
          >
            Get Started
          </button>
          
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>AI-Powered Technology & Marketing Solutions</h1>
          <p className="hero-subtitle">
            Transforming businesses with 70% AI precision and 30% human expertise
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">70%</span>
              <span className="stat-label">AI Automation</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30%</span>
              <span className="stat-label">Human Expertise</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="primary-button" onClick={() => scrollToSection('solutions')}>
              Explore Solutions
            </button>
            <button className="secondary-button" onClick={() => scrollToSection('contact')}>
              Schedule Demo
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="ai-visual">
            <div className="ai-node ai-node-1"></div>
            <div className="ai-node ai-node-2"></div>
            <div className="ai-node ai-node-3"></div>
            <div className="ai-node ai-node-4"></div>
            <div className="ai-node ai-node-5"></div>
            <div className="ai-connection"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>About NeetNode</h2>
            <p className="section-subtitle">Where AI meets human ingenuity</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                NeetNode is at the forefront of technological innovation, delivering cutting-edge 
                solutions that blend artificial intelligence with human expertise. Our unique approach 
                leverages AI for efficiency and scalability while maintaining the critical human touch 
                for creativity and strategic thinking.
              </p>
              <p>
                With 70% of our processes powered by advanced AI algorithms and 30% guided by experienced 
                professionals, we deliver solutions that are both intelligent and insightful. This balanced 
                methodology ensures optimal results for our clients across various industries.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">⚡</div>
                  <div>
                    <h4>AI Efficiency</h4>
                    <p>Automated processes that save time and reduce costs</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🧠</div>
                  <div>
                    <h4>Human Insight</h4>
                    <p>Strategic guidance from industry experts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-container">
                <div className="ai-human-balance">
                  <div className="ai-side">
                    <div className="ai-circuit"></div>
                    <div className="ai-circuit"></div>
                    <div className="ai-circuit"></div>
                  </div>
                  <div className="balance-line"></div>
                  <div className="human-side">
                    <div className="human-icon">👤</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="solutions-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Solutions</h2>
            <p className="section-subtitle">AI-driven services tailored to your needs</p>
          </div>
          
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon" style={{backgroundColor: '#6699CC'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3L2 12H5V20H19V12H22L12 3Z" stroke="#00356B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>AI Marketing Automation</h3>
              <p>Intelligent campaigns that adapt in real-time to maximize ROI and engagement.</p>
            </div>
            
            <div className="solution-card">
              <div className="solution-icon" style={{backgroundColor: '#40a829'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00356B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="#00356B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="#00356B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Predictive Analytics</h3>
              <p>Forecast trends and behaviors with our advanced AI models for smarter decisions.</p>
            </div>
            
            <div className="solution-card">
              <div className="solution-icon" style={{backgroundColor: '#006A4E'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M2 3H8C9.10457 3 10 3.89543 10 5V21C10 21.5523 9.55228 22 9 22H3C2.44772 22 2 21.5523 2 21V3Z" stroke="#00356B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 3H16C14.8954 3 14 3.89543 14 5V21C14 21.5523 14.4477 22 15 22H21C21.5523 22 22 21.5523 22 21V3Z" stroke="#00356B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Intelligent CRM</h3>
              <p>AI-enhanced customer relationship management for personalized experiences.</p>
            </div>
            
            <div className="solution-card">
              <div className="solution-icon" style={{backgroundColor: '#6699CC'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00356B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="#00356B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="#00356B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>AI Content Creation</h3>
              <p>Generate high-quality, on-brand content at scale with human refinement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p className="section-subtitle">The perfect blend of AI and human collaboration</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>AI analyzes your business needs while our experts conduct strategic interviews.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>AI Implementation</h3>
              <p>Our algorithms are deployed to automate processes and gather insights.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Human Refinement</h3>
              <p>Experts interpret AI findings and apply strategic human intelligence.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Optimization</h3>
              <p>Continuous AI learning combined with human oversight for peak performance.</p>
            </div>
          </div>
          
          <div className="process-diagram">
            <div className="ai-circle">
              <span>AI</span>
              <div className="ai-lines">
                <div className="ai-line"></div>
                <div className="ai-line"></div>
                <div className="ai-line"></div>
              </div>
            </div>
            <div className="human-circle">
              <span>Human</span>
              <div className="human-lines">
                <div className="human-line"></div>
                <div className="human-line"></div>
                <div className="human-line"></div>
              </div>
            </div>
            <div className="synergy-circle">
              <span>Synergy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>Client Success Stories</h2>
            <p className="section-subtitle">Real results from our AI-human approach</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"NeetNode's AI-powered marketing solution increased our conversion rate by 42% in just three months. The human oversight ensured our brand voice remained consistent."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div>
                  <h4>Jane Doe</h4>
                  <p>Marketing Director, TechCorp</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The predictive analytics from NeetNode helped us reduce inventory costs by 28% while maintaining 99.8% fulfillment rates. Their hybrid approach is revolutionary."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">RS</div>
                <div>
                  <h4>Robert Smith</h4>
                  <p>COO, Retail Solutions Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Get Started Today</h2>
            <p className="section-subtitle">Transform your business with our AI-human solutions</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Ready to innovate?</h3>
              <p>Contact us to schedule a personalized demo and discover how NeetNode can transform your business operations.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6Z" stroke="#006A4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="#006A4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>hello@neetnode.com</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92" stroke="#006A4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 12V14.08C22 14.76 21.78 15.41 21.39 15.9C20.63 16.85 19.37 16.85 18.61 15.9C18.22 15.41 18 14.76 18 14.08V12" stroke="#006A4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 8V10.08C22 10.76 21.78 11.41 21.39 11.9C20.63 12.85 19.37 12.85 18.61 11.9C18.22 11.41 18 10.76 18 10.08V8" stroke="#006A4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4V6.08C22 6.76 21.78 7.41 21.39 7.9C20.63 8.85 19.37 8.85 18.61 7.9C18.22 7.41 18 6.76 18 6.08V4" stroke="#006A4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 12H2" stroke="#006A4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 8H2" stroke="#006A4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 4H2" stroke="#006A4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Select Service</option>
                    <option value="marketing">AI Marketing Automation</option>
                    <option value="analytics">Predictive Analytics</option>
                    <option value="crm">Intelligent CRM</option>
                    <option value="content">AI Content Creation</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Tell us about your project" rows="4" required></textarea>
                </div>
                <button type="submit" className="primary-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" fill="#006A4E"/>
                  <path d="M10 16L14 20L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>NeetNode</span>
            </div>
            <div className="footer-links">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
              <a href="#solutions" onClick={(e) => { e.preventDefault(); scrollToSection('solutions'); }}>Solutions</a>
              <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Process</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Twitter">tw</a>
              <a href="#" aria-label="Facebook">fb</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} NeetNode. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NeetNodeLanding;