import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [urldata, seturldata] = useState("all?fields=name,europe,flag");
  const [error, seterror] = useState(null);


  const Url = `https://restcountries.com/v2/${urldata}`;




  useEffect(() => {
    const fetchdata = () => {
      try {
        setloading(true);
        axios.get(Url).then((res) => {
          setdata(res.data);
        });
      } catch (error) {
        console.log("ERROR");
        seterror(error);
      }
      setloading(false);
    };
    fetchdata();
  }, [urldata, Url]);



  const Handleall = () => {
    seturldata("all?fields=name,europe,flag");
  };
  const Handleasia = () => {
    seturldata("region/asia");
  };
  const Handleeurope = () => {
    seturldata("region/europe");
  };


  
  return (
    <>
      {loading ? (
        <div className="loading">loading.....</div>
      ) : (
        <>
          <div>
            <nav className="navbar">
              <label
                className="navbar-toggle"
                id="js-navbar-toggle"
                for="chkToggle"
              >
                <i className="fa fa-bars"></i>
              </label>
              <NavLink to="/" className="logo">
                Countries
              </NavLink>
              <input type="checkbox" id="chkToggle"></input>
              <ul className="main-nav" id="js-menu">
                <li>
                  <NavLink onClick={Handleall} className="nav-links">
                    All
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={Handleasia} className="nav-links">
                    Asia
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={Handleeurope} className="nav-links">
                    Europe
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="cards">
            {data &&
              data.map((item, i) => (
                <div key={i}>
                  <div className="card">
                    <div>
                      <img className="flagimg" src={item.flag} alt=""></img>
                    </div>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.region}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

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
          <div className="footertext">
            <p>Example@gmail.com</p>
            <p>copyright 2020 Name.ALL rights reserved.</p>
          </div>
        </>
      )}
      {error && <div>{error.message}</div>}
    </>
  );
};

export default Home;
