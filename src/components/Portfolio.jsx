import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap'; // Import necessary components from React-Bootstrap
import designimg from '../assets/images/ui.jpg';
import designimg1 from '../assets/images/ux.jpg';
import brandimg from '../assets/images/brand.jpg';
import iosimg from '../assets/images/ios.jpg';


function Portfolio() {
  return (
    <section className="portfolio" id='portfolio'>
      <Container>
        <h2 className="portfolio-title">Our Work</h2>

       
        <Carousel interval={null} indicators={false}>
          
          <Carousel.Item>
            <div className="project-cards">
    
              <div className="project-card">
                <img src={designimg} alt="Project 1" className="project-image" />
                <div className="project-details">
                  <h3 className="project-title">Login & Registration Design</h3>
                  <p className="project-description">Login & Register Screen (UI/UX Design) Creative & Modern UI design of landing page for Login & Register.</p>
                  <Button variant="primary" className="view-project-btn">View Project</Button>
                </div>
              </div>
             
              <div className="project-card">
                <img src={designimg1} alt="Project 2" className="project-image" />
                <div className="project-details">
                  <h3 className="project-title">Project Management Mobile Application UI Design</h3>
                  <p className="project-description">We will design a professional UI/UX, prototype, and wireframe for Android, iOS, and web using proper Apple and Google guidelines. </p>
                  <Button variant="primary" className="view-project-btn">View Project</Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="project-cards">
              
              <div className="project-card">
                <img src={brandimg} alt="Project 1" className="project-image" />
                <div className="project-details">
                  <h3 className="project-title">Branding</h3>
                  <p className="project-description">Branding (UI/UX Design) Creative & Modern UI design of landing page for Login & Register.</p>
                  <Button variant="primary" className="view-project-btn">View Project</Button>
                </div>
              </div>
             
              <div className="project-card">
                <img src={iosimg} alt="Project 2" className="project-image" />
                <div className="project-details">
                  <h3 className="project-title">App Development </h3>
                  <p className="project-description">Make application using ios </p>
                  <Button variant="primary" className="view-project-btn">View Project</Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          
        </Carousel>

      
        <div className="cta">
          <p className="cta-text">Ready to start your project?</p>
          <a href="#contacts" className="btn btn-primary contact">Contact us</a>  
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;
