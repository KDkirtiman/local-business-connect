import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown.styled';

class LBCDropdown extends Component {

  renderOptionGroupDropdown = () => {
    const {
      multiple=false,
      disabled=false,
      dropDownList=[],
      classname_dropdown='',
      classname_option_group='',
      classname_option='',
      style_dropdown={},
      style_option={},
      style_option_group={}
    } = this.props;
    return (
      <Dropdown disabled={disabled} multiple={multiple} style={style_dropdown} className={classname_dropdown} {...this.props}>
        {
          dropDownList.length > 0 &&
            dropDownList.map(item => (
              <optgroup style={style_option_group} className={classname_option_group} label={item.label}>
                {item.optionList.map((value) => (<option style={style_option} className={classname_option} value={value}>{value}</option>))}
              </optgroup>)
            )
        }
      </Dropdown>
    );
  };

  renderDropdown = () => {
    const {
      multiple=false,
      disabled=false,
      dropDownList=[],
      classname_dropdown='',
      classname_option='',
      style_dropdown={},
      style_option={}
    } = this.props;
    return (
      <Dropdown disabled={disabled} multiple={multiple} style={style_dropdown} className={classname_dropdown} {...this.props}>
        {
          dropDownList.length > 0 &&
            dropDownList.map((value) => (<option style={style_option} className={classname_option} value={value}>{value}</option>))
        }
      </Dropdown>
    );
  };

  render() {
    const {variant='dropDown'} = this.props;
    if(variant === 'optionGroup') {
      return (<>{this.renderOptionGroupDropdown()}</>)
    }
    return (<>{this.renderDropdown()}</>)
  }
}

LBCDropdown.propTypes = {
  /**
   * Boolean value to enable disable dropdown. Default is false
   */
  disabled: PropTypes.bool,
  /**
   * Boolean value to enable Multiselect dropdown. Default is false
   */
  multiple: PropTypes.bool,
  /**
   * Boolean value to enable Multiselect dropdown. Default is false
   */
  onSelect: PropTypes.bool,
  /**
   * Select the variant of dropdown to use, "dropDown" or "optionGroup". Default is "dropDown
   */
  variant: PropTypes.string,
  /**
   * Extend the styles applied to the component.
   */
  classname_dropdown: PropTypes.string,
  /**
   * Extend the styles applied to the <optgroup> tag of the component.
   */
  classname_option_group: PropTypes.string,
  /**
   * Extend the styles applied to the <option> tag of the component.
   */
  classname_option: PropTypes.string,
  /**
   * Override the styles applied to the component.
   */
  style_dropdown: PropTypes.object,
  /**
   * Override the styles applied to the <option> tag of the component.
   */
  style_option: PropTypes.object,
  /**
   * Override the styles applied to the <optgroup> tag of the component.
   */
  style_option_group: PropTypes.object,
};

export default LBCDropdown;
