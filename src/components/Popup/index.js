import React from 'react';

import './style.css';

const Popup = ({ onCloseClick }) => {
  return (
    <div className="layout__popup">
      <div className="popup__overlay">
        <div className="popup__content">
          <div className="popup__header">
            <h2 className="popup__title">Hello, colonizer!</h2>
          </div>
          <div className="popup__body">
            <p className = "popup__text"> 
              It's the FCTF #3<br/>CTF for frontend developers <br />So we have hidden 8 flags
            </p>
            <p className = "popup__text"> 
              The flag in one of tasks will be consist from several words You must replace spaces between with underscores. 
            </p>
            <p className = "popup__text"> 
              For example, here is a key: 
              <pre>lorem ipsum dolor sit amet</pre>
            </p>
            <p className = "popup__text"> 
              You must use flag above like the following:
              <pre>lorem_ipsum_dolor_sit_amet</pre>
            </p>
            <div className="popup__close" onClick={onCloseClick}>
              Play!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup;
