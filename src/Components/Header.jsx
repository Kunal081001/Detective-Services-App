import { Alert, Container } from "react-bootstrap";

export function Header(props) {
    return (
        <Container className="mt-5">
            <Alert variant="success" className='text-center'>
                <h2>{props.text}</h2>
            </Alert>
        </Container>
        
    );
}