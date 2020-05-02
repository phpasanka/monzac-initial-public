// article display partially
import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
class ArticleThumbnail extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <CardTitle className="">{this.props.content}</CardTitle>
            <CardText>{this.props.content}. </CardText>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default ArticleThumbnail;
// const  = (props) => {
//   return (
//     <React.Fragment>
//       <Card>
//         <CardBody>
//           <CardTitle className="">{this.props.content.title}</CardTitle>
//           <CardText>{this.props.content.content}. </CardText>
//         </CardBody>
//       </Card>
//     </React.Fragment>
//   );
// };

// export default ArticleThumbnail;
