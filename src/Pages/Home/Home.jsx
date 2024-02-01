import React, { useState } from "react";
import './Home.styles.css';
import LBCCard from "../../Components/Card/Card";
import { Header } from "../../Module/Header/Header";
import LBCOverlay from "../../Components/Overlay/Overlay";

function HomePage (props) {
  
	const [displayLogin, setDisplayLogin] = useState(false);
    
	const handleLoginClick = () => {
		setDisplayLogin(true);
	}

	const closeLogin = () => {
		setDisplayLogin(false);
	}

	return(<>
		<Header onClickLogin={handleLoginClick}/>
		<LBCCard>
			<h1>Content Component</h1>
			<h1>Footer Component</h1>
		</LBCCard>
		{displayLogin && 
			<LBCOverlay onClose={closeLogin} title={'Login !!!'}/>
		}
	</>);
}

export default HomePage;
