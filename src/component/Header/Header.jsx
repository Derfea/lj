import React from "react";
import logo from "../../2-Photoroom.png";
import "./header.css";
import logo2 from "../../file.png";

export default function Header() {
  return (
    <ul>
      <br />
      <li>
        <a href="#Home" className="alink">
          <img src={logo} alt="logo" height="65px" className="logo1" />
        </a>
      </li>
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
      <li>
        <img
          src={logo2}
          alt="logo2"
          height="65px"
          width="55px"
          className="logo2"
        />
      </li>
    </ul>
  );
}
