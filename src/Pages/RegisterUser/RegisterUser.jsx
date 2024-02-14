import React, { useState } from "react";
import { Header } from "../../Module/Header/Header";
import { LoginOverlay } from "../../Module/Login/Login";

function RegisterUser(props) {

  const [displayLogin, setDisplayLogin] = useState(false);

  const handleLoginClick = () => {
		setDisplayLogin(true);
	}

	const closeLogin = () => {
		setDisplayLogin(false);
	}

  return (
    <>
      <Header showSignUpBtn={false} isHomePage={false} onClickLogin={handleLoginClick} />
			{displayLogin && 
				<LoginOverlay
					style_overlay={{width:'30%'}}
					open={displayLogin}
					onClose={closeLogin}
					title={'Login !!!'}
					handleNewUserClick={closeLogin}
				/>
			}
    </>
  );
}

export { RegisterUser };
