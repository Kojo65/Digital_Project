import React from "react";
import "../styles/index.css";
import Dropdown from "../images/arrow-down.png";
import DropLine from "../images/Line 34.png";
import Arrows from "../images/arrow-2.png";

export default function AmountPurchase() {
  return (
    <>
      <div className="color">
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

          <div>
            <div className="background">
              <h1 className="brand_text">Enter amount to purchase</h1>
              <input
                type=""
                name=""
                placeholder="Enter amount in $"
                className="input_email"
              />
              <img src={Arrows} alt="Arrow" className="arrow" />
              <input
                type=""
                name=""
                placeholder="Credits to purchase for each "
                className="Credits"
              />
              <button className="Make_button">Make payment </button>
            </div>

            <div>
              <div className="background-colors">
                <h1 className="my_list">Your list </h1>
                <button className="add_button">Add more</button>
                <p className="list_text">
                  Credits purchased will be distributed equally
                </p>
                <input type="checkbox" className="checkbox" />
                <p className="list_email">Jameswort@gmail.com</p>
                <p className="total_list">0 credits</p>
                <hr />
                <input type="checkbox" className="checkbox" />
                <p className="checkbox_email">Jameswort@gmail.com</p>
                <p className="check">0 credits</p>
                <hr />
                <input type="checkbox" className="checkbox" />
                <p className="emails_texts">Jameswort@gmail.com</p>
                <p className="totalcheck">0 credits</p>
                <hr />
                <p className="users_total">List total : 4 users</p>
                <p className="users_totals">Credit total : 0</p>
              </div>
            </div>
          </div>
        </header>
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
    </>
  );
}
