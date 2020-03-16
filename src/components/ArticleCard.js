import React from "react";

const ArticleCard = ({ url, title, description, urlToImage }) => {
  return (
    <div className="column">
      <div className="ui fluid card">
        <div className="content">
            <img alt="title" className="ui small left floated image" src={urlToImage} />
            <h3 style={{marginTop: '0'}}>
                <strong className="middle aligned content">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
                </strong>
            </h3>
            <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
