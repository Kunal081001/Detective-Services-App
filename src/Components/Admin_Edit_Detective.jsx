
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AdminNavigation } from "./AdminNavigation";
import { fetchDetectiveById, updateDetective } from "../Services/AdminServices";


export function Admin_Edit_Detective() {

    const params = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ id: "", name: "", previouscase: "", background: "", specialization: "" });

    const [isUpdated, setIsUpdated] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await updateDetective(formData, params.id);
            setIsUpdated(true);
            navigate("/admin/detectivelist/");
            console.log(result);

        } catch (error) {
            console.log(error)
        }
    }

    const populateDetectiveState = async () => {
        try {
            const result = await fetchDetectiveById(params.id);
            setFormData(result.detective);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateDetectiveState();
        console.log("data fetched..");
    }, []);

    return (
        <>
            <AdminNavigation />
            <Container>
                <Header text="Update Detective Details here"></Header>
                <Row>
                    {formData.id == params.id
                        ?
                        <Form onSubmit={handleSubmit} className="formContainer">
                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Detective Id </Form.Label>
                                    <Form.Control type="number" value={formData.id} placeholder="Enter Detective id" name="id" readOnly />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Detective Name</Form.Label>
                                    <Form.Control type="text" value={formData.name} placeholder="Enter Detective Name" name="name" onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Detective Previous Case</Form.Label>
                                    <Form.Control type="text" value={formData.previouscase} placeholder="Enter Detective Previous case" name="previouscase" onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Detective background</Form.Label>
                                    <Form.Control type="text" value={formData.background} placeholder="Enter Detective Background" name="background" onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Detective Specialization</Form.Label>
                                    <Form.Control type="text" value={formData.specialization} placeholder="Enter Detective Specialization" name="specialization" onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Button variant="primary" type="submit" >Update</Button>
                            </Col>
                        </Form> : <Alert variant="danger">Detective not found for given Id ....</Alert>
                    }
                </Row>

                <Row className="mt-3">
                    <Col lg={3}>{
                        isUpdated ? <Alert variant="success"> Detective Updated..</Alert> : null
                    }
                    </Col>
                </Row>
            </Container>
        </>
    );
}