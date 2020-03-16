import React from "react";

const SearchInput = ({ onSearch }) => {
  const onKeyPress = e => e.key === "Enter" && onSearch(e.target.value);

  return (
    <div className="ui icon input fluid">
      <input
        type="text"
        onKeyPress={onKeyPress}
        placeholder="Search article ..."
      />
    <i className="search icon"></i>

    </div>
  );
};

export default SearchInput;
