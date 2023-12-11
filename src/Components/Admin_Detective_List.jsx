import { Alert, Button, Container, Modal, Table } from "react-bootstrap";
import { AdminNavigation } from "./AdminNavigation";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteDetective, fetchDetective } from "../Services/AdminServices";

export function Admin_Detective_List(){
    const[detective,setDetective]=useState([]);
    const[showDialog,setShowDialog]=useState(false);
    const[selectedId,setSelectedId]=useState("");
    const navigate = useNavigate();

    const openModalDialog = () =>{
        setShowDialog(true);
    }
    const closeModalDialog = () =>{
        setShowDialog(false);
    }
    async function populateDetectiveState(){
        try{
            const data = await fetchDetective();            
            setDetective(data.detective);
        }
        catch(error){
            console.log(error);
        }
    }
    const handleDetectiveDelete = async () =>{
        try{
            const response = await deleteDetective(selectedId);
            populateDetectiveState();
            closeModalDialog();
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        populateDetectiveState();
    },[]);
    return(
        <>
        <AdminNavigation/>
        <Container>
            <Header text="List of All Detectives....."></Header>
            {
                detective.length !== 0 ?<Table className="mt-4">
                    <thead>
                        <tr>
                            <th>Detective Id</th>
                            <th>Detective Name</th>
                            <th>Detective Previous Case</th>
                            <th>Detective Background</th>
                            <th>Detective Specialization</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            detective.map((s) => {
                                return (
                                    <tr>
                                        <td>{s.id}</td>
                                        <td>{s.name}</td>
                                        <td>{s.previouscase}</td>
                                        <td>{s.background}</td>
                                        <td>{s.specialization}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => {
                                                openModalDialog();
                                                setSelectedId(s.id);
                                                // handleDeleteClick(s.roll);                                                                                       
                                            }}>Delete</Button>&nbsp;&nbsp;&nbsp;
                                            <Button varient="primary" onClick={()=>{
                                                    navigate (`/admin/edit-detective/${s.id}`);
                                            }}>Update</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table> : <Alert variant="danger">Detective not found..</Alert>

            }
            <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete Detective with Id {selectedId}</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>{
                      handleDetectiveDelete()}  
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