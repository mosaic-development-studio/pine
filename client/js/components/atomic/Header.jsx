import { HEADER_SIZES } from '../constants';
import React from 'react';

export const Header = props => {
    const { size, content } = props;

    switch (size) {
        case HEADER_SIZES.H1:
            return <h1>{content}</h1>;
        case HEADER_SIZES.H2:
            return <h2>{content}</h2>;
        case HEADER_SIZES.H3:
            return <h3>{content}</h3>;
        case HEADER_SIZES.H4:
            return <h4>{content}</h4>;
        case HEADER_SIZES.H5:
            return <h5>{content}</h5>;
        case HEADER_SIZES.H6:
            return <h6>{content}</h6>;
    }
};