import React from 'react';

export const LandingView = props => {
    const { articleLinks } = props;

    return [
        <h1 key="articles-header">Articles</h1>,
        <ul key="articles-list">
            {articleLinks.map(link => (
                <li key={`${link.text}`}>
                    <a href={link.href}>{link.text}</a>
                </li>
            ))}
        </ul>
    ];
};