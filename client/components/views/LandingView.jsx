import { fetchData } from '../../api';
import React from 'react';

const TEMP_BUTTON_CLICK_HANDLER = () => {
    console.log('hello world')
    return fetchData({
        url: '/api/articles',
        options: {
            method: 'POST'
        },
        success: console.log,
        fail: console.log
    })
};

export const LandingView = props => {
    const { articleLinks = [] } = props;

    return [
        <h1 key="articles-header">Articles</h1>,
        <ul key="articles-list">
            {articleLinks.map(link => (
                <li key={`${link.text}`}>
                    <a href={link.href}>{link.text}</a>
                </li>
            ))}
        </ul>,
        <button onClick={TEMP_BUTTON_CLICK_HANDLER}>Make request</button>
    ];
};