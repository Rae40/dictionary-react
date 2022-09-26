import React from "react";

export default function Example(props){
  console.log({props})
  if (props.example){
    return (
      <div className="Example">
        <span>{props.example}</span>;
      </div>
    );
  } else {
    return null;
  }
}