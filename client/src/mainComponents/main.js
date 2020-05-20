import React, { Component } from "react";
import NewArticle from "./newArticle";
import SignIn from '../user/signIn'
import SignUp from '../user/signUp'
import ArticleThumbnail from "./articleThumbnail";
import { Button } from "reactstrap";
import { MonzacContext } from "../context/monzacContext";

class Main extends Component {
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
            ) : context.state.showLogin ? (<SignIn></SignIn>) : context.state.showSignUp ? (<SignUp></SignUp>) : null}

            {context.state.articleThumbList.map((value, index) => {
              return <ArticleThumbnail content={value}></ArticleThumbnail>;
            })}
          </React.Fragment>
        )}
      </MonzacContext.Consumer>
    );
  }
}

export default Main;
