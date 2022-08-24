import React, { useState } from "react";

import styles from "./header.module.css";
import logo from "../../../public/assets/logo/xing (9).png";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillBriefcaseFill, BsFillFilePersonFill } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";

import { HamburgerButton } from "../../components/hamburger-button/HamburgerButton";

export const Header = () => {
	const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false);

	return (
		<header className={styles.container}>
			<a href="#hero" className={styles.logo__container}>
				<img className={styles.logo} src={logo} alt="logo" />
			</a>
			<nav className={styles.nav}>
				<div
					className={`${styles.nav__sections} ${
						isOpenHamburgerMenu && styles.nav__sections_active
					}`}
					onClick={() => setIsOpenHamburgerMenu(false)}
				>
					<a href="#about-me">
						<BsFillBriefcaseFill
							className={styles.nav__icon__mobile}
						/>{" "}
						Sobre Mí
					</a>
					<a href="#projects">
						<BsFillFilePersonFill
							className={styles.nav__icon__mobile}
						/>{" "}
						Proyectos
					</a>
					<a href="#skills">
						<AiFillFire className={styles.nav__icon__mobile} />{" "}
						Habilidades
					</a>
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
					{/* Hamburger Button */}
					<HamburgerButton setIsOpen={setIsOpenHamburgerMenu} />
				</div>
			</nav>
		</header>
	);
};
