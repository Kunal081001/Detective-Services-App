import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { adminLogin } from "../Services/AdminServices";
import { FrontNavigation } from "./FrontNavigation";
import "./style/Login.css";


export function AdminLogin() {
    const navigate = useNavigate();

    const[loginError,setLoginError] = useState(false);

    const [formData,setFormData] = useState({username:"",password:""});
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const result= await adminLogin(formData);
          localStorage.setItem("token",result.token);
          navigate("/admin-panel");
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    }
    return (
        <>
        <FrontNavigation/>
        <Header text="Admin Login"></Header>
        <Container className="mt-5">
        <Row className="justify-content-center">
            <Col lg={6}>
                <Form onSubmit={handleSubmit} className="formContainer">
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" name="username" onChange={handleChange} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} required />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" className="allButton">
                        Login
                    </Button>
                </Form>

                {loginError?<Alert variant="danger" className="mt-3">Invalid Username or password</Alert>:null}
            </Col>
        </Row>
        
    </Container>
    
        </>
    );
}