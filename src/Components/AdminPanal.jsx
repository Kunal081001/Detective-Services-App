import { Col, Container, Row } from "react-bootstrap";
import { AdminNavigation } from "./AdminNavigation";
import pic1 from "./images/adminPanelimg.jpg";


export function AdminPanel(){
    return(
        <>
        <AdminNavigation/>
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
                <h1>Welcome to the heart of the Detective Services App! This Admin Panel serves as the nerve center for managing and overseeing all investigative activities, ensuring a seamless and effective operation of our detective services.</h1>
                <p>
                Access comprehensive reports and strategic insights based on data analytics. Leverage these insights to enhance decision-making and optimize resource allocation.
Whether you are overseeing a high-profile kidnapping case, unraveling a complex cybercrime network, or solving a decades-old mystery, the Detective Services Admin Panel is your command center for ensuring the success of every investigation.

Ready to embark on a journey of justice and discovery? The Detective Services Admin Panel is your gateway to a world of effective detective management and unparalleled investigative prowess. Dive in and let justice prevail!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        </>
    );
}