import React from "react";

export default function Examples(props) {
  if (props.examples) {
    return (
      <div className="row searchedWordRow">
        <div className="col-md-12 exampleText ">
          <section>{`${props.examples} `}</section>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
