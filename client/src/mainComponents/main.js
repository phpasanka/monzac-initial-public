import React, { Component } from "react";
import NewArticle from "./newArticle";
import ArticleThumbnail from "./articleThumbnail";
import { Button } from "reactstrap";
import { MonzacContext } from "../context/monzacContext";

class Main extends Component {
  // getCategoryList = () => {
  //   fetch("/get/category")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       ///this.setState(catList:res.map((r)=>r.name));
  //       setCatList(res.map((r) => r.name));
  //       //console.log(catList);
  //       monzacState[2] = catList;
  //     });
  // };
  getArticleThumbList = () => {
    fetch("/api/thumbist")
      .then((res) => res.json())
      .then((res) => {
        let articleThumbList = res.map(
          (t) => t.title,
          (t) => t.content
        );
        this.setState({ articleThumbList });
      });
  };

  render() {
    return (
      <MonzacContext.Consumer>
        {(context) => (
          <React.Fragment>
            <div align="right" style={{ padding: 3 }}>
              <Button
                outline
                color="info"
                onClick={context.toggleIsCreateNewArticleEnabled}
              >
                Write an article
              </Button>
            </div>
            {context.state.isCreateNewArticleEnabled ? (
              <NewArticle></NewArticle>
            ) : null}
            <ArticleThumbnail></ArticleThumbnail>
            <ArticleThumbnail></ArticleThumbnail>
            <ArticleThumbnail></ArticleThumbnail>
            <ArticleThumbnail></ArticleThumbnail>
            <ArticleThumbnail></ArticleThumbnail>
            <ArticleThumbnail></ArticleThumbnail>
            <ArticleThumbnail></ArticleThumbnail>
          </React.Fragment>
        )}
      </MonzacContext.Consumer>
    );
  }
}

export default Main;
