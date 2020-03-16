import React from "react";
import ArticleCard from "./ArticleCard";

const ResultListCounter = ({ results }) => {
  return (
    <div className="ui container">
        {results.map((article, index) => {
          return <ArticleCard {...article} key={index}></ArticleCard>
        })}
    </div>
  );
};

export default ResultListCounter;
