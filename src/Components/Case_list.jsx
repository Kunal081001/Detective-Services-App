import { Alert, Container, Table } from "react-bootstrap";
import { Footer } from "./Footer";
import { Navigationbar } from "./Navigationbar";
import { Header } from "./Header";
import { fetchCaseForUser } from "../Services/UserServices";
import { useEffect, useState } from "react";

export function Case_list() {
    const [cases, setCases] = useState([]);
    async function populateCaseState() {
        try {
            const data = await fetchCaseForUser();
            console.log(data.cases);
            setCases(data.cases); //because here will get object of json not an array thats why we use data.students
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        populateCaseState();
    },[]);
    return (
        <>
            <Navigationbar />
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
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table> : <Alert variant="danger">Case not found..</Alert>
                }
            </Container>
            <Footer />

        </>
    );
}