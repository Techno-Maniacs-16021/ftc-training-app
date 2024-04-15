import React from "react";
import { Container, Nav, Navbar, Form, Button, Row, Col } from 'react-bootstrap';
//import { search } from 'bootstrap-icons'


class SiteNav extends React.Component {
    state = {
        searchText: ""
    };

    handleSearchInput = event => {
        this.setState({
            searchText: event.target.value
        });
    };

    handleSearchSubmit = () => {
        if (this.state.searchText) {
            let text = this.state.searchText;
            this.setState({ searchText: "" })
            this.props.history.push({
                pathname: "/results",
                state: { searchText: text }
            });
        } else {
            alert("Please enter some search text!");
        }
    };

    handleSearchKeyUp = event => {
        event.preventDefault();
        if (event.key === 'Enter' && event.keyCode === 13) {
            this.handleSearchSubmit();
        }
    }

    handleFormSubmit = e => e.preventDefault();
    render() {
        return (
            <header>
                <Navbar bg="bg-white" expand="lg" variant="light">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src="/img/mechatronics.png"
                                className="d-inline-block"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-md-auto">
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link>
                            </Nav>
                            <Form inline className="d-flex" onSubmit={this.handleFormSubmit}>
                                <Form.Control
                                    onChange={this.handleSearchInput}
                                    value={this.state.searchText}
                                    onKeyUp={this.handleSearchKeyUp}
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button onClick={this.handleSearchSubmit} variant="outline-primary">
                                    <i class="bi bi-search"></i>
                                </Button>
                            </Form>


                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </header>
        )
    }
}

export default SiteNav;