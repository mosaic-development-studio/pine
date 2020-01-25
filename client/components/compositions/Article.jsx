import PropTypes from 'prop-types';
import React from 'react';

export const Article = props => {
    const {
        content,
        title,
        heroImageSource,
        subtitle,
        type
    } = props;

    return (
        <article>
            <span>{type}</span>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={heroImageSource} />
        </article>
    );
};

Article.defaultProps = {
    type: null
};

Article.propTypes = {
    type: PropTypes.string
};