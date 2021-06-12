import React from "react";
import Header from '../../components/Header/Index'
import DynamicList from '../../components/DynamicList'

export default function Challenge() {
  return (


    
    <React.Fragment>
      <Header />
      <ul className="list-group">
      <DynamicList
        text="Mike"
        text2="mike@server.com"
        className="list-group-item"
      />
      <DynamicList
        text="John"
        text2="john@server.com"
        className="list-group-item"
      />
      <DynamicList
        text="Bob"
        text2="bob@server.com"
        className="list-group-item"
      />
      <DynamicList
        text="Max"
        text2="max@server.com"
        className="list-group-item"
      />
      </ul>
      
    </React.Fragment>
  );
}

