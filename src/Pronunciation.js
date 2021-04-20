import React from "react";

export default function Pronunciation(props) {
  return (
    <div className="row searchedWordRow">
      <div className="col-md-12 pronunciationWordText">
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div id="pronunciationDiv" key={index}>
              <audio
                id="pronunciationSoundControlers"
                controls
                src={phonetic.audio}
              >
                Browser does not support audio element.
              </audio>
              <span id="pronunciationWord">{phonetic.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// In case h ref is used:
//<span id="pronunciationSound">
//<a href={phonetic.audio}>🔊</a>
//</span>
