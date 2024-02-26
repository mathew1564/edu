import React ,{useEffect} from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  useEffect(() => {
    document.title = `404 Not Found`;
  }, []);
  return (
    <div style={{ color: "white", textAlign: "center", marginTop: "px" }}>
     <Link to='/'></Link>
      <img
        src={require(`../assets/img/404 Error-bro.png`)}
        alt="not page"
        width={425}
        className="mt-5"
      />
      <div>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
