import React from "react";
import Meanings from "./Meanings";
import Pronunciation from "./Pronunciation";

import "./Results.css";

export default function Results(props) {
  //console.log(props.dResults);

  if (props.dResults) {
    let word = props.dResults.word;

    return (
      <div className="Results">
        <div className="row wordRow justify-content-center">
          <div className="col-md-12 searchedWordColumn">
            <div className="row searchedWordRow">
              <div className="col-md-12 wordTitleText ">
                <section id="wordText">{word}</section>
              </div>
            </div>
            <Pronunciation results={props.dResults} />
          </div>
        </div>

        {props.dResults.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="Results">
      </div>
    );
  }
}
