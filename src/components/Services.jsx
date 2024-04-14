import React from 'react';
import 'remixicon/fonts/remixicon.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import devimg from '../assets/images/dev.jpg';
import marketimg from '../assets/images/market.jpg';
import designimg from '../assets/images/ux ui.jpg';

function Services() {
    return ( 
        <section className="services" id='service'>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={devimg} />
                            <Card.Body>
                                <Card.Title>App Development</Card.Title>
                                <Card.Text>
                                    We specialize in creating custom mobile and web applications tailored to your business needs.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={designimg} />
                            <Card.Body>
                                <Card.Title>UX/UI Design</Card.Title>
                                <Card.Text>
                                    Our expert designers focus on creating intuitive and visually appealing user interfaces to enhance user experience.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={marketimg} />
                            <Card.Body>
                                <Card.Title>Branding & Marketing</Card.Title>
                                <Card.Text>
                                    We help you build a strong brand identity and reach your target audience through strategic marketing initiatives.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
      </section>
  );
}

export default Services;
