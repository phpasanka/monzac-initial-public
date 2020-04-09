import React, { Component } from "react";
import NewArticle from "./newArticle";
import ArticleThumbnail from "./articleThumbnail";
import { Button } from "reactstrap";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCreateNewArticleEnabled: false,
      articleThumbList: {
        title: "",
        content: ""
      }
    };
    this.enableNewArticleComponent = this.enableNewArticleComponent.bind(this);
  }
  getArticleThumbList() {
    fetch("/api/thumbist")
      .then(res => res.json())
      .then(res => {
        let articleThumbList = res.map(
          t => t.title,
          t => t.content
        );
        this.setState({ articleThumbList });
        console.log(articleThumbList);
      });
  }
  enableNewArticleComponent() {
    this.setState({
      isCreateNewArticleEnabled: !this.state.isCreateNewArticleEnabled
    });
  }

  render() {
    return (
      <React.Fragment>
        <div align="right" style={{ padding: 3 }}>
          <Button outline color="info" onClick={this.enableNewArticleComponent}>
            Write an article
          </Button>
        </div>
        {this.state.isCreateNewArticleEnabled ? (
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
    );
  }
}

export default Main;
