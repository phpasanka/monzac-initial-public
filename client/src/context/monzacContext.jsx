import React, { Component } from "react";
import { GetCategories, GetArticleThumbList, TokenValidate } from '../commonFunc/helpers'
export const MonzacContext = React.createContext();


export class MonzacProvider extends Component {
  state = {
    createArticleTitle: "",
    selectedArticleCategory: "",
    createArticleDescription: "",
    catList: [],
    articleThumbList: [],
    isCreateNewArticleEnabled: false,
    newArticleContent: "",
    showLogin: false,
    showSignUp: false,
    currentUser: "",
    readArticle: false,
    currentArticle: {}
  };

  componentDidMount() {
    GetCategories((err, result) => {
      if (!err) {
        this.setState({ catList: result })
      } else {
        console.log(err)
      }
    })

    GetArticleThumbList((err, result) => {
      if (!err) {
        this.setState({ articleThumbList: result })
      }
      else {
        console.log(err)
      }
    });

    TokenValidate((err, result) => {
      if (!err) {
        this.setState({ currentUser: result })
      } else {
        console.log(err)
      }
    })
  }

  render() {
    const setEditArticleState = (callback) => {
      let x = {
        readArticle: false,
        isCreateNewArticleEnabled: true,
        newArticleContent: this.state.currentArticle.source,
        createArticleTitle: this.state.currentArticle.title,
        selectedArticleCategory: this.state.currentArticle.category,
        createArticleDescription: "",
      }
      return callback(null, x, this.state.currentArticle.title, this.state.currentArticle.category)
    }
    return (
      <MonzacContext.Provider
        value={{
          state: this.state,
          toggleIsCreateNewArticleEnabled: () =>
            this.setState({
              isCreateNewArticleEnabled: !this.state.isCreateNewArticleEnabled,
              newArticleContent: "",
              createArticleTitle: "",
              showLogin: false,
              readArticle: false
            }),
          reFreshArticleThumbList: () =>
            GetArticleThumbList((err, result) => {
              if (!err) {
                this.setState({ articleThumbList: result })
              }
              else {
                console.log('error raised while getting article thumblist')
              }
            }),
          updateNewArticleContent: (e) =>
            this.setState({
              newArticleContent: e.target.value,
            }),
          updateNewArticleTitle: (e) =>
            this.setState({
              createArticleTitle: e.target.value,
            }),
          updateSelectedCategory: (e) =>
            this.setState({
              selectedArticleCategory: e.target.value,
            }),
          showLogin: () =>
            this.setState({
              showLogin: !this.state.showLogin,
              newArticleContent: "",
              createArticleTitle: "",
              isCreateNewArticleEnabled: false,
              showSignUp: false,
            }),
          showSignUp: () =>
            this.setState({
              showSignUp: !this.state.showSignUp,
              newArticleContent: "",
              createArticleTitle: "",
              isCreateNewArticleEnabled: false,
              showLogin: false,
            }),
          showSignOut: () =>
            this.setState({
              currentUser: "",
              newArticleContent: "",
              createArticleTitle: "",
              isCreateNewArticleEnabled: false,
              showLogin: false,
            }),
          setCurrentUser: (user) =>
            this.setState({
              currentUser: user,
            }),
          hideArticleReader: () =>
            this.setState({
              readArticle: false,
            }),
          toggleArticleReader: () =>
            this.setState({
              readArticle: !this.state.readArticle,
            }),
          updateCurrentArticle: (article) =>
            this.setState({
              currentArticle: article,
            }),
          enableEditArticle: () =>
            setEditArticleState((err, result) => {
              if (!err) {
                this.setState(result)
              }
            }),
        }}
      >
        {this.props.children}
      </MonzacContext.Provider>
    );
  }
}
