import React from "react";

export default function Meanings(props) {
  let partOfSpeech = props.meaning.partOfSpeech;

  function examplesFunc(respExample) {
    let example = null;

    if (respExample) {
      example = respExample;
    }

    if (example) {
      return (
        <div className="row searchedWordRow">
          <div className="col-md-12 exampleText ">
            <section>{`Example: ${example} `}</section>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="row resultRow resultWrap justify-content-center">
      <div className="col-md-12 resultColumn">
        <div className="row searchedWordRow">
          <div className="col-md-12 definitionTypeText ">
            <section>{partOfSpeech}</section>
          </div>
        </div>

        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="row searchedWordRow">
                <div className="col-md-12 definitionText ">
                  <br />
                  <section>{definition.definition}</section>
                </div>
              </div>
              {examplesFunc(definition.example)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
