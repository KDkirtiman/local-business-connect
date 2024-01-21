import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { chainPropTypes } from '@mui/utils';
import { Card } from '@mui/material';

const DefaultCard = styled(Card)`
	padding: 10px 10px 10px 10px;
`;

function LBCCard (props) {
    return (
        <DefaultCard {...props}/>
    )
}

LBCCard.propTypes /* remove-proptypes */ = {
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * If `true`, the card will use raised styling.
     * @default false
     */
    raised: chainPropTypes(PropTypes.bool, (props) => {
      if (props.raised && props.variant === 'outlined') {
        return new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.');
      }
  
      return null;
    }),
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
      PropTypes.func,
      PropTypes.object,
    ]),
  };

export default LBCCard;