import React from 'react';
import PropTypes from 'prop-types';
import DefaultCard from './Card.styled';

function LBCCard (props) {
    return (
        <DefaultCard style={props.style} className={props.className}>
          {props.children}
        </DefaultCard>
    )
}

LBCCard.propTypes /* remove-proptypes */ = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
    * Override the styles applied to the Overlay Title Div.
    */
    style: PropTypes.object,
    /**
    * Extend the styles applied to the Overlay Content Div.
    */
    className: PropTypes.object,
};

export default LBCCard;
