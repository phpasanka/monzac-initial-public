import React, { Component } from "react";
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
    currentUser: ""
  };

  componentDidMount() {
    fetch("/get/category")
      .then((res) => res.json())
      .then((res) => {
        let catList = res.map((r) => r.name);
        this.setState({ catList: catList });
      });

    fetch("/api/article/thumbist")
      .then((res) => res.json())
      .then((res) => {
        let articleThumbList1 = res.map((value) => ({
          title: value.title,
          content: value.content,
        }));
        this.setState({ articleThumbList: articleThumbList1 });
      });
  }

  render() {
    return (
      <MonzacContext.Provider
        value={{
          state: this.state,
          toggleIsCreateNewArticleEnabled: () =>
            this.setState({
              isCreateNewArticleEnabled: !this.state.isCreateNewArticleEnabled,
              newArticleContent: "",
              createArticleTitle: "",
              showLogin: false
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
          setCurrentUser: (user) =>
            this.setState({
              currentUser: user,
            }),
        }}
      >
        {this.props.children}
      </MonzacContext.Provider>
    );
  }
}
