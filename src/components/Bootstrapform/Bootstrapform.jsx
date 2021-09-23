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
            <Row>
                <Form.Group controlId="validationCustom01" >
                    <Form.Control
                        required
                        type="text"
                        placeholder="Your name"
                        className="standartinput"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group style={{ display: "flex", justifyContent: "center" }}>
                    <Form.Check
                        required
                        type="checkbox"
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                    />
                </Form.Group>
                <Button type="submit">Submit form</Button>
            </Row>
        </Form>
    );
}

export default Wordlist;