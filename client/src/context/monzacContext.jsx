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
  };

  componentDidMount() {
    fetch("/get/category")
      .then((res) => res.json())
      .then((res) => {
        let catList = res.map((r) => r.name);
        this.setState({ catList: catList });
      });

    //getArticleThumbList = () => {
    fetch("/api/article/thumbist")
      .then((res) => res.json())
      .then((res) => {
        let articleThumbList1 = res.map(
          // (value, index) => {
          //   title: value.title;
          //   content: value.content;
          // }
          (t) => t.title,
          (t) => t.content
        );
        this.setState({ articleThumbList: articleThumbList1 });
        console.log(articleThumbList1);

        //return articleThumbList;
      });
    //};
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
          //
        }}
      >
        {this.props.children}
      </MonzacContext.Provider>
    );
  }
}
//
