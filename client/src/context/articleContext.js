import React, { useState, createContext } from "react";

export const ArticleContext = createContext();

export const ArticleStateProvider = (props) => {
  const [monzacState, setMonzacState] = useState([
    {
      name: "createArticleTitle",
      value: "",
      id: "",
    },
    {
      name: "createArticleDescription",
      value: "",
      id: "",
    },
    {
      name: "catList",
      value: [],
    },
    {
      name: "articleThumbList",
      value: [],
    },
  ]);

  return (
    <ArticleContext.Provider value={[monzacState, setMonzacState]}>
      {props.children}
    </ArticleContext.Provider>
  );
};
