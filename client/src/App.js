import React, { Component } from "react";
import { Container, Navbar, NavbarBrand, Row, Col, Nav } from "reactstrap";
import SignInButton from "./user/signInButton";
//import SignUpButton from "./user/signUpButton";
import Main from "./mainComponents/main";
import LeftNav from "./leftnav";
import { MonzacProvider } from "./context/monzacContext";
//import { Route, Switch } from 'react-router-dom';

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
                {/* <SignUpButton /> */}
              </Nav>
            </Navbar>
            <Row style={{ backgroundColor: "#fdfdfd" }}>
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
