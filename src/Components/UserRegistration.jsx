import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { saveUser } from "../Services/UserServices";
import { Header } from "./Header";
import { FrontNavigation } from "./FrontNavigation";
import "./style/Login.css";

export function UserRegistration() {

    const [formData, setFormData] = useState({ name: "", email: "", password: "", phone: "" });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await saveUser(formData);
            setFormData({ name: "", email: "", password: "", phone: "" });
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
            }, 1500);
            console.log(result);
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <FrontNavigation />
            <Header text="User Registration"></Header>
            <Container>
                <Row>
                    <Form onSubmit={handleSubmit} >
                        <Container className="formContainer">
                           <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Name </Form.Label>
                                    <Form.Control type="text" value={isSubmitted ? formData.name : null} placeholder="Enter Name" name="name" onKeyUp={handleChange} required />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" value={isSubmitted ? formData.email : null} placeholder="Enter Email" name="email" onKeyUp={handleChange} required />
                                </Form.Group>
                            </Col>


                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={isSubmitted ? formData.password : null} placeholder="Enter Password" name="password" onKeyUp={handleChange} required />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" value={isSubmitted ? formData.phone : null} placeholder="Enter Phone Number" name="phone" onKeyUp={handleChange} required />
                                </Form.Group>
                            </Col>


                            <Col md={{ span: 6, offset: 3 }}>
                                <Button variant="primary" type="submit" >Register</Button>
                            </Col>

                        </Container>
                    </Form>
                </Row>

                <Row className="mt-3">
                    <Col md={{ span: 6, offset: 3 }}>{
                        isSubmitted ? <Alert variant="success"> Student Registerd</Alert> : null
                    }
                    </Col>
                </Row>
            </Container>
        </>

    );
}
