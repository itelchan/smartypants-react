import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meanings(props) {
  let partOfSpeech = props.meaning.partOfSpeech;

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
                  <hr className="rounded" />
                  <section>{definition.definition}</section>
                </div>
              </div>
              <Examples examples={definition.example} />

              <Synonyms synonyms={definition.synonyms} />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
