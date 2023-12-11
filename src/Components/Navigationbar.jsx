import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/TokenUtils";

export function Navigationbar() {

    const navigate = useNavigate();

    const handleLogoutClick = ()=>{
        logout();
        navigate("/");
    }


    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
            <Container>
                <Navbar.Brand >
                    <LinkContainer to="/dashboard">
                        <Nav.Link>Detective Services App</Nav.Link>
                    </LinkContainer>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/dashboard">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/case_list">
                            <Nav.Link>Case List</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/detective">
                            <Nav.Link>Detectives</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                    </Nav>
                   <Button variant="primary" size="lgsm" onClick={handleLogoutClick}>Logout</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}