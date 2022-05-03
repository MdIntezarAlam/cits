import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import '../styles/signup.css'



const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <div className="sign">
        <div className="sign_box">
          <h1 className="sign_heading">Signup</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <form  onSubmit={handleSubmit}>
            <div className="sign_forms">
              <div className="sigin_email">
                <input
                  type="email"
                  placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}

                />
              </div>
              <div className="sigin_email">
                <input
                  type="password"
                  placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="sigin_email">
                <button className="sigin_btn" type="Submit">Siginup</button>
              </div>
            </div>
          </form>
          <div className="p-2 box mt-3 text-center">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
