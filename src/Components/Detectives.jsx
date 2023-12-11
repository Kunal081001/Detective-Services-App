import { Footer } from "./Footer";
import { Navigationbar } from "./Navigationbar";
import { Header } from "./Header";
import { useEffect, useState } from "react";
import { fetchDetectiveForUser } from "../Services/UserServices";
import { Alert, Container, Table } from "react-bootstrap";

export function Detectives() {
    const [detective, setDetective] = useState([]);
    // const [showDialog, setShowDialog] = useState(false);
    // const [selectedId, setSelectedId] = useState("");
    async function populateDetectiveState(){
        try{
            const data = await fetchDetectiveForUser();            
            setDetective(data.detective);
        }
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        populateDetectiveState();
    },[]);
    return (
        <>
            <Navigationbar/>
            <Container>
                <Header text="List of All Detectives....."></Header>
                {
                    detective.length !== 0 ? <Table className="mt-4">
                        <thead>
                            <tr>
                                <th>Detective Id</th>
                                <th>Detective Name</th>
                                <th>Detective Previous Case</th>
                                <th>Detective Background</th>
                                <th>Detective Specialization</th>                                
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
                                            
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table> : <Alert variant="danger">Detective not found..</Alert>

                }
                </Container>
            <Footer />
        </>
    );
}