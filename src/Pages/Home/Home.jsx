import React, { useState } from "react";
import './Home.styles.css';
import LBCCard from "../../Components/Card/Card";
import { Header } from "../../Module/Header/Header";
import { LoginOverlay } from "../../Module/Login/Login";
import { useNavigate } from "react-router-dom";

function HomePage (props) {

	const navigate = useNavigate();
  
	const [displayLogin, setDisplayLogin] = useState(false);

	const handleLoginClick = () => {
		setDisplayLogin(true);
	}

	const closeLogin = () => {
		setDisplayLogin(false);
	}

	const handleNewUserClick = () => {
		navigate('/registerUser');
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
		</>
	</>);
}

export default HomePage;
