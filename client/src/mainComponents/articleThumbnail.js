// article display partially
import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const ArticleThumbnail = () => {
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle className="">Article Title goes here</CardTitle>
          <CardText>
            Brief article content place is going to place here. this should be
            first 300 letters from original article.{" "}
          </CardText>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default ArticleThumbnail;
