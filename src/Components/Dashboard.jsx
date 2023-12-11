import { Col, Container, Row } from "react-bootstrap";
import { Header } from "./Header";
import Carousel from 'react-bootstrap/Carousel';
import { Navigationbar } from "./Navigationbar";
import { Footer } from "./Footer";
import "./style/dashboard.css";
import "./style/detective_container.css";
import pic1 from "./images/img2.jpeg";
import pic2 from "./images/img3.jpg";

export function Dashboard() {
  const slides = [
    {
      id: 1,
      imagePath: '/images/Img1.jpg',
      caption: 'Case Management Excellence',
      description: '"Unlock unparalleled efficiency in your investigative workflow with our Case Management Excellence feature. Seamlessly organize and monitor every aspect of your cases through an intuitive and centralized dashboard. Track progress, manage evidence, and streamline communication, ensuring nothing escapes your attention. Elevate your investigative capabilities with a robust, user-friendly case management system that empowers you to stay in control and deliver results with precision."',
    },
    {
      id: 2,
      imagePath: '/images/Img2.jpg',
      caption: 'Seamless Collaboration Platform',
      description: '"Experience the power of seamless collaboration with our advanced platform designed for detectives. Our Seamless Collaboration feature fosters real-time interaction, information sharing, and collective decision-making among investigative teams. Break down communication barriers with a centralized hub, allowing detectives to work harmoniously, share insights, and collectively drive investigations forward. Elevate your teamwork, streamline collaboration, and uncover the truth with unprecedented efficiency."',
    },
    {
      id: 3,
      imagePath: '/images/Img3.jpg',
      caption: 'Advanced Surveillance Tools',
      description: '"Gain a competitive edge in your investigations with our state-of-the-art Advanced Surveillance Tools. Unleash the power of cutting-edge technology tailored for detectives, offering advanced monitoring capabilities, facial recognition, geospatial tracking, and more. Elevate your surveillance game with tools that provide unparalleled insights, helping you stay steps ahead in gathering critical evidence. Whether in the field or behind the scenes, our Advanced Surveillance Tools redefine the art of investigation, ensuring no detail goes unnoticed."',
    },
  ];
  return (
    <>
      <Navigationbar />
      <Container  className="mt-5">
        <Header text="Welcome to Detective Services Application"></Header>
        <Carousel>
          {slides.map((slide) => (
            <Carousel.Item key={slide.id}>
              <img className="d-block w-100" src={slide.imagePath} alt={`Slide ${slide.id} `} style={{ height: `${600}px` }} />
              <Carousel.Caption>
                <h3 className="slide-caption">{slide.caption}</h3>
                <p className="slide-description">{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <Container className="detective-container">
          <Row>
            <Col md={6}>
              <img
                src={pic1}                
                alt="Detective Services"
                className="img-fluid detective-image"
              />
              
            </Col>
            <Col md={6} className="description-col">
              <div className="description-content">
                <h2>Discover the Power of Detective Services</h2>
                <p>
                  Uncover the truth with our cutting-edge Detective Services web app.
                  From advanced case management to seamless collaboration and powerful surveillance tools,
                  our platform empowers investigators to excel in every aspect of their work.
                  Elevate your investigative capabilities with precision, efficiency, and confidentiality.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="detective-container">
          <Row>            
            <Col md={6} className="description-col">
              <div className="description-content">
                <h2>
"Discover Unprecedented Investigative Power with Our Cutting-Edge Detective Services App"</h2>
                <p>
                "Explore the future of investigative excellence with our Detective Services App. From intelligent case management to seamless collaboration and advanced surveillance tools, our app empowers detectives and investigators to unlock new levels of efficiency and precision. Elevate your investigative capabilities with a user-friendly platform designed for the relentless pursuit of truth. Join us in redefining the art of investigation, where technology meets expertise."
                </p>
              </div>
            </Col>
            <Col md={6}>
              <img
                src={pic2}                
                alt="Detective Services"
                className="img-fluid detective-image"/>
              
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>






  );
}