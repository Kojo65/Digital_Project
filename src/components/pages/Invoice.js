import React from "react";
import "../styles/index.css";
import Dropdown from "../images/arrow-down.png";
import DropLine from "../images/Line 34.png";
import Import from "../images/import.png";

export default function Invoice() {
  return (
    <>
      {" "}
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
        </header>
        <div>
          <h1 className="history_text">Purchase history</h1>

          <p className="history">
            Track all your payments and credit purchases.
          </p>
        </div>
        <div className="background-color">
          <input
            type=""
            name=""
            placeholder="Search with invoice number or date "
            className="invoice_input"
          />
          <input type="checkbox" className="invoice_checkbox" />
          <h2 className="invoice_number">invoice number</h2>
          <h2 className="Credits_number">Credits</h2>
          <h2 className="Amount_number">Amount</h2>
          <h2 className="Date_number">Date</h2>
          <h2 className="Download">Download</h2>
           <hr className="First_line" /> 
          <input type="checkbox" className="invoice" />
          <h2 className="invoices">#invoice number</h2>
          <h2 className="credits_number">2000</h2>
          <h2 className="amount_number">$500</h2>
          <h2 className="date_number">02/07/23</h2>
          <img src={Import} alt="download" className="download" />
          <hr  className="Second_line"/> 
          <input type="checkbox" className="invoice_1" />
          <h2 className="invoice_2">#invoice number</h2>
          <h2 className="credit_number">2000</h2>
          <h2 className="amounts_number">$500</h2>
          <h2 className="date_numbers">02/07/23</h2>
          <img src={Import} alt="download" className="downloads" />
         <hr className="Third_line"/> 
          <input type="checkbox" className="invoice_4" />
          <h2 className="invoice_3">#invoice number</h2>
          <h2 className="credit_numbers">2000</h2>
          <h2 className="amount_numbers">$500</h2>
          <h2 className="dates_number">02/07/23</h2>
          <img src={Import} alt="download" className="downloading" />
           <hr className ="Fourth_line"/>
          <input type="checkbox" className="invoice_5" />
          <h2 className="invoice_6">#invoice number</h2>
          <h2 className="credit">2000</h2>
          <h2 className="amount">$500</h2>
          <h2 className="dates">02/07/23</h2>
          <img src={Import} alt="download" className="downloadings" />
           <hr className="Firth_line"/> 
          <input type="checkbox" className="invoice_7" />
          <h2 className="invoice_8">#invoice number</h2>
          <h2 className="credits">2000</h2>
          <h2 className="amounts">$500</h2>
          <h2 className="date">02/07/23</h2>
          <img src={Import} alt="download" className="downloaded" />
           <hr  className="Sixth_line"/> 
          <button className="more">Load more </button>
        </div>
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
