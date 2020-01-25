import React from 'react';

export const Navigation = props => {
    return (
        <nav>
            <ul>
                <li>{props.a}</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
        </nav>
    );
};