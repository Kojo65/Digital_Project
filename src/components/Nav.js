import React from 'react'
import "./styles/index.css";
import Dropdown from "./images/arrow-down.png";
import DropLine from "./images/Line 34.png";

export default function Nav() {
  return (
    <>
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
    </>
  )
}
