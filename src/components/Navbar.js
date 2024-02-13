// import React from "react";
import "./styles/index.css";
import Dropdown from "./images/arrow-down.png";
import DropLine from "./images/Line 34.png";
import Tressure_box from "./images/e_treasure_box_.png";
// import { Link } from "react-router-dom";
// import "./pages/PurchasePages"

// const PurchasePage = () => (
//   <div>
//     {/* Contents of the Purchase page */}
//     <h1>Purchase Page</h1>
//   </div>

export default function Navbar() {
  return (
    <div className="body">
      <header>
        <nav>
          <strong className="header-text">DezignSntr</strong>
          <div>
          <ul>
            <li>Home</li>
            <li>My List</li>
            <li>History</li>
            <li>Chart</li>
            {/* <li className="pricing"><Link to="/purchase">Pricing</Link></li> */}
            <li className="pricing">Pricing</li>
          </ul>
          </div>
          <div>
            <img src={Dropdown} alt="" className="dropdown-button" />
          </div>
          <div>
            <img src={DropLine} alt="" className="dropline" />
          </div>
          <div>
            <button className="button">Login</button>
          </div>
        </nav>
        <div className="background">
          {/* <Link to="/PurchasePages"></Link> */}
          <img src={Tressure_box} alt="" className="Tressure_box" />
          <h1 className="purchase_text">Purchase credits</h1>
          <h2 className="purchase_add">
            Add user, brands, companies and purchase credits
          </h2>
        </div>
        <div>
          <button className="purchase_button">Purchase credits</button>
          <button className="purchase_button_2">Create list</button>
          <h2 className="purchase_credits">How to purchase credits</h2>
        </div>
      </header>
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
    </div>
  );
}
