import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './TerceraSeccion.css'; // Asegúrate de que la ruta sea correcta

function TerceraSeccion({ title, subtitle, imageUrl, buttonText, onButtonClick }) {
  return (
    <section className="tercera-seccion">
      <Container fluid>
        <Row className="tercera-row">
          <Col md={6} className="text-column">
            <h1 className="tercera-title">{title}</h1>
            <p className="tercera-subtitle">{subtitle}</p>
          </Col>
          <Col md={6} className="image-column">
            <img src={imageUrl} alt="Tercera Seccion" className="tercera-image" />
          </Col>
        </Row>
        <div className="floating-button">
          <Button variant="light" className="tercera-button" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      </Container>
    </section>
  );
}

TerceraSeccion.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func
};

TerceraSeccion.defaultProps = {
  onButtonClick: () => {}
};

export default TerceraSeccion;
