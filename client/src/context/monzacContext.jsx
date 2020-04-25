import React, { Component } from "react";

export const MonzacContext = React.createContext();

export class MonzacProvider extends Component {
  state = {
    createArticleTitle: "",
    createArticleDescription: "",
    catList: [],
    articleThumbList: [],
    isCreateNewArticleEnabled: false,
    NewArticleContent: "",
  };

  componentDidMount() {
    fetch("/get/category")
      .then((res) => res.json())
      .then((res) => {
        let catList = res.map((r) => r.name);
        this.setState({ catList: catList });
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
            }),
          updateNewArticleContent: (e) =>
            this.setState({
              NewArticleContent: e.target.value,
            }),
        }}
      >
        {this.props.children}
      </MonzacContext.Provider>
    );
  }
}
