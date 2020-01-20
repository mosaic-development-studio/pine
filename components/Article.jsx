import PropTypes from 'prop-types';
import React from 'react';

export const Article = props => {
    const {
        content,
        heading,
        heroImageSource,
        subheading,
        type
    } = props;

    console.log(content, heading, heroImageSource, subheading, type);

    return (
        <article>
            <h1>{heading}</h1>
        </article>
    );
};

Article.defaultProps = {
    type: null
};

Article.propTypes = {
    type: PropTypes.string
};