import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css'; // Importa los estilos para HeroSection

function HeroSection() {
  return (
    <section className="hero-section">
      <Container fluid>
        <Row className="hero-row">
          <Col md={6} className="text-column">
            <h1 className="hero-title">Welcome to Our Landing Page</h1>
            <p className="hero-subtitle">Your success starts here</p>
          </Col>
          <Col md={6} className="image-column">
            <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="Hero" className="hero-image" />
          </Col>
        </Row>
        <div className="floating-button">
          <Button variant="light" className="hero-button">Call Us!</Button>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
