import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Assets/Signin.css";
const Signin = () => {
  const [data, setData] = useState("");
  return (
    <div>
      <div className="div-1">
        <div className="laundryservice">Laundry Service</div>
        <div className="line-1">Doorstep Wash & Dryclean Service</div>
        <div className="line-2">Don’t Have An Account?</div>
        <Link to="/register">
          <button className="sidebutton">Register</button>
        </Link>
      </div>
      <div className="div-2">
        <form>
          <div className="signin">SIGN IN</div>

          <input
            className="input1"
            name="mobile"
            type="text"
            placeholder="Mobile / Email"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <div className="line1"></div>

          <input
            className="input2"
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <div className="line2"></div>
          <div className="forget">Forget Password?</div>
          <button className="signin-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
