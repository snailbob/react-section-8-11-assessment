import React from "react";

const Dropdown = ({ options, onSelect }) => {
    const onChange = e => onSelect(e.target.value);

  return (
    <select
      className="ui selection dropdown fluid"
      onChange={onChange}
    >
      {options.map(item => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
