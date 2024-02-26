import PropTypes from 'prop-types';
import { useState } from 'react';
import { Header } from '../../Components/Header/Header';
import { LoginModal } from '../../Module/Login/LoginModal';
import { SignUp } from '../../Module/SignUp/SignUp';

function Landing(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); 

  function handleOnClickLogin(isOpen) {
    setIsSignUp(false);
    setIsLogin(isOpen);
  }

  function handleSignUpClick(isOpen) {
    setIsSignUp(isOpen);
    setIsLogin(false);
  }

  return (
    <div>
      <Header onClickLogin={handleOnClickLogin} onClickSignUp={handleSignUpClick}/>
      <LoginModal isLogin={isLogin} onClose={handleOnClickLogin} handleSignUpClick={handleSignUpClick}/>
      <SignUp isSignUp={isSignUp} onClose={handleSignUpClick} handleOnClickLogin={handleOnClickLogin}/>
      {props.children}
    </div>
  );
}

Landing.propTypes = {
    children: PropTypes.node
}

export default Landing;
