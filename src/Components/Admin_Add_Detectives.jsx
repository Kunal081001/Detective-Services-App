import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { AdminNavigation } from "./AdminNavigation";
import { Header } from "./Header";
import { saveDetective } from "../Services/AdminServices";
import { useState } from "react";

export function Admin_Add_Detectives(){
    const[formData,setFormData] = useState({id:"",name:"",previous_case:"",background:"",specialization:""});

    const[isSubmitted,setIsSubmitted] = useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    } 

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
           const result = await saveDetective(formData);

           setFormData({id:"",name:"",previous_case:"",background:"",specialization:""});
           setIsSubmitted(true);
           setTimeout(()=>{
               setIsSubmitted(false);
           },1500);
           console.log(result);
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <AdminNavigation/>
        <Container >
            <Header text="Add Detective"></Header>
            <Row>

            <Form onSubmit={handleSubmit} className="formContainer">
                
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Detective Id </Form.Label>
                            <Form.Control type="number" value={isSubmitted?formData.id:null} placeholder="Enter Detective id" name="id" onKeyUp={handleChange}/>
                        </Form.Group>
                    </Col>
               
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Detective Name</Form.Label>
                            <Form.Control type="text" value={isSubmitted?formData.name:null} placeholder="Enter Detective Name" name="name" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
               
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Previous Case</Form.Label>
                            <Form.Control type="text" value={isSubmitted?formData.previous_case:null} placeholder="Enter Previous Case Details" name="previouscase" onKeyUp={handleChange}/>
                        </Form.Group>
                    </Col>
                
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Detective background</Form.Label>
                            <Form.Control type="text" value={isSubmitted?formData.background:null} placeholder="Enter Detective Background" name="background" onKeyUp={handleChange}/>
                        </Form.Group>
                    </Col>
               
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Detective Specialization</Form.Label>
                            <Form.Control type="text" value={isSubmitted?formData.specialization:null} placeholder="Enter Detective Specialization" name="specialization" onKeyUp={handleChange}/>
                        </Form.Group>
                    </Col>
                
                    <Col md={{ span: 6, offset: 3 }}>
                    <Button variant="primary" type= "submit" >Add</Button>
                    </Col>
                
            </Form>
            </Row>
            <Row className="mt-3">
                <Col lg={3}>{
                    isSubmitted?<Alert variant="success"> Detective Added</Alert>:null               
                }
                </Col>                
            </Row>
        </Container>
        </>
    );
}