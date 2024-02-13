import React from 'react'
import Dropdown from "../images/arrow-down.png";
import DropLine from "../images/Line 34.png";
import Messages from  "../images/_b_megaphone_14.png"
export default function Chat() {
  return (
    <>
    <div className='colored'>
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
          <div className='colour'>
            <h1 className='my_list'>Messages</h1>
            <hr />
            <img src={Messages} alt="message"  className='text'/>
            <h1 className='purchase_text'>Need Admin Support ?</h1>
            <p className='purchase_add'>Have any problem with purchasing credits or need general support ?</p>
            <button className='support'>Text support</button>
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
  )
}
