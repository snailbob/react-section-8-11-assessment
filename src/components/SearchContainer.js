import React from "react";
import Dropdown from "./Dropdown";
import SearchInput from "./SearchInput";

const SearchContainer = ({ countries, articles, onUpdate }) => {
  return (
    <div className="ui three column grid container message">
      <div className="column">
        <Dropdown
          options={countries}
          onSelect={data => onUpdate({ key: "country", value: data })}
        />
      </div>
      <div className="column">
        <Dropdown
          options={articles}
          onSelect={data => onUpdate({ key: "article", value: data })}
        />
      </div>
      <div className="column">
        <SearchInput
          onSearch={data => onUpdate({ key: "searchString", value: data })}
        />
      </div>
    </div>
  );
};

export default SearchContainer;
