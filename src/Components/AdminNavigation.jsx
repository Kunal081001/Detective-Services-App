import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/TokenUtils";

export function AdminNavigation(){

    const navigate = useNavigate();

    const handleLogoutClick = () =>{
        logout();
        navigate("/admin");
    }


    return(
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
            <Container>
                <Navbar.Brand >
                    <LinkContainer to="/admin-panel">
                        <Nav.Link>Detective Services App Admin Panel</Nav.Link>
                    </LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/admin-panel">
                            <Nav.Link>Admin Home</Nav.Link>
                        </LinkContainer>                        
                    </Nav>
                    <Nav className="me-auto">
                        <LinkContainer to="/admin/case-list">
                            <Nav.Link>Case List</Nav.Link>
                        </LinkContainer>                        
                    </Nav>                   
                    <Nav className="me-auto">
                        <LinkContainer to="/admin/detectivelist">
                            <Nav.Link>Detective List</Nav.Link>
                        </LinkContainer>                        
                    </Nav>
                    <Nav className="me-auto">
                        <LinkContainer to="/admin/add-case">
                            <Nav.Link>Add Case</Nav.Link>
                        </LinkContainer>                        
                    </Nav>
                    <Nav className="me-auto">
                        <LinkContainer to="/admin/add-detectives">
                            <Nav.Link>Add Detective</Nav.Link>
                        </LinkContainer>                        
                    </Nav>
                    <Button variant="primary" size="lgsm" onClick={handleLogoutClick}>Logout</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}