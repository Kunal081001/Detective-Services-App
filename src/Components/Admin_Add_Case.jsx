import { AdminNavigation } from "./AdminNavigation";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Header } from "./Header";
import { saveCase } from "../Services/AdminServices";
import { useState } from "react";

export function Admin_Add_Case(){
    const[formData,setFormData] = useState({id:"",yearofcase:"",detective:"",natureofcase:"",description:""});

    const[isSubmitted,setIsSubmitted] = useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    } 

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
           const result = await saveCase(formData);

           setFormData({id:"",yearofcase:"",detective:"",natureofcase:"",description:""});
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
        <Container>
            <Header text="Add Case"></Header>
            <Row>

            <Form onSubmit={handleSubmit} className="formContainer">
                
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Case Id </Form.Label>
                            <Form.Control type="number" value={isSubmitted?formData.id:null} placeholder="Enter Case id" name="id" onKeyUp={handleChange}/>
                        </Form.Group>
                    </Col>
               
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Case Year</Form.Label>
                            <Form.Control type="text" value={isSubmitted?formData.yearofcase:null} placeholder="Enter Case Year" name="yearofcase" onKeyUp={handleChange} />
                        </Form.Group>
                    </Col>
               
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Detective Name</Form.Label>
                            <Form.Control type="text" value={isSubmitted?formData.detective:null} placeholder="Enter Detective Name" name="detective" onKeyUp={handleChange}/>
                        </Form.Group>
                    </Col>
               
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Nature of Case</Form.Label>
                            <Form.Control type="text" value={isSubmitted?formData.natureofcase:null} placeholder="Enter Nature of Case" name="natureofcase" onKeyUp={handleChange}/>
                        </Form.Group>
                    </Col>
                
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Case Description</Form.Label>
                            <Form.Control type="text" value={isSubmitted?formData.description:null} placeholder="Enter Detective Specialization" name="description" onKeyUp={handleChange}/>
                        </Form.Group>
                    </Col>
               
                    <Col md={{ span: 6, offset: 3 }}>
                    <Button variant="primary" type= "submit" >Add</Button>
                    </Col>
                
            </Form>
            </Row>
            
            <Row className="mt-3">
                <Col lg={3}>{
                    isSubmitted?<Alert variant="success"> Case Added</Alert>:null               
                }
                </Col>                
            </Row>
        </Container>
        </>
    );
}
