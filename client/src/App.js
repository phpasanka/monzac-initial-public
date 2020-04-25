import React, { Component } from "react";
import { Container, Navbar, NavbarBrand, Row, Col } from "reactstrap";
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
