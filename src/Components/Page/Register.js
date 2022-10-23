import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Register and SignIn.css";



/* Register page is only for design, not for dynamic change*/



const Register = () => {
  let navigate = useNavigate();

  function HandleLogin(e) {
    e.preventDefault();
    navigate("/signin");
  }

  return (
    <div className="logincontainer">
      <div>
        <form className="formcontainer" onSubmit={HandleLogin}>
          <div className="formcontainertext">
          <h2 className="formcontainertextheading">Register</h2>
          <p>
            Already have Account?{" "}
            <NavLink to="/signin" className="headerlinktext">
              Sign In
            </NavLink>
          </p>

          </div>
          <input
            className="inputbox"
            type="name"
            placeholder="   Username"
            required
          ></input>
          <input
            className="inputbox"
            type="email"
            placeholder="   email"
            required
          ></input>
          <input
            className="inputbox"
            type="password"
            placeholder="   password"
            required
          ></input>
          <label>
            <input type="checkbox" className="checkboxs" />
            <span className="checkboxtext"> Keep me signed in</span>
          </label>
          <button type="submit">Sign in</button>
          <p className="textbottom">
            <span>or sign in with</span>
          </p>
          <div className="footerimgcontainer">
            <div>
              <img
                src={require("../Images/Icons/google.png")}
                className="footerimg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                src={require("../Images/Icons/facebook.png")}
                className="footerimg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                src={require("../Images/Icons/linkedin.png")}
                className="footerimg"
                alt=""
              ></img>
            </div>
            <div>
              <img
                src={require("../Images/Icons/twitter.png")}
                className="footerimg"
                alt=""
              ></img>
            </div>
          </div>
        </form>
      </div>

      <div className="imgcontainer">
        <img
          className="picture"
          src={require("../Images/mainimg/SignIn.png")}
          alt="loading"
        ></img>
      </div>
    </div>
  );
};

export default Register;
