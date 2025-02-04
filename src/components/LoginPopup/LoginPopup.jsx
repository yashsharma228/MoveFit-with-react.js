import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assests/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [curState, setCurState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{curState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="close-icon"
          />
        </div>

        <div className="login-popup-input">
          {curState === "Sign Up" && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button className="login-popup-btn" type="submit">
          {curState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {curState === "Sign Up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
          </div>
        )}

        <p className="toggle-text">
          {curState === "Sign Up" ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setCurState(curState === "Sign Up" ? "Login" : "Sign Up")}>
            {curState === "Sign Up" ? " Login here" : " Sign Up here"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
