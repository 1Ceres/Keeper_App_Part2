import React from "react";
// className (styling css) in last possible instance, in last function which is called

function Create(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Create;
