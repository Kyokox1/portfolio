import React from "react";

import styles from "./hero.module.css";

import hero from "../../../public/assets/profile.jpg";

export const Hero = () => {
	return (
		<section className={styles.hero__container}>
			<img className={styles.hero__img} src={hero} alt="hero" />
			<h1>Kevin Bejarano Ruiz</h1>
			<h2>Desarrollador Web Front-End</h2>
			<a
				className={styles.button}
				href="https://www.linkedin.com/in/kevin-bejarano-ruiz-a2a303239/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Contáctame
			</a>
		</section>
	);
};
