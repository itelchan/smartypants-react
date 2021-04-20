import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="row searchedWordRow">
        <div className="col-md-12 synonymsText ">
          <br />
          <section className="synonymsTitle">Synonyms: </section>
          <section>{`${props.synonyms} `}</section>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

// with a loop

//<div className="col-md-12 synonymsText ">
//  <br />
//  <section className="synonymsTitle">Synonyms: </section>
//  <ul className="synonymsList">
//    {props.synonyms.map(function (synonym, index) {
//      return <li key={index}>{synonym}</li>;
//    })}
//  </ul>
//</div>;
