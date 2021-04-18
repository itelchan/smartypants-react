import "./App.css";
import Dictionary from "./Dictionary";
import bannerImage from "../src/images/BannerSmartyPantsPanda.png";
//import { Ellipsis } from "react-css-spinners";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="card mb-3 thecentralcard">
        <img src={bannerImage} className="card-img-top embed-responsive-16by9 bannerImage" alt="TheSmartyPantsPandaImage" />
        <div className="card-body">
          <div className="card-text">

            <Dictionary />
          </div>
          <h4 className="footer">
            &nbsp;
            <a href="https://github.com/itelchan/smartypants-react" target="_blank" rel="noreferrer">
              Open-source code by:
            </a>
            <a href="https://commons.wikimedia.org/wiki/User:Itelchan" target="_blank" rel="noreferrer">
                Leticia Garcia &nbsp; 
            </a>

            <a href="https://de.linkedin.com/in/leticia-garcia-herrera-698554b3" target="_blank" rel="noreferrer">
              *LinkedIn &nbsp;
            </a>
         </h4>
       </div>
        </div>
      </div>
    </div>
  );
}
