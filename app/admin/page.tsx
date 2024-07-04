import React from "react";
import "./style.css";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginPage = () => {
  return (
    <div className="box">
      <div className="wrapper">
        <div className="title">
          <span>Admin Login</span>
        </div>
        <form action="#">
          <div className="row">
            <div className="icon">
              <MdEmail />
            </div>
            <input type="text" placeholder="Email" required />
          </div>
          <div className="row">
            <div className="icon">
              <FaLock />
            </div>
            <input type="password" placeholder="Password" required />
          </div>
          <div className="row button">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
