import React, { Component } from "react";
import "../Header/header.css";
import logo from "../../2.png";
import Plus from "./Plus";
import History from "../History/History";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="backgroundrq">
          <div id="Home">
            <div className="container div1">
              <div className="centered">
                <h1 className="h11">
                  Welcome to <i>ProCompletion!</i>
                </h1>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="container">
            <p style={{ justifyItems: "left" }}>
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Cras feugiat lacinia nunc vitae
              sollicitudin.
              <br /> Vestibulum ante ipsum primis in faucibus orci
              <br /> luctus et ultrices posuere cubilia curae;
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur
              <br /> adipiscing elit. Cras feugiat lacinia nunc vitae
              sollicitudin.
              <br /> Vestibulum ante ipsum primis in faucibus orci
              <br /> luctus et ultrices posuere cubilia curae;
              <br />
            </p>
            <hr />
            <div class="card-holder">
              <a href="#About">
                <img
                  src="https://media.licdn.com/dms/image/C5603AQEyOxBQjdljaA/profile-displayphoto-shrink_200_200/0/1555052774260?e=2147483647&v=beta&t=WuBCsMQPtYCCJ5WCRRpdZ_iJ2W0wf-xUWxOitE2cANQ"
                  alt="description"
                  className="basimg1"
                />
              </a>
              <hr />
              <p>
                <small>
                  <small>
                    <small>
                      I am a certified Project Management Professional (PMP),
                      with a passion for improving processes and providing
                      better solutions to challenges.
                    </small>
                  </small>
                </small>
                <b></b>
              </p>
            </div>
            <hr />
            <div class="card-holder">
              <br />
              <a href="#AboutWood">
                <img
                  src={logo}
                  width="80px"
                  height="60px"
                  alt="description"
                  className="basimg"
                />{" "}
              </a>
              <hr />
              <p>
                <small>
                  <small>
                    <small>
                      ProCompletion Ltd is a Project Commisioning and
                      Completions Management Company.
                    </small>
                  </small>
                </small>
                <b></b>
              </p>
            </div>
          </div>
          <br />
          <br />
        </div>

        <div className="backgroundrw" id="About">
          <br />
          <br />
          <h1>
            <b>
              <i>About</i>
              <br />
              <br />
            </b>
          </h1>
          <Plus />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div
            style={{
              backgroundColor: "Blueviolet",
            }}
          ></div>
          <br />
          <br /> <br />
          <br /> <br />
          <br /> <br />
        </div>
        <br />
        <br />
        <div
          id="AboutWood"
          // style={{ marginBottom: "100px" }}
        >
          <History />
        </div>
      </>
    );
  }
}
