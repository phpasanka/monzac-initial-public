import React, { Component } from "react";
import NewArticle from "./newArticle";
import ArticleThumbnail from "./articleThumbnail";
import { Button } from "reactstrap";
import { MonzacContext } from "../context/monzacContext";

class Main extends Component {
  // getArticleThumbList = () => {
  //   fetch("/api/thumbist")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       let articleThumbList = res.map(
  //         (t) => t.title,
  //         (t) => t.content
  //       );
  //       //this.setState({ articleThumbList });
  //       return articleThumbList;
  //     });
  // };

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
            {context.state.articleThumbList.map((value, index) => {
              return <ArticleThumbnail content={value}></ArticleThumbnail>;
            })}
            {/* <ArticleThumbnail></ArticleThumbnail>
            <ArticleThumbnail></ArticleThumbnail>
            <ArticleThumbnail></ArticleThumbnail>
            <ArticleThumbnail></ArticleThumbnail>
            <ArticleThumbnail></ArticleThumbnail>
            <ArticleThumbnail></ArticleThumbnail> */}
          </React.Fragment>
        )}
      </MonzacContext.Consumer>
    );
  }
}

export default Main;
