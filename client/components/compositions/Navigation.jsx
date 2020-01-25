import React from 'react';

const NavigationListItem = props => {
    const { href, index, text } = props;

    return (
        <li>
            <a href={href} key={index}>{text}</a>
        </li>
    );
};

export const Navigation = props => {
    const { actions, items } = props;

    return (
        <nav>
            <ul>
                {items.map(NavigationListItem)}
            </ul>
            <ul>
                {actions.map(NavigationListItem)}
            </ul>
        </nav>
    );
};