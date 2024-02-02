import React, { useState } from 'react';
import RadioButton from './Radiobutton.styled';
import RadioButtonLabel from './RadiobuttonLabel.styled';

function LBCRadioButton(props) {
  const [optionsList, setOptionsList] = useState(props.optionsList);

  const handleRadioButtonCheck = (event) => {
    const selectedValue = event.target.value;
    const newOptionsList = optionsList.map((item) => {
      if(item.value === selectedValue) {
        return {...item, checked: true}
      } else {
        return item;
      }
    });
    setOptionsList(newOptionsList);
  }
  return (<>
    {
      (props.optionsList && props.optionsList.length > 0) &&
        props.optionsList.map((item)=>{
          return (
            <>
              <RadioButton
                type='radio'
                value={item.value}
                name={item.name}
                checked={item.checked}
                onClick={handleRadioButtonCheck}
              />
              <RadioButtonLabel/>
            </>
          )
        })
    }
  </>); 
}

export default LBCRadioButton;
