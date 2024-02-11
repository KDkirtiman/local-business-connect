import React, { useState } from "react";
import './Home.styles.css';
import LBCCard from "../../Components/Card/Card";
import { Header } from "../../Module/Header/Header";
import LBCOverlay from "../../Components/Overlay/Overlay";
import { LoginOverlay } from "../../Module/Login/Login";

function HomePage (props) {
  
	const [displayLogin, setDisplayLogin] = useState(false);
	const [displaySignUp, setDisplaySignUp] = useState(false);

	const handleLoginClick = () => {
		setDisplayLogin(true);
	}

	const closeLogin = () => {
		setDisplayLogin(false);
	}

	const handleSignUpClick = () => {
		setDisplaySignUp(true);
	}

	const closeSignUp = () => {
		setDisplaySignUp(false);
	}

	return(<>
		<Header isHomePage={true} onClickLogin={handleLoginClick} onClickSignUp={handleSignUpClick}/>
		<LBCCard>
			<h1>Content Component</h1>
			<h1>Footer Component</h1>
		</LBCCard>
		<>
			{displayLogin && 
				<LoginOverlay style_overlay={{width:'30%'}} open={displayLogin} onClose={closeLogin} title={'Login !!!'}/>
			}
			{displaySignUp &&
				<LBCOverlay style_overlay={{width:'30%'}} open={displaySignUp} onClose={closeSignUp} title={'Sign Up'}/>
			}
		</>
	</>);
}

export default HomePage;
