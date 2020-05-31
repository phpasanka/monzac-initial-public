// article display partially
import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { MonzacContext } from "../context/monzacContext";

const authorStyle = {
  fontSize: '14px',
  fontStyle: 'italic',
  color: '#28a745',
  fontWeight: '300'
}
const getThisArticleToRead = (event, docId, callback) => {
  event.preventDefault()
  //console.log(docId)
  try {
    fetch('/api/article/id/' + docId)
      .then((res) => res.json())
      .then((res) => {
        //console.log(res)
        return callback(null, res)
      })
  }
  catch (err) {
    return callback(err, null)
  }
}

class ArticleThumbnail extends React.Component {
  state = {
    docId: '',
  };
  componentDidMount() {
    this.setState({ docId: this.props.content.docId })
  }
  render() {
    return (
      <MonzacContext.Consumer>
        {(context) =>
          (<React.Fragment>
            <Card body outline color="primary" className="article-thumbnail-style" onClick={(event) => {
              getThisArticleToRead(event, this.state.docId, (err, result) => {
                if (!err) {
                  context.hideArticleReader()
                  context.updateCurrentArticle(result[0])
                  context.toggleArticleReader()
                }
              })
            }}>
              <CardBody style={{ padding: 0 }}>
                <CardTitle className="article-title-style">{this.props.content.title} <span style={authorStyle}>-- by {this.props.content.author} </span></CardTitle>
                <CardText className="article-style">{this.props.content.content} </CardText>
              </CardBody>
            </Card>
          </React.Fragment>)
        }
      </MonzacContext.Consumer>
    );
  }
}

export default ArticleThumbnail;
