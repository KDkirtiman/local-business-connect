import React, { useState } from "react";
import './Home.styles.css';
import LBCCard from "../../Components/Card/Card";
import { Header } from "../../Module/Header/Header";

function HomePage (props) {
  
	const [displayLogin, setDisplayLogin] = useState(false);
    
	return(<>
		<Header/>
		<LBCCard>
			<h1>Content Component</h1>
			<h1>Footer Component</h1>
		</LBCCard>
	</>);
}

export default HomePage;
