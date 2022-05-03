import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import '../styles/login.css'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="login">
        <div className="login_box">
          <h1 className="login_heading">Login</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <div className="login_forms">
              <div className="login_email">
                <input
                  type="email"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}

                />
              </div>
              <div className="login_email">
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="login_email">
                <button className="login_btn" type="Submit">Login</button>
              </div>
              <div className="p-1 box mt-2 text-center">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </div>
            </div>
            <div>
              <GoogleButton
              style={{borderRadius:'5px'}}
                className="gogle_btn m-4"
                type="dark"
                onClick={handleGoogleSignIn}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
