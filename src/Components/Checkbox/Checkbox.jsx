import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from './Radiobutton.styled';
import RadioButtonLabel from './RadiobuttonLabel.styled';
import Checkbox from './Checkbox.styled';
import CheckboxLabel from './CheckboxLabel.styled';

function LBCCheckBox({ optionsList=[], ...props}) {

  return (<>
    {
      (optionsList && optionsList.length > 0) &&
        optionsList.map((item)=>{
          return (
            <div style={props.style} className={props.className}>
              <Checkbox
                type='radio'
                style={props.styleCheckBox}
                className={props.classNameCheckBox}
                value={item.value}
                name={item.name}
                checked={item.checked}
                onChange={props.onSelect}
              />
              <CheckboxLabel style={props.styleLabel} className={props.classNameLabel}>{item.label}</CheckboxLabel>
            </div>
          )
        })
    }
  </>); 
}

LBCCheckBox.propTypes = {
  /**
  * Array of Objects to be displayed as radio buttons.
  */
  optionsList: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string,
  })),
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
  classNameCheckBox: PropTypes.string,
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
  styleCheckBox: PropTypes.object,
};  

export default LBCCheckBox;
