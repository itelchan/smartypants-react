import React, { useState } from "react";

import pandaSquare from "../src/images/pandaSquare.png";

export default function Dictionary() {
  let [searchedWord, setSearchedWord] = useState("");

  function handleSearchedWord(event) {
    setSearchedWord(event.target.value);
  }

  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for ${searchedWord}`);
  }

  return (
    <div className="row searchingRow">
      <form
        className="col-sm-12 searchingForm"
        id="smartyPantsPandaForm"
        onSubmit={searchWord}
      >
        <div className="form-row justify-content-center searchingFormRow">
          <div className="col-5 mainImageCol">
            <img
              alt="mainImage"
              src={pandaSquare}
              className="rounded mainImage"
            />
          </div>
          <div className="col-5  searchingColumn">
            <h3>Let's look a word up:</h3>
            <input
              type="search"
              onChange={handleSearchedWord}
              className="form-control"
              autoFocus={true}
              id="inputWord"
              placeholder="Word to define..."
            />
          </div>
          <div className="col-2 buttonColumn">
            <button
              type="submit"
              className="btn btn-info mx-sm-2 mb-2 shadow searchButton"
            >
              I'll search 🐼
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
