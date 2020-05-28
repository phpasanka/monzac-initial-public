import React, { Component } from "react";
import { Container, Navbar, NavbarBrand, Row, Col, Nav } from "reactstrap";
import SignInButton from "./user/signInButton";
import Main from "./mainComponents/main";
import LeftNav from "./leftnav";
import { MonzacProvider } from "./context/monzacContext";


class App extends Component {
  render() {
    return (

      <MonzacProvider>
        <React.Fragment>
          <Container fluid>
            <Navbar dark color="dark">
              <NavbarBrand href="/">MonZac</NavbarBrand>
              <Nav className="">
                <SignInButton />
              </Nav>
            </Navbar>
            <Row style={{ backgroundColor: "#f3f3f3" }}>
              <Col xs="auto" style={{ paddingLeft: 0, paddingRight: 0 }}>
                <LeftNav></LeftNav>
              </Col>
              <Col xs="8" style={{ paddingLeft: 3 }}>
                <Main></Main>
              </Col>
              <Col xs="auto">
                <Navbar>dddd</Navbar>
              </Col>
            </Row>
          </Container>
        </React.Fragment>
      </MonzacProvider>
    );
  }
}

export default App;
