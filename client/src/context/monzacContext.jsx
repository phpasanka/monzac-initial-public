import React, { Component } from "react";
export const MonzacContext = React.createContext();

const extractContent = (s) => {
  let span = document.createElement('span');
  span.innerHTML = s;
  return span.textContent || span.innerText;
}

const getArticleThumbList = ((callback) => {
  try {
    fetch("/api/article/thumbist")
      .then((res) => res.json())
      .then((res) => {
        //console.log(res)

        let articleThumbList1 = res.map((value) => ({
          title: value.title,
          content: extractContent(value.preview),
          author: value.author,
          docId: value.docId
        }));
        return callback(null, articleThumbList1)
      });
  }
  catch (err) {
    return callback('error', null)
  }
})

// const validateEmail = (email) => {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

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
    fetch("/get/category")
      .then((res) => res.json())
      .then((res) => {
        let catList = res.map((r) => r.name);
        this.setState({ catList: catList });
      });
    getArticleThumbList((err, result) => {
      if (!err) {
        this.setState({ articleThumbList: result })
      }
      else {
        console.log('error raised while getting article thumblist')
      }
    });

    //if (this.state.currentUser !== "") {
    fetch('/api/user/validateToken')
      .then((res) => res.json())
      .then((res) => {
        this.setState({ currentUser: res })
      })
    //}
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
              showLogin: false,
              readArticle: false
            }),
          reFreshArticleThumbList: () =>
            getArticleThumbList((err, result) => {
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
        }}
      >
        {this.props.children}
      </MonzacContext.Provider>
    );
  }
}
