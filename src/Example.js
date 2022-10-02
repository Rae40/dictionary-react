import React from "react";
import "./Example.css"

export default function Example(props){
  if (props.example){
    return (
      <div className="Example">
        <span>{props.example}</span>
      </div>
    );
  } else {
    return null;
  }
}