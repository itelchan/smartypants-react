import React from "react";
import "./Pronunciation.css";

export default function Pronunciation(props) {
  if (props.results.phonetics) {
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
  } else {
    return (

      <div id="pronunciationDiv" >
      <audio
        id="pronunciationSoundControlers"
        controls
        src={null}
      >
        Browser does not support audio element.
      </audio>
      <span id="pronunciationWord">{null}</span>
    </div>


    );
  }
}

// In case h ref is used:
//<span id="pronunciationSound">
//<a href={phonetic.audio}>🔊</a>
//</span>
