import { LandingView } from '../views/LandingView';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const Application = () => {
    return (
        <BrowserRouter>
            <LandingView />
        </BrowserRouter>
    );
};