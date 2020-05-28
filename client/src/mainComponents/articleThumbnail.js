// article display partially
import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
class ArticleThumbnail extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Card body outline color="primary">
          <CardBody style={{ padding: 0 }}>
            <CardTitle className="">{this.props.content.title}</CardTitle>
            <CardText >{this.props.content.content}. </CardText>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default ArticleThumbnail;
