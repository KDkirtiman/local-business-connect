import PropTypes from 'prop-types';
import { useState } from 'react';
import { Header } from '../../Components/Header/Header';
import { LoginModal } from '../../Module/Login/LoginModal';

function Landing(props) {
  const [isLogin, setIsLogin] = useState(false);

  function handleOnClickLogin(open) {
    setIsLogin(open);
  }

  return (
    <div>
      <Header onClickLogin={handleOnClickLogin}/>
      <LoginModal isLogin={isLogin} onClose={handleOnClickLogin}/>
      {props.children}
    </div>
  );
}

Landing.propTypes = {
    children: PropTypes.node
}

export default Landing;
