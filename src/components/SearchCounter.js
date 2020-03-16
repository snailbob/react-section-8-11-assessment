import React from "react";

const SearchCounter = ({ count }) => {
  return (
    <div className="ui message">
      <p>
        <strong>Search Results!</strong>
      </p>
      Found {count} articles
    </div>
  );
};

export default SearchCounter;
