// new article creation
import React, { Component } from "react";
import { Row, Col, Input, Button } from "reactstrap";
import ArticleEditor from "./articleEditor";
//import { ArticleContext } from "../context/ArticleContext";
import { MonzacContext } from "../context/monzacContext";

const colStyle = {
  paddingTop: 2,
  paddingLeft: 3,
  paddingRight: 3,
};
const styles = {
  boxShadow: "none",
};

class NewArticle extends Component {
  state = {};

  render() {
    const publishArticleRequest = (e) => {
      e.preventDefault();
      let requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "React Hooks POST Request Example",
          category: "",
          content: "",
        }),
      };

      fetch("/api/article/create", requestOptions)
        .then((res) => res.json())
        .then((res) => {});
    };

    return (
      <MonzacContext.Consumer>
        {(context) => (
          <Row className="row">
            <Col xs="6" style={colStyle}>
              <Input style={styles} placeholder="Title"></Input>
            </Col>
            <Col xs="6" style={colStyle}>
              <Input type="select" style={styles}>
                {context.state.catList.map((opt, i) => (
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
                <Button outline color="primary" onClick={publishArticleRequest}>
                  Post
                </Button>
              </div>
            </Col>
          </Row>
        )}
      </MonzacContext.Consumer>
    );
  }
}

export default NewArticle;
