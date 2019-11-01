import { action } from '@storybook/addon-actions';
import { Navigation } from '../client/js/components/presentational';
import React from 'react';

const ApplicationControls = () => (
    <ul>
        <li>
            <a href="#">A</a>
        </li>
        <li>
            <a href="#">B</a>
        </li>
        <li>
            <a href="#">C</a>
        </li>
    </ul>
);

const UserControls = () => (
    <ul>
        <li>
            <a href="#">X</a>
        </li>
        <li>
            <a href="#">Y</a>
        </li>
        <li>
            <a href="#">Z</a>
        </li>
    </ul>
);

export const TopLevelNavigation = () => (
    <Navigation
        ApplicationControls={ApplicationControls}
        UserControls={UserControls}
    />
);

export default { title: 'Navigation' };