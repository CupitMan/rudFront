import React from "react";
import "./Quote.css";

function Quote(props) {
  let imageNumber = Math.floor(Math.random() * 3 + 1);
  return (
    <div className="wrapperQuote">
      <blockquote>
        <p>{props.text}</p>
      </blockquote>
      <div className="footer">
        <div className="author">Руденко Кристина</div>
        <img className="image" src={require(`../images/${imageNumber}.jpg`)} />
      </div>
    </div>
  );
}

export default Quote;
