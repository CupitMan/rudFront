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
      "Access-Control-Allow-Origin": "https://api.cupitmann.ru/postdata",
    };
    axios.post(
      "https://api.cupitmann.ru/postdata",
      { data: inputData },
      { headers: headers }
    );
    navigate("/");
  }

  return (
    <div className="createquote">
      <div className="container">
        <form className="form">
          <label className="label">СОЗДАТЬ НОВУЮ ЦИТАТУ</label>
          <textarea
            className="input"
            onChange={changeInput}
            placeholder="Напиши сюда умную мысль..."
          ></textarea>
          <button onClick={btnClickAction} type="submit" className="submitBtn">
            СОЗДАТЬ
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateQuote;
