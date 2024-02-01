import React from 'react';
import { useNavigate } from 'react-router-dom';
import LBCButton from '../../Components/Button/Button';
import './Header.style.css';

function Header({isHomePage=true, ...props}) {

  const navigate = useNavigate();

  const handleHomeBtnClick = () => {
    navigate('/',{});
  }

  return (
    <div className='header-div-main'>
      <div className='header-div-home'>
        <LBCButton onClick={!isHomePage ? handleHomeBtnClick : undefined} className={'btn'} label={'Home'}/>
      </div>
      {isHomePage &&
        <div className='header-login-main'>
          <LBCButton onClick={(event)=>props.onClickLogin(event)} className={`btn btn-login`} label={'LogIn'}/>
          <LBCButton onClick={(event)=>props.onClickSignUp(event)} className={'btn'} label={'SignUp'}/>
        </div>
      }
    </div>
  )
}

export { Header };
