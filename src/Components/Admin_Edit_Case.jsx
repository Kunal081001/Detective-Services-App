
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCaseById, updateCase } from "../Services/AdminServices";
import { AdminNavigation } from "./AdminNavigation";


export function Admin_Edit_Case() {

    const params = useParams();

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ id: "", yearofcase: "", detective: "", natureofcase: "", description: "" });

    const [isUpdated, setIsUpdated] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await updateCase(formData, params.id);
            setIsUpdated(true);
            navigate("/admin/case-list/");
            console.log(result);

        } catch (error) {
            console.log(error)
        }
    }

    const populateCaseState = async () => {
        try {
            const result = await fetchCaseById(params.id);
            setFormData(result.case);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateCaseState();
        console.log("data fetched..");
    }, []);

    return (
        <>
            <AdminNavigation />
            <Container>
                <Header text="Update Case here"></Header>
                <Row>
                    {formData.id == params.id
                        ?
                        <Form onSubmit={handleSubmit} className="formContainer">

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Case Id </Form.Label>
                                    <Form.Control type="number" value={formData.id} placeholder="Enter Case id" name="id" readOnly />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Case Year</Form.Label>
                                    <Form.Control type="text" value={formData.yearofcase} placeholder="Enter Case Year" name="yearofcase" onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Detective Name</Form.Label>
                                    <Form.Control type="text" value={formData.detective} placeholder="Enter Detective Name" name="detective" onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Nature of Case</Form.Label>
                                    <Form.Control type="text" value={formData.natureofcase} placeholder="Enter Nature of Case" name="natureofcase" onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Case Description</Form.Label>
                                    <Form.Control type="text" value={formData.description} placeholder="Enter Detective Specialization" name="description" onChange={handleChange} />
                                </Form.Group>
                            </Col>

                            <Col md={{ span: 6, offset: 3 }}>
                                <Button variant="primary" type="submit" >Update</Button>
                            </Col>
                        </Form> : <Alert variant="danger">Case not found for given Id ....</Alert>
                    }
                </Row>

                <Row className="mt-3">
                    <Col lg={3}>{
                        isUpdated ? <Alert variant="success"> Case Updated..</Alert> : null
                    }
                    </Col>
                </Row>
            </Container>
        </>
    );
}