import React from "react";

import styles from "./hero.module.css";

import hero from "../../../public/assets/profile.jpg";
import { ButtonHero } from "../../components/button-hero/ButtonHero";

export const Hero = () => {
	return (
		<section className={styles.hero__container} id="hero">
			<img className={styles.hero__img} src={hero} alt="hero" />
			<h1>Kevin Bejarano Ruiz</h1>
			<h2>Desarrollador Web Front-End</h2>
			<div className={styles.button__container}>
				<ButtonHero url="https://www.linkedin.com/in/kevin-bejarano-ruiz-a2a303239/">
					Contáctame
				</ButtonHero>
				<ButtonHero url="https://www.linkedin.com/in/kevin-bejarano-ruiz-a2a303239/">
					Descargar CV
				</ButtonHero>
			</div>
		</section>
	);
};
