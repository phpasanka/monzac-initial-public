import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catList: []
    };
  }
  getCategoryList = () => {
    fetch("/get/category")
      .then(res => res.json())
      .then(res => {
        let catList = res.map(r => r.name);
        this.setState({ catList });
      });
  };

  componentDidMount() {
    this.getCategoryList();
  }
  styleNavBar = {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0
  };
  styleNavItem = {
    borderBottom: "solid 1px #d1d1d1",
    backgroundColor: "white"
  };

  render() {
    return (
      <Navbar style={this.styleNavBar}>
        <Nav vertical>
          {this.state.catList.map((item, i) => (
            <NavItem key={i} style={this.styleNavItem}>
              <NavLink href="#">{item}</NavLink>
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    );
  }
}

export default LeftNav;
