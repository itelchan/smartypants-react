import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="row imagesRow justify-content-center">
        {props.photos.map(function (photo, index) {
          return (
              <div key={index} className="col-sm-4 imageCol">
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className=" mx-auto img-fluid resultImg"
                    alt={photo.src.landscape}
                  />
                </a>
              </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
