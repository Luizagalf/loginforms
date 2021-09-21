import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button, Col } from 'react-bootstrap';
import React, {
    useState
} from 'react';

function Wordlist() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Your name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue="Luiza"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                />
            </Form.Group>
            <Button type="submit">Submit form</Button>
        </Form>
    );
}

export default Wordlist;