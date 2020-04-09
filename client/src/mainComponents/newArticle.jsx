// new article creation
import React, { Component } from "react";
import { Row, Col, Input, Button } from "reactstrap";
import ArticleEditor from "./articleEditor";

const colStyle = {
  paddingTop: 2,
  paddingLeft: 3,
  paddingRight: 3
};

class NewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catList: []
    };
  }
  styles = {
    boxShadow: "none"
  };
  componentDidMount() {
    this.getCategoryList();
  }
  getCategoryList = () => {
    fetch("/get/category")
      .then(res => res.json())
      .then(res => {
        let catList = res.map(r => r.name);
        this.setState({ catList });
      });
  };

  publishArticleRequest = () => {
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "React Hooks POST Request Example",
        category: "",
        content: ""
      })
    };

    fetch("/api/article/create", requestOptions)
      .then(res => res.json())
      .then(res => {});
  };

  render() {
    return (
      <Row className="row">
        <Col xs="6" style={colStyle}>
          <Input style={this.styles} placeholder="Title"></Input>
        </Col>
        <Col xs="6" style={colStyle}>
          <Input type="select" style={this.styles}>
            {this.state.catList.map((opt, i) => (
              <option key={i}>{opt}</option>
            ))}
          </Input>
        </Col>
        <Col xs="12" style={colStyle}>
          <ArticleEditor></ArticleEditor>
          <div align="right" style={{ marginBottom: 5 }}>
            <Button outline color="secondary">
              Discard
            </Button>{" "}
            <Button
              outline
              color="primary"
              onClick={this.publishArticleRequest}
            >
              Post
            </Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default NewArticle;
