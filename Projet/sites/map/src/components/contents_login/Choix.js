import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../pictures/sparkup.png";
import "../../assets/Entrer.css";

function Entre() {
  const navigate = useNavigate();

  const HandleLogin = () => {
    navigate("/Home");
  };

  return (
    <div className="EntrerContent">
      <div className="ambony">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Login</h1>
      </div>
      <form className="Entrer_content">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="submit">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button onClick={HandleLogin} type="submit">Login</button>
      </form>
    </div>
  );
}

export default Entre;
