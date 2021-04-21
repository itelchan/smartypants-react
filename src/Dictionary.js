import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";

import axios from "axios";

import "./Dictionary.css";

import pandaSquare from "../src/images/pandaSquare.png";

export default function Dictionary() {
  let [searchedWord, setSearchedWord] = useState("");
  let [definitionResults, setDefinitionResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [mainPic, setMainPic] = useState(pandaSquare);

  function handleSearchedWord(event) {
    setSearchedWord(event.target.value);
  }

  function handleDictResponse(response) {
    let responseOfDefinitions = response.data[0];
    // complete response
    // console.log(response.data[0]);

    // One element
    //console.log(response.data[0].meanings[0].definitions[0].definition);

    setDefinitionResults(responseOfDefinitions);
  }

  function handlePrexelsResponse(response) {
    // complete response
    //console.log(response.data);
    setPhotos(response.data.photos);

    //console.log(response.data.photos[0].src.medium);
    if (response.data.photos.length !== 0) {
      setMainPic(response.data.photos[0].src.medium);
    }
    else{

      setMainPic(pandaSquare);  
    }
  }

  function searchWord(event) {
    event.preventDefault();
    //alert(`Searching for ${searchedWord}`); //TEST

    // Documentation: https://dictionaryapi.dev/
    let apiURL = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
    let buildApiURL = apiURL + searchedWord;
    axios.get(buildApiURL).then(handleDictResponse);

    /* Pexel */
    const pexelsAPIKey =
      "563492ad6f9170000100000126265f83f06248d095902e5d4ff4cc5b";
    let pexelsURL = `https://api.pexels.com/v1/search?query=${searchedWord}&per_page=9`;
    const header = { Authorization: `Bearer ${pexelsAPIKey}` };
    axios.get(pexelsURL, { headers: header }).then(handlePrexelsResponse);
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
            <img alt="mainImage" src={mainPic} className="rounded mainImage" />
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

      <Results dResults={definitionResults} />
      <Photos photos={photos} />
    </div>
  );
}
