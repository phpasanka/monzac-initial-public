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
    const publishArticleRequest = (e, title, cat, content) => {
      e.preventDefault();
      let requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          title: title,
          category: cat,
          content: content,
        }),
      };
      //console.log(requestOptions);
      fetch("/api/article/create", requestOptions)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.insert === "done") {
          }
        });
    };

    return (
      <MonzacContext.Consumer>
        {(context) => (
          <Row className="row">
            <Col xs="6" style={colStyle}>
              <Input
                style={styles}
                placeholder="Title"
                onInput={context.updateNewArticleTitle}
              ></Input>
            </Col>
            <Col xs="6" style={colStyle}>
              <Input
                type="select"
                style={styles}
                onChange={context.updateSelectedCategory}
              >
                {<option key="-1">--Select Category--</option>}
                {context.state.catList.map((opt, i) => (
                  <option key={i}>{opt}</option>
                ))}
              </Input>
            </Col>
            <Col xs="12" style={colStyle}>
              <ArticleEditor></ArticleEditor>
              <div align="right" style={{ marginBottom: 5 }}>
                <Button
                  outline
                  color="secondary"
                  onClick={context.toggleIsCreateNewArticleEnabled}
                >
                  Discard
                </Button>{" "}
                <Button
                  outline
                  color="primary"
                  onClick={(e) => {
                    publishArticleRequest(
                      e,
                      context.state.createArticleTitle,
                      context.state.selectedArticleCategory,
                      context.state.newArticleContent
                    );
                  }}
                >
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
