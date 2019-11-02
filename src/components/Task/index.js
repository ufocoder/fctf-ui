import React, { useEffect } from 'react';
import Typed from 'typed.js';

import './styles.css';

const DEFAUL_TITLE = 'Unknown';
const DEFAUL_DESCRIPTION = 'Select mission please..';
const CURSOR_TIMEOUT = 2000;
const CURSOR_SPEED = 20;

const Task = ({ task }) => {
    let refDescription;

    useEffect(() => {
        const options = {
            strings: task && task.description
                ? [task.description]
                : [DEFAUL_DESCRIPTION],
            typeSpeed: CURSOR_SPEED,
            onComplete: (self) => {
                setTimeout(() => {
                    if (self && self.cursor) {
                        self.cursor.style.display = 'none';
                    }
                }, CURSOR_TIMEOUT);
            }
        };

        const typed = new Typed(refDescription, options);

        return () => {
            typed.destroy();
        };
    });

    return (
        <div className="task">
            <div className="task__title">
                <strong>Mission:</strong> { (task && task.title) || DEFAUL_TITLE }
            </div>
            <div className="task__description">
                <span ref={(ref) => { refDescription = ref; }} />
            </div>
            {task && task.url ? (
                <div className="task__url">{task.url}</div>
            ) : null}
        </div>
    )
}

export default Task;