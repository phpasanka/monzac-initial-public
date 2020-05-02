import React, { Component } from "react";
import ContentEditable from "react-contenteditable";
import { MonzacContext } from "../context/monzacContext";

class ArticleEditor extends Component {
  render = () => {
    //const contentEditable = React.createRef();
    return (
      <MonzacContext.Consumer>
        {(context) => (
          <ContentEditable
            id="id-article-editor-content"
            //innerRef={contentEditable}
            html={context.state.newArticleContent} // innerHTML of the editable div
            disabled={false} // use true to disable editing
            onChange={context.updateNewArticleContent} // handle innerHTML change
            //tagName="p" // Use a custom HTML tag (uses a div by default)
          />
        )}
      </MonzacContext.Consumer>
    );
  };
}
export default ArticleEditor;
