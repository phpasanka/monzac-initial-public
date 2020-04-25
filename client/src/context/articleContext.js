import React, { useState, createContext } from "react";

export const ArticleContext = createContext();

export const ArticleStateProvider = (props) => {
  // const { monzacState, setMonzacState } = useState({
  //   createArticleTitle: "",
  //   createArticleDescription: "",
  //   catList: [],
  //   articleThumbList: [],
  //   isCreateNewArticleEnabled: true,
  // });
  const [monzacState, setMonzacState] = useState([
    "", //createArticleTitle ==> 0
    "", //createArticleDescription ==> 1
    [], //catList ==> 2
    [], //articleThumbList ==> 3
    false, //isCreateNewArticleEnabled ==> 4
    "", //NewArticleContent ==> 5
  ]);

  return (
    <ArticleContext.Provider value={[monzacState, setMonzacState]}>
      {props.children}
    </ArticleContext.Provider>
  );
};
