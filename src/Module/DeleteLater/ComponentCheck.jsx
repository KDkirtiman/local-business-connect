import React, {useState} from "react";
import LBCCard from "../../Components/Card/Card";
import LBCHeading from "../../Components/Heading/Heading";
import LBCLabel from "../../Components/Label/Label";
import LBCTextArea from "../../Components/TextArea/TextArea";
import LBCDropdown from "../../Components/Dropdown/Dropdown";
import LBCButton from "../../Components/Button/Button";
import LBCOverlay from "../../Components/Overlay/Overlay";
import LBCTextField from "../../Components/TextField/TextField";
import LBCRadioButton from "../../Components/Radiobutton/Radiobutton";

const ComponentCheck = () => {

    const [displayLogin, setDisplayLogin] = useState(false);
    const [displayTextFIeld, setDisplayTextField] = useState('');
    const [displayTextArea, setDisplayTextArea] = useState('');

    const handleLogin = (value) => {
        setDisplayLogin(true);
    }

    const onOverlayClose = (value) => {
        setDisplayLogin(false);
    }

    const onTextFieldChange = (event) => {
        setDisplayTextField(event.target.value);
    }

    const onTextAreaChange = (event) => {
        console.log(event.target.value);
        setDisplayTextArea(event.target.value);
    }
    
    const object1 = {
        label: 'Hyundai',
        optionList: ['Creta','Exter','i20']
    };

    const dropDownList = [object1,object1];

    const user = {
        value: 'option1',
        name: 'option1',
        checked: false
    };

    const optionsList = [user];
    
    return (
        <LBCCard>
            <LBCHeading variant={'h6'} style={{textAlign: "left"}}>
                Welcome to the Local Business Connect.
            </LBCHeading>
            <LBCLabel style={{textAlign: "left"}}>
                Welcome to the Label Component.
            </LBCLabel>
            <div>
                <LBCTextArea onChange={onTextAreaChange} value={displayTextArea}/>
            </div>
            <div>
                <LBCDropdown variant='optionGroup' dropDownList={dropDownList}/>
            </div>
            <LBCRadioButton optionsList={optionsList}/>
            <LBCButton label={"Home"} variant={"submit"} onClick={(event)=>handleLogin(event)}/>
            {displayLogin &&
                <LBCOverlay
                    open={displayLogin}
                    onClose={onOverlayClose}
                    title={'Login'}
                    class_name_overlay={'overlay-main'}
                    class_name_overlay_title={'overlay-title'}
                    style_overlay_title={{fontSize: '2em'}}
                >
                    <div>
                    <LBCLabel style={{textAlign: "left"}} >
                        UserName : 
                    </LBCLabel>
                    <LBCTextField placeholder={'User Name !!!'} value={displayTextFIeld} onChange={onTextFieldChange}/>
                    </div>
                </LBCOverlay>
            }
        </LBCCard>
    );
}

export default ComponentCheck;
