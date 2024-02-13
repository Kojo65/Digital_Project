import React from "react";
import Dropdown from "../images/arrow-down.png";
import DropLine from "../images/Line 34.png";
import congratulation from "../images/_b_megaphone_344.png.png";
export default function Congratulation() {
  return (
    <>
      <div className="coloured">
        <header>
          <nav>
            <strong className="header-text">DezignSntr</strong>
            <ul>
              <li>Home</li>
              <li>My List</li>
              <li>History</li>
              <li>Chart</li>
              <li className="pricing">Pricing</li>
            </ul>
            <div>
              <img src={Dropdown} alt="" className="dropdown-button" />
              <img src={DropLine} alt="" className="dropline" />
              <button className="button">Login</button>
            </div>
          </nav>
          <div className="colour">
            <img src={congratulation} alt="" className="imgfluid" />
            <h1 className="text_word">Congratulation</h1>
            <p className="demo">
              You have successfully purchased 20,000 credits for an amount $500
            </p>
            <button className="demo_button">Purchase More</button>
            <button className="demo_button_1">Download invoice</button>
          </div>
        </header>
      </div>
      <footer className="body_footer">
        <strong className="header-footer">DezignSntr</strong>
        <ul className="list">
          <li>Become a desginer</li>
          <li>Sign up as agency</li>
          <li>Instergram</li>
          <li>Linkdin</li>
          <li>Behance</li>
          <li>Dribble</li>
        </ul>
      </footer>
    </>
  );
}
