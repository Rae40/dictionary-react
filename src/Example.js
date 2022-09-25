import React from "react";

export default function Example(props){
  console.log(props.example)
    if (props.example){
    return (
      <div className="Example">
        {props.example.map(function (example, index) {
          return <span key={index}>{example}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
