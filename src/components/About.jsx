import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';

// LO2: Build a reusable component in Class form to display dynamic data
class About extends Component {
  constructor(props) {
    super(props);
    // Dynamic data in state
    this.state = {
      developerInfo: {
        name: 'Student Developer',
        course: 'FER202 - Front-End React',
        assignment: 'Custom React Web Application',
        role: 'Full Stack React Engineer'
      }
    };
  }

  render() {
    const { developerInfo } = this.state;

    return (
      <Container className="my-5">
        <Card className="shadow-lg border-0" style={{ 
            background: 'rgba(255, 255, 255, 0.8)', 
            backdropFilter: 'blur(16px)',
            borderRadius: '20px'
          }}>
          <Card.Body className="p-5 text-center">
            <h1 className="mb-4" style={{ color: '#0f172a', fontWeight: '800' }}>About This Application</h1>
            <p className="lead text-secondary mb-5">
              This application is built as part of the FER202 coursework to demonstrate proficiency in modern React development, fulfilling Learning Outcomes 1 through 8.
            </p>
            
            <div className="bg-light p-4 rounded-3 text-start mx-auto" style={{ maxWidth: '500px' }}>
              <h4 className="text-primary border-bottom pb-2 mb-3">Developer Details</h4>
              <p><strong>Name:</strong> {developerInfo.name}</p>
              <p><strong>Course:</strong> {developerInfo.course}</p>
              <p><strong>Assignment:</strong> {developerInfo.assignment}</p>
              <p><strong>Role:</strong> {developerInfo.role}</p>
            </div>
            
            <div className="mt-5 text-muted small">
              <p>Built with React, React Router, Redux Toolkit, and React-Bootstrap.</p>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default About;
