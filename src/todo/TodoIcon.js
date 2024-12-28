import React from 'react';

import '../styles/TodoIcon.css';

const iconTypes = {
    check: (color) => (
        <path
            d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
            fill={color}
        />
    ),
    delete: (color) => (
        <path
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            fill={color}
        />
    ),
};

function TodoIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            <svg
                className='Icon-svg'
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 24 24`}
                width={24}
                height={24}
            >
                {iconTypes[type](color)}
            </svg>
        </span>
    );
}

export { TodoIcon };