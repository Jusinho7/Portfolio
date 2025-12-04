import React from "react";
import logo from "../../pictures/sparkup.png";
import "../../assets/Entrer.css";

function Int() {
  return (
    <div className="EntrerContent">
      <div className="ambony">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Sign in</h1>
      </div>
      <form className="Entrer_content">
        <div className="Name-content">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Surname" />
        </div>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="submit">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Int;
