import React, { useState } from "react";
import './Home.styles.css';
import LBCCard from "../../Components/Card/Card";
import { Header } from "../../Module/Header/Header";
import { LoginOverlay } from "../../Module/Login/Login";
import LBCOverlay from "../../Components/Overlay/Overlay";
import { SignUp } from "../../Module/SignUp/SignUp";

function HomePage (props) {
  
	const [displayLogin, setDisplayLogin] = useState(false);
	const [displaySignUp, setDisplaySignUp] = useState(false);

	const handleLoginClick = () => {
		setDisplayLogin(true);
	}

	const closeLogin = () => {
		setDisplayLogin(false);
	}

	const handleNewUserClick = () => {
		setDisplayLogin(false);
		setDisplaySignUp(true);
	}

	const handleCloseSignUp = () => {
		setDisplaySignUp(false);
	}

	return(<>
		<Header isHomePage={true} onClickLogin={handleLoginClick} onClickSignUp={handleNewUserClick}/>
		<LBCCard>
			<h1>Content Component</h1>
			<h1>Footer Component</h1>
		</LBCCard>
		<>
			{displayLogin && 
				<LoginOverlay
					style_overlay={{width:'30%'}}
					open={displayLogin}
					onClose={closeLogin}
					title={'Login !!!'}
					handleNewUserClick={handleNewUserClick}
				/>
			}
			{displaySignUp &&
				<SignUp style_overlay={{width:'30%'}} open={displaySignUp} onClose={handleCloseSignUp} title={'Sign Up !!!'}/>
			}
		</>
	</>);
}

export default HomePage;
