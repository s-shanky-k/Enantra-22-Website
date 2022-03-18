import React from "react";
import styles from "./Landing.module.css";
import Card from "../../components/Card/Card";
function Landing() {
	return (
		<>
			<div>Landing</div>
			<Card
				props={{
					img: "netflixlogo.jpg",
					title: "TitleTitleTitleTitleTitleTitleTitle",
					description:
						"This is the description about the event. This is the description about the event. This is the description about the event",
				}}
			/>
		</>
	);
}

export default Landing;
