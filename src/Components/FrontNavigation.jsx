import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function FrontNavigation(){
    return(
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
            <Container>
                <Navbar.Brand >
                    <LinkContainer to="/">
                        <Nav.Link>Detective Services App</Nav.Link>
                    </LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/user-registration">
                            <Nav.Link>User Registration</Nav.Link>
                        </LinkContainer>                        
                    </Nav>
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>User Login</Nav.Link>
                        </LinkContainer>                        
                    </Nav>                   
                    <Nav className="me-auto">
                        <LinkContainer to="/admin">
                            <Nav.Link>Admin Login</Nav.Link>
                        </LinkContainer>                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}