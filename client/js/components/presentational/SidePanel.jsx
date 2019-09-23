import PropTypes from 'prop-types';
import React from 'react';
import { SidePanelMenu } from './SidePanelMenu';

export const SidePanel = props => {
    const { id, sections } = props;

    return (
        <aside id={id}>
            {sections.map(props => <SidePanelMenu {...props}/>)}
        </aside>
    );
};

SidePanel.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.shape({
        pages: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })),
        title: PropTypes.string.isRequired
    }))
};