import React from 'react';

import './styles.css';

export default ({ percent = 0 }) => (
    <div className="progress">
        <div className="progress__caption">Progress is {percent}%</div>
        <div className="progress__box">
            <div className="progress__percent progress__percent--current" style={{ width: `${percent}%` }} />
            <div className="progress__percent progress__percent--other" style={{ width: `${100 - percent}%` }} />
        </div>
    </div>
)
