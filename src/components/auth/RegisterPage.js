import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function RegisterPage() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Register</h1></Col>
            </Row>
            <Row className="px-4 my-5">
                <Col sm={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email!
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" minLength="8" placeholder="Enter password"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm</Form.Label>
                            <Form.Control type="password" minLength="8" placeholder="Enter password"/>
                        </Form.Group>

                        <Button variant="primary" type="submit">Register &gt;&gt;</Button>&nbsp;
                    </Form>
                </Col>
            </Row>
        </Container>
    )

}
export default RegisterPage;