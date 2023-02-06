import React from "react";
import Faq from "./components/Faq";
import laptop from "./images/laptop.jpg";

function App() {
  return (
    <div className="card">
      <div className="card__text">
        <Faq />
      </div>
      <div className="card__image">
        <img src={laptop} alt="" />
      </div>
    </div>
  );
}

export default App;
