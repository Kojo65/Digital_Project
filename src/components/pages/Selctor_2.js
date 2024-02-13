import React from "react";
import "../styles/index.css";
import Dropdown from "../images/arrow-down.png";
import DropLine from "../images/Line 34.png";

export default function PurchasePages() {
  return (
    <>
      <div className="color">
        <header>
          <nav>
            <strong className="header-text">DezignSntr</strong>
            <ul>
            <li>Purchase</li>
          <li>MyList</li>
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
              <h1 className="brand_text">Brands, users</h1>
              <input
                type=""
                name=""
                placeholder="Email, brand name"
                className="input"
              />
              <button className="brand_button">Add user/brand</button>
            </div>
          </div>

          <div>
            <div className="background-color_1">
              <h1 className="my_list">My list</h1>
              <p className="list_text">manage list and purchase credits</p>
              <p className="brand_words">4 user selected </p>
              <button className="brand_buttons">Confirm</button>
              <input type="checkbox" className="checkbox" />
              <p className="list_email">Jameswort@gmail.com</p>
              <p className="total_list">0 credits</p>
              <hr />
              <input type="checkbox" className="list_circle_1"/>
              <p className="list_emails">Jameswort@gmail.com</p>
              <p className="total_lists">0 credits</p>

              <hr />
              <input type="checkbox" className="circles"/>
              <p className="emails">Jameswort@gmail.com</p>
              <p className="total">0 credits</p>
              <hr />
              <input type="checkbox" className="circles"/>
              <p className="emails_text">Jameswort@gmail.com</p>
              <p className="totals">0 credits</p>
              <hr />
              <h2 className="circles">JJ</h2>
              <p className="emails_text_1">Jameswort@gmail.com</p>
              <p className="totals_1">0 credits</p>
              <hr />
              <h2 className="circles">ER</h2>
              <p className="emails_text_2">Jameswort@gmail.com</p>
              <p className="totals_2">0 credits</p>
              <hr />
              <h2 className="circles">ER</h2>
              <p className="emails_text_3">Jameswort@gmail.com</p>
              <p className="totals_3">0 credits</p>
              <hr />
               <button className="_button">Load more </button>
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
