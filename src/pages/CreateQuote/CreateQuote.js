import "./CreateQuote.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateQuote() {
  let navigate = useNavigate();
  const [inputData, setInputData] = useState("");

  function changeInput(event) {
    setInputData(event.target.value);
  }

  function btnClickAction() {
    const headers = {
      "Access-Control-Allow-Origin": "http://api.cupitman.ru/postdata",
    };
    axios.post(
      "http://api.cupitman.ru/postdata",
      { data: inputData },
      { headers: headers }
    );
    navigate("/");
  }

  return (
    <div className="container">
      <form className="form">
        <label className="label">СОЗДАТЬ НОВУЮ ЦИТАТУ</label>
        <textarea className="input" onChange={changeInput}></textarea>
        <button onClick={btnClickAction} type="submit" className="submitBtn">
          СОЗДАТЬ
        </button>
      </form>
    </div>
  );
}

export default CreateQuote;
