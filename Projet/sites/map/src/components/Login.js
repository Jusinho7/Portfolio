import React from "react";
import Entrer from "./contents_login/Entrer";
import Img from "./contents_login/Img";
import "../assets/Login.css";

function Login() {
  return (
    <div className="login-content">
      <div className="left">
        <Img />
      </div>
      <div className="right">
        <Entrer />
      </div>
    </div>
  );
}

export default Login;
