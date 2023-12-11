import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../Services/UserServices";
import { Header } from "./Header";
import "./style/Login.css";


export function UserLogin() {
    const navigate = useNavigate();

    const [loginError, setLoginError] = useState(false);

    const [formData, setFormData] = useState({ email: "", password: "" });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await userLogin(formData);
            localStorage.setItem("token", result.token);
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    }
    return (
        <Container className="mt-5 ">
            <Header text="User Login"></Header>
            <Row className="justify-content-center">
                <Col lg={6}>
                    <Form onSubmit={handleSubmit} className="formContainer">
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" name="email" onChange={handleChange} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>

                    {loginError ? <Alert variant="danger" className="mt-3">Invalid Username or password</Alert> : null}
                </Col>
            </Row>

        </Container>

    );
}