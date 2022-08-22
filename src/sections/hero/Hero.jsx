import React from "react";

import styles from "./hero.module.css";

import hero from "../../../public/assets/profile.jpg";
import { ButtonHero } from "../../components/button-hero/ButtonHero";
import { LandscapeAnimation } from "../../animations/LandscapeAnimation";

export const Hero = () => {
	return (
		<section className={styles.hero__container} id="hero">
			<LandscapeAnimation direction="right" time={0.9}>
				<img className={styles.hero__img} src={hero} alt="hero" />
			</LandscapeAnimation>
			<LandscapeAnimation direction="left" time={1}>
				<h1>Kevin Bejarano Ruiz</h1>
			</LandscapeAnimation>
			<LandscapeAnimation direction="left" time={1.2}>
				<h2>Desarrollador Web Front-End</h2>
			</LandscapeAnimation>
			<LandscapeAnimation direction="right" time={1.3}>
				<div className={styles.button__container}>
					<ButtonHero url="https://www.linkedin.com/in/kevin-bejarano-ruiz-a2a303239/">
						Contáctame
					</ButtonHero>
					<ButtonHero url="https://www.linkedin.com/in/kevin-bejarano-ruiz-a2a303239/">
						Descargar CV
					</ButtonHero>
				</div>
			</LandscapeAnimation>
		</section>
	);
};
