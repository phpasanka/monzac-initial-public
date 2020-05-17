import React, { Component } from "react";
import ContentEditable from "react-contenteditable";
import { MonzacContext } from "../context/monzacContext";

class ArticleEditor extends Component {
  render = () => {
    return (
      <MonzacContext.Consumer>
        {(context) => (
          <ContentEditable
            id="id-article-editor-content"
            html={context.state.newArticleContent}
            disabled={false}
            onChange={context.updateNewArticleContent}
          />
        )}
      </MonzacContext.Consumer>
    );
  };
}
export default ArticleEditor;
