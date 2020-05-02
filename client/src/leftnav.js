import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { MonzacContext } from "./context/monzacContext";
class LeftNav extends Component {
  styleNavBar = {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  };
  styleNavItem = {
    borderBottom: "solid 1px #d1d1d1",
    backgroundColor: "white",
  };

  render() {
    return (
      <MonzacContext.Consumer>
        {(context) => (
          <Navbar style={this.styleNavBar}>
            <Nav vertical>
              {context.state.catList.map((item, i) => (
                <NavItem key={i} style={this.styleNavItem}>
                  <NavLink href="#">{item}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </Navbar>
        )}
      </MonzacContext.Consumer>
    );
  }
}

export default LeftNav;
