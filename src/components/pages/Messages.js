import React from "react";
import Dropdown from "../images/arrow-down.png";
import DropLine from "../images/Line 34.png";
import User from "../images/Rectangle 3246.png"
import Plus from "../images/add.svg"

export default function Selector() {
  return (
    <>
      <div className="coloured">
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
          <div className="colour">
          <h1 className='my_list'>Messages</h1>
            <hr />
            <div className="Live">
                <div className="image">
                <img src={User} alt="user"/>
                <h2 className="name"> James Elton</h2>
                <div className="green"></div>
                <h3 className="active">Active</h3>
                </div>
                <p className="today">Today 10:15am</p>
            </div>
            <div className="files">
                <div className="file">
                <h2 className="gmail_text">Should i send the files to your gmail directly</h2>
                <p className="time">10:15am</p>
                <div className="account">
                <h2 className="gmail">Should i send the files to your gmail directly</h2>
                <p className="times">10:15am</p>
                </div>
                <div className="images">
                    <div className="add_plus">
                    <img src={Plus} alt="" className="plus" />
                    <h3 className="plus_text">Write message</h3>
                    </div>
                </div>
                </div>
            </div>
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
