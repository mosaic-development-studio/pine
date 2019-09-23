import { Header } from '../atomic/Header';
import { HEADER_SIZES } from '../constants';
import React from 'react';

export const SidePanelMenu = props => {
    const { pages, title } = props;

    return [
        <Header content={title} size={HEADER_SIZES.H1}/>,
        <ul>
            {pages.map(props => {
                const { text, url } = props;

                return (
                    <li>
                        <a href={url}>{text}</a>
                    </li>
                );
            })}
        </ul>
    ];
};