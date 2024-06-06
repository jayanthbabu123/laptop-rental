// src/components/LandingPage.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CountUp from 'react-countup';

const LandingPage = () => {
  const [rentCount, setRentCount] = useState(0);

  useEffect(() => {
    // Simulate an API call to get the number of laptops rented
    setTimeout(() => {
      setRentCount(150); // Example count, replace with actual API call
    }, 1000);
  }, []);

  return (
    <>
      <header className="bg-primary text-white text-center py-5">
        <Container>
          <h1>Welcome to Laptop Rental</h1>
          <p className="lead">Rent the latest laptops at affordable prices</p>
          <Button variant="light" size="lg">Get Started</Button>
        </Container>
      </header>

      <section id="how-it-works" className="py-5">
        <Container>
          <h2 className="text-center">How It Works</h2>
          <Row className="text-center mt-4">
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Choose a Laptop</Card.Title>
                  <Card.Text>Browse our wide selection of laptops and choose the one that suits your needs.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Book Online</Card.Title>
                  <Card.Text>Book your laptop online with a few simple clicks.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Get it Delivered</Card.Title>
                  <Card.Text>Get your laptop delivered to your doorstep quickly and conveniently.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="benefits" className="bg-light py-5">
        <Container>
          <h2 className="text-center">Benefits of Renting</h2>
          <Row className="text-center mt-4">
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Cost-Effective</Card.Title>
                  <Card.Text>Save money by renting instead of buying.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Latest Models</Card.Title>
                  <Card.Text>Access the latest and greatest laptops without the high cost.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Flexible Terms</Card.Title>
                  <Card.Text>Choose rental terms that fit your needs.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h2 className="text-center">Laptops Rented Till Now</h2>
          <Row className="justify-content-center">
            <Col md={4} className="text-center">
              <h3>
                <CountUp end={rentCount} duration={10} />
              </h3>
              <p>Laptops Rented</p>
            </Col>
          </Row>
        </Container>
      </section>

      <footer id="footer" className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>About Us</h5>
              <p>We provide the best laptop rental services to meet your needs.</p>
            </Col>
            <Col md={6} className="text-md-right">
              <h5>Contact Us</h5>
              <p>Email: support@laptoprental.com</p>
              <p>Phone: (123) 456-7890</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <p>&copy; {new Date().getFullYear()} Laptop Rental. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default LandingPage;
