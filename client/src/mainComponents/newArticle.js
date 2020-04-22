// new article creation
import React, { Component, useContext, useEffect } from "react";
import { Row, Col, Input, Button } from "reactstrap";
import ArticleEditor from "./articleEditor";
import { ArticleContext } from "../context/ArticleContext";

const colStyle = {
  paddingTop: 2,
  paddingLeft: 3,
  paddingRight: 3,
};

const NewArticle = () => {
  const [monzacState, setMonzacState] = useContext(ArticleContext);
  const styles = {
    boxShadow: "none",
  };
  useEffect(() => {
    getCategoryList();
  });
  const getCategoryList = () => {
    fetch("/get/category")
      .then((res) => res.json())
      .then((res) => {
        let catList = res.map((r) => r.name);
        monzacState.forEach((element, index) => {
          if (element.name === "catList") {
            monzacState[index].value = catList;
          }
        });
      });
  };

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
    <Row className="row">
      <Col xs="6" style={colStyle}>
        <Input style={styles} placeholder="Title"></Input>
      </Col>
      <Col xs="6" style={colStyle}>
        <Input type="select" style={styles}>
          {monzacState.find((ele) => ele.name === "catList").value.length === 0}
          {monzacState
            .find((ele) => ele.name === "catList")
            .value.map((opt, i) => (
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
  );
};

export default NewArticle;
