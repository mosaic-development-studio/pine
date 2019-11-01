import PropTypes from 'prop-types';
import React from 'react';
import './navigation.scss';

export const Navigation = props => {
    const { ApplicationControls, UserControls } = props;

    return (
        <nav className="navigation">
            <div id="ApplicationControls">
                <ApplicationControls/>
            </div>
            <div id="UserControls">
                <UserControls/>
            </div>
        </nav>
    );
};

Navigation.propTypes = {
    ApplicationControls: PropTypes.elementType.isRequired,
    UserControls: PropTypes.elementType.isRequired
};