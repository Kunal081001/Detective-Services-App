import { Footer } from "./Footer";
import { Navigationbar } from "./Navigationbar";
import React from 'react';
import { Container, Card, Row, Col, Alert } from 'react-bootstrap';
import kunal from "./images/kunal.png"
import pravin from "./images/pravin.jpg"
import atharv from "./images/atharv.jpg"
import { Header } from "./Header";


export function About() {

    return (
        <>
            <Navigationbar />
            <Container className="mt-5">
                <Header text="About Us"></Header>
                <p>
                    Welcome to our development team! We are a group of passionate individuals dedicated to creating
                    innovative and robust software solutions.
                </p>
                <Row className="mt-4">
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={kunal} alt="Kunal" />
                            <Card.Body>
                                <Card.Title>"Kunal Chaudhari"</Card.Title>
                                <Card.Text>"Passionate about creating web applications with a focus on user experience and performance."</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={pravin} alt="Pravin" />
                            <Card.Body>
                                <Card.Title>"Pravin Kharajge"</Card.Title>
                                <Card.Text>"Dedicated to crafting elegant and responsive user interfaces to enhance user interactions."</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={atharv} alt="Atharv" />
                            <Card.Body>
                                <Card.Title>"Atharv Paturde"</Card.Title>
                                <Card.Text>"Experienced in building scalable and efficient server-side applications for various domains."</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
            <Footer />

        </>
    );
}



