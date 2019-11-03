import React from 'react';

import './styles.css';

export default ({ url }) => (
    <div className="result">
        <a href={url} className="result__link">Final URL</a>
    </div>
)
