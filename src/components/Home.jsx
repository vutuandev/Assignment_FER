import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container" style={{ padding: '40px 0' }}>
      <Container>
        <div className="text-center mb-5 p-5 bg-white rounded shadow-sm" style={{ 
            background: 'rgba(255, 255, 255, 0.7)', 
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: '20px'
          }}>
          <h1 className="display-4 font-weight-bold text-primary mb-3" style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Welcome to Premium Laptops</h1>
          <p className="lead text-secondary mb-4">
            Discover the best high-performance laptops for gaming, programming, and everyday use.
          </p>
          <Link to="/feature">
            <Button variant="primary" size="lg" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', border: 'none', borderRadius: '50px', padding: '12px 30px' }}>
              Explore Products
            </Button>
          </Link>
        </div>

        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm" style={{ borderRadius: '15px', border: 'none' }}>
              <Card.Body className="text-center p-4">
                <h3 className="mb-3 text-info">Fast Performance</h3>
                <Card.Text className="text-muted">
                  We offer devices equipped with the latest processors to handle all your demanding tasks with ease.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm" style={{ borderRadius: '15px', border: 'none' }}>
              <Card.Body className="text-center p-4">
                <h3 className="mb-3 text-info">Sleek Design</h3>
                <Card.Text className="text-muted">
                  Ultra-thin, lightweight, and built with premium materials for a modern aesthetic.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm" style={{ borderRadius: '15px', border: 'none' }}>
              <Card.Body className="text-center p-4">
                <h3 className="mb-3 text-info">Great Value</h3>
                <Card.Text className="text-muted">
                  Get the best bang for your buck with our constantly updated competitive pricing.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
