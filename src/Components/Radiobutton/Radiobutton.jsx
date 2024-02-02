import React, { useState } from 'react';
import PropTypes, { objectOf } from 'prop-types';
import RadioButton from './Radiobutton.styled';
import RadioButtonLabel from './RadiobuttonLabel.styled';

function LBCRadioButton({ optionsList=[], ...props}) {

  return (<>
    {
      (optionsList && optionsList.length > 0) &&
        optionsList.map((item)=>{
          return (
            <div style={props.style} className={props.className}>
              <RadioButton
                type='radio'
                style={props.styleRadioButton}
                className={props.classNameRadioButton}
                value={item.value}
                name={props.name}
                checked={item.checked}
                onChange={props.onSelect}
              />
              <RadioButtonLabel style={props.styleLabel} className={props.classNameLabel}>{item.label}</RadioButtonLabel>
            </div>
          )
        })
    }
  </>); 
}

LBCRadioButton.propTypes = {
  /**
  * Array of Objects to be displayed as radio buttons.
  */
  optionsList: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired
  })),
  /**
   * The group the radio buttons will be grouped into.
   */
  name: PropTypes.string,
  /**
  * Callback function called when the radio button is selected.
  */
  onSelect: PropTypes.func,
  /**
  * Override or extend the styles applied to the Radio Button Div.
  */
  className: PropTypes.string,
  /**
  * extend the styles applied to the Radio Input Tag.
  */
  classNameRadioButton: PropTypes.string,
  /**
  * extend the styles applied to the Radio Button Label.
  */
  classNameLabel: PropTypes.string,
  /**
  * Override the styles applied to the Radio Button Div.
  */
  style: PropTypes.object,
  /**
  * Override the styles applied to the Radio Button Label.
  */
  styleLabel: PropTypes.object,
  /**
  * Override the styles applied to the Radio Input Tag.
  */
  styleRadioButton: PropTypes.object,
};  

export default LBCRadioButton;
