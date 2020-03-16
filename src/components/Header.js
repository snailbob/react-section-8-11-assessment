import React from 'react';

export default function Header({ name }) {
  return(
    <h1 className="ui center aligned header">
      {name} News App
    </h1>
  );
}