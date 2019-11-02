import React from 'react';

import './styles.css';

export default ({ percent = 0 }) => (
    <div className="progress">
        <div className="progress__caption">Progress is {percent}%</div>
        <div className="progress__box">
            <div className="progress__percent" style={{ width: `${percent}%` }} />
        </div>
    </div>
)
