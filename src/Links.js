import { Link } from "react-router-dom";
import "./Links.css";

function Links() {
  return (
    <div className="linksContainer">
        <Link to="/" className="link">
          ЦИТАТКИ
        </Link>
        <Link to="/createQuote" className="link">
          СОЗДАТЬ ЦИТАТКУ
        </Link>
    </div>
  );
}

export default Links;
