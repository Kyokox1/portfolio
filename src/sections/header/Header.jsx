import React from "react";

import styles from "./header.module.css";
import logo from "../../assets/react.svg";

import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Header = () => {
	return (
		<header className={styles.container}>
			<a href="#hero">
				<img className={styles.logo} src={logo} alt="logo" />
			</a>
			<nav className={styles.nav}>
				<div className={styles.nav__sections}>
					<a href="#about-me">Sobre Mí</a>
					<a href="#projects">Proyectos</a>
					<a href="#skills">Habilidades</a>
				</div>
				<div className={styles.nav__socials}>
					<a
						href="https://www.linkedin.com/in/kevin-bejarano-ruiz-a2a303239/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://github.com/Kyokox1"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub />
					</a>
				</div>
			</nav>
		</header>
	);
};
