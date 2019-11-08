import React from 'react';

import './style.css';


const Popup = ({onClick}) => {
  return (
    <div className="layout__popup">
      <div className="popup__overlay" />
        <div className="popup__content">
          <div className="popup__header">
            <h2 className="popup__title">Hello, colonizer</h2>
          </div>
          <div className="popup__body">
          < p className = "popup__text" > Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</p>
            <div className="popup__close" 
                  onClick={onClick}>
              close
            </div>
          </div>
          
      </div>
    </div>
  )
}

export default Popup;