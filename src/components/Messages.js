import React from "react";
import "./styles/index.css";
import Dropdown from "./images/arrow-down.png";
import DropLine from "./images/Line 34.png";
import Brand_image from "./images/_b_megaphone_14oct22 1.png";


export default function Messages() {
  return (
    <>
      
      <div className="body">
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
        <div className="Brand_body">
          <h1 className="Brand_text">Brands,user</h1>
          <input
            type=""
            name=""
            placeholder="Enter email"
            className="Brand_input"
          />
          <button className="Brand_button">Add user/brand</button>
        </div>
        <div>
          <img src={Brand_image} alt="" className="Brand_image" />
          <h1 className="Brand">ITS QUIET IN HERE</h1>
          <p className="Brand_email_text">
            Enter emails to add brands, companies, Start-ups and purchase
            credits with ease
          </p>
          <button className="buttons">Add user/brand</button>
        </div>
        <footer>
          <strong className="brand-footer">DezignSntr</strong>
          <ul className="brand-list">
            <li>Instergram</li>
            <li>Linkdin</li>
            <li>Behance</li>
            <li>Dribble</li>
          </ul>
        </footer>
      </div>
    </>
  );
}
