import React from 'react';

export const Heading = props => {
    const { children, sizeAs, type } = props;

    return (
    <h1>{children}</h1>
    );
};