import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginn.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="containerss">
        <button className="close-btn" onClick={() => navigate("/")}>✖</button>
        <h2>{isLogin ? "Login Form" : "Signup Form"}</h2>
        <div className="toggle-buttons">
          <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>Signup</button>
        </div>

        {isLogin ? (
          <>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <a href="#" className="forgot">Forgot password?</a>
            <button className="submitt">Login</button>
          </>
        ) : (
          <>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm password" />
            <button className="submitt">Signup</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
