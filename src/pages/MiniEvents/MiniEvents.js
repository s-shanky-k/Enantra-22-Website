import React from "react";
import styles from "./MiniEvents.module.css";
import Card from "../../components/Card/Card";

function MiniEvents() {
	return (
		<div className={styles.container}>
			{/* {SixDTTalksData.map((item, index) => (
				<Card key={index + 1} props={item} />
			))} */}
			<Card
				props={{
					img: "netflixlogo.jpg",
					title: "Title",
					description: "This is the description about the event",
					href: "/events",
				}}
			/>
			<Card
				props={{
					img: "netflixlogo.jpg",
					title: "Title",
					description: "This is the description about the event",
					href: "/events",
				}}
			/>
			<Card
				props={{
					img: "netflixlogo.jpg",
					title: "Title",
					description: "This is the description about the event",
					href: "/events",
				}}
			/>
			<Card
				props={{
					img: "netflixlogo.jpg",
					title: "Title",
					description: "This is the description about the event",
					href: "/events",
				}}
			/>
			<Card
				props={{
					img: "netflixlogo.jpg",
					title: "Title",
					description: "This is the description about the event",
					href: "/events",
				}}
			/>
			<Card
				props={{
					img: "netflixlogo.jpg",
					title: "Title",
					description: "This is the description about the event",
					href: "/events",
				}}
			/>
		</div>
	);
}

export default MiniEvents;
