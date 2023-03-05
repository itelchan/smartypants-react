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
     console.log(response.data[0]);

    // One element
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setDefinitionResults(responseOfDefinitions);

  }

  function handleImagesResponse(response) {
    // complete response
    console.log(response.data);
    setPhotos(response.data.photos);

    //console.log(response.data.photos[0].src.original);
    if (response.data.photos.length !== 0) {
      setMainPic(response.data.photos[0].src.original);
    }
    else{
      setMainPic(pandaSquare);  
    }
  }


  function catchFunction() {
    //console.log("catchfunction");
    setDefinitionResults(null);    
  }

  function searchWord(event) {
    event.preventDefault();
    //alert(`Searching for ${searchedWord}`); //TEST
    let apiURL = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
    genericHandle(apiURL);
  }

  function handleSpanishAlternate(event){
    event.preventDefault();
    let apiURL = "https://api.dictionaryapi.dev/api/v2/entries/es/";
    genericHandle(apiURL);
  }

  function handleGermanAlternate(event){
    event.preventDefault();
    let apiURL = "https://api.dictionaryapi.dev/api/v2/entries/de/";
    genericHandle(apiURL);
  }

  function handleFrenchAlternate(event){
    event.preventDefault();
    let apiURL = "https://api.dictionaryapi.dev/api/v2/entries/fr/";
    genericHandle(apiURL);

  }


  function genericHandle(apiURL){
    // Documentation: https://dictionaryapi.dev/
    let buildApiURL = apiURL + searchedWord;
    axios.get(buildApiURL).then(handleDictResponse).catch(catchFunction);

    /* Images */
    let apiKey = "c3aca8dt904b8823ba1b2dff34c60c1o";
    let apiImagesURL = `https://api.shecodes.io/images/v1/search?query=${searchedWord}&key=${apiKey}`;
    const header = { Authorization: `Bearer ${apiKey}` };
    axios.get(apiImagesURL, { headers: header }).then(handleImagesResponse);

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
          <div className="col-4  searchingColumn">
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
          <div className="col-3 buttonColumn">
            <button
              type="submit"
              name="searchEnglish"
              className="btn btn-info mx-sm-2 mb-2 shadow searchButton"
            >
              I'll search 🐼 🇺🇸
            </button>
            <button
              onClick={handleSpanishAlternate.bind(this)}
              name="searchSpanish"
              className="btn btn-info mx-sm-2 mb-2 shadow searchButton"
            >
               ¡Buscaré!  🐼 🇲🇽 
            </button>               
            <button
              onClick={handleGermanAlternate.bind(this)}
              name="searchGerman"
              className="btn btn-info mx-sm-2 mb-2 shadow searchButton"
            >
              Ich suche 🐼 🇩🇪
            </button>   
            <button
              onClick={handleFrenchAlternate.bind(this)}
              name="searchFrench"
              className="btn btn-info mx-sm-2 mb-2 shadow searchButton"
            >
              Rechercher🐼🇫🇷
            </button>   
          </div>
        </div>
      </form>

      <Results dResults={definitionResults} />
      <Photos photos={photos} />
    </div>
  );
}
