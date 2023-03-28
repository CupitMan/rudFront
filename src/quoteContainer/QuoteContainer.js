import React from "react";
import Quote from "../quoteComponent/Quote";
import "./QuoteContainer.css";

function QuoteContainer(props) {
  return (
    <div className="quoteContainer">
      {props.data.data.map((value) => {
        return <Quote text={value.phrase} id={value.id} />;
      })}
    </div>
  );
}

export default QuoteContainer;
