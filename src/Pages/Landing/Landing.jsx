import PropTypes from 'prop-types';
import { Header } from '../../Components/Header/Header';
import { LoginModal } from '../../Module/Login/Login';
import { useState } from 'react';

function Landing(props) {
  const [isLogin, setIsLogin] = useState(true);

  function handleOnClickLogin(open) {
    setIsLogin(open);
  }

  return (
    <>
      <h1>Welcome to Local Business Connect Connecting local businesses</h1>
      <Header onClickLogin={handleOnClickLogin}/>
      <LoginModal isLogin={isLogin} onClose={handleOnClickLogin}/>
      {props.children}
    </>
  );
}

Landing.propTypes = {
    children: PropTypes.node
}

export default Landing;
