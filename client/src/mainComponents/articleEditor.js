import React, { Component } from "react";
import { MonzacContext } from "../context/monzacContext";

class ArticleEditor extends Component {
  state = {};

  render() {
    return (
      <MonzacContext.Consumer>
        {(context) => (
          <p
            id="id-article-editor-content"
            contentEditable
            onInput={context.state.updateNewArticleContent}
            data-placeholder="Write here...!"
          ></p>
        )}
      </MonzacContext.Consumer>
    );
  }
}

//class ArticleEditor extends React.Component {
// constructor(props) {
//   super(props);
// }
// shouldComponentUpdate(nextProps) {
//   return nextProps.html !== this.nodeSelect.innerHTML;
// }

// componentDidUpdate() {
//   if (this.props.html !== this.nodeSelect.innerHTML) {
//     this.nodeSelect.innerHTML = this.props.html;
//   }
// }

// emitChange = () => {
//   let html = this.nodeSelect.innerHTML;
//   if (this.props.onChange && html !== this.lastHtml) {
//     this.props.onChange({
//       target: {
//         value: html,
//       },
//     });
//   }
//   this.lastHtml = html;
// };

//   render() {
//     //console.log("ArticleEditor" + this.props.value);
//     return (
//       <p
//         // ref={(ref) => {
//         //   this.nodeSelect = ref;
//         // }}
//         id="id-article-editor-content"
//         //onInput={this.emitChange}
//         //onBlur={this.emitChange}
//         contentEditable
//         data-placeholder="Write here...!"
//         //dangerouslySetInnerHTML={{ __html: this.props.html }}
//       >
//         {this.props.value}
//       </p>
//     );
//   }
// }

export default ArticleEditor;
