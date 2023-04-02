import "./App.css";
import QuoteContainer from "./quoteContainer/QuoteContainer";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([0]);

  useEffect(() => {
    if (data[0] == 0) {
      axios.get("https://api.cupitmann.ru/allphrases").then((response) => {
        setData(response.data);
      });
    }
  });

  if (data[0] != 0) {
    return (
      <div className="App">
        <QuoteContainer data={data} />
      </div>
    );
  }
}

export default App;
