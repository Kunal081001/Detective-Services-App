import { AdminNavigation } from "./AdminNavigation";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { deleteCase, fetchCase } from "../Services/AdminServices";



export function Admin_Case_List(){
    const [cases, setCases] = useState([]);

    const [showDialog, setShowDialog] = useState(false);

    const[selectedId,setSelectedId] = useState("");

    const navigate = useNavigate();

    const openModalDialog = () => {
        setShowDialog(true);
    }
    const closeModalDialog = () => {
        setShowDialog(false);
    }



    async function populateCaseState() {
        try {
            const data = await fetchCase();
            console.log(data);
            setCases(data.cases); //because here will get object of json not an array thats why we use data.students
        } catch (error) {
            console.log(error);
        }
    }

    const handleCaseDelete = async () => {
        try {
            const response = await deleteCase(selectedId);
            populateCaseState();
            closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        populateCaseState();
    }, []);
    return(
        <>
        <AdminNavigation/>
        <Container>
            <Header text="List of All Cases....."></Header>
            {
                cases.length !== 0 ? <Table className="mt-4">
                    <thead>
                        <tr>
                            <th>Case Id</th>
                            <th>Year of Case</th>
                            <th>Detective Name</th>
                            <th>Description</th>
                            <th>Nature of Case</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cases.map((s) => {

                                return (
                                    <tr>
                                        <td>{s.id}</td>
                                        <td>{s.yearofcase}</td>
                                        <td>{s.detective}</td>
                                        <td>{s.description}</td>
                                        <td>{s.natureofcase}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => {
                                                openModalDialog();
                                                setSelectedId(s.id);
                                                // handleDeleteClick(s.roll);                                                                                       
                                            }}>Delete</Button>&nbsp;&nbsp;&nbsp;
                                            <Button varient="primary" onClick={()=>{
                                                    navigate (`/admin/edit-case/${s.id}`);
                                            }}>Update</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table> : <Alert variant="danger">Case not found..</Alert>

            }
            <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete Case with id {selectedId}</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>{
                      handleCaseDelete()}  
                    }> 
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModalDialog}>
                        NO
                    </Button>
                </Modal.Footer>
            </Modal>


        </Container>
        </>
    );
}