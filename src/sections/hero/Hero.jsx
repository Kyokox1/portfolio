import React from "react";

import styles from "./hero.module.css";

import hero from "../../../public/assets/profile/profile.webp";
import { ButtonHero } from "../../components/button-hero/ButtonHero";
import { LandscapeAnimation } from "../../animations/LandscapeAnimation";
import { ArrowUpSlide } from "../../components/Arrow-up-slide/ArrowUpSlide";
import { useNearScreen } from "../../hooks/useNearScreen";

export const Hero = () => {
	const { isVisible, elementRef } = useNearScreen();

	return (
		<>
			<section
				ref={elementRef}
				className={styles.hero__container}
				id="hero"
			>
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
						<ButtonHero url="https://drive.google.com/file/d/14m5dfgbt0GhrxsrZF8O7RxwS2KOwaYtP/view?usp=sharing">
							Descargar CV
						</ButtonHero>
					</div>
				</LandscapeAnimation>
			</section>
			<ArrowUpSlide isVisible={isVisible} />
		</>
	);
};
