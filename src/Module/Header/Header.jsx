import React from 'react';
import LBCButton from '../../Components/Button/Button';
import './Header.style.css';

function Header(props) {

    return (
        <div className='header-div-main'>
            <div className='header-div-home'>
                <LBCButton className={'btn'} label={'Home'}/>
            </div>
            <div className='header-login-main'>
                <LBCButton className={`btn btn-login`} label={'LogIn'}/>
                <LBCButton className={'btn'} label={'SignUp'}/>
            </div>
        </div>
    )
}

export { Header };
