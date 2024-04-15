import { Button, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

function HomePage() {
    return (
    <Container>
        <Row className="px-4 my-5">
            <Col xs={4} sm={6}>
                <Image src="img/mechatronics.jpg" fluid />
            </Col>
            <Col sm={6}>
                <h1 className="font-weight-light">Contacts App </h1>
                <p className="mt-4">
                    aaaddf dsfdse f
                    <br/><br/>
                    sss gfg gfgf
                </p>
                <Button variant="outline-primary">Get Started &gt;&gt;</Button>
            </Col>
        </Row>
    </Container>)
}

export default HomePage;