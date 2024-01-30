import React, { useState } from "react";
import './Home.styles.css';
import LBCCard from "../../Components/Card/Card";

function HomePage (props) {
  
	const [displayLogin, setDisplayLogin] = useState(false);
    
	return(<>
		<LBCCard>
			<h1>Header Component</h1>
			<h1>Content Component</h1>
			<h1>Footer Component</h1>
		</LBCCard>
	</>);
}

export default HomePage;
