import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";

import styles from "./hamburgerButton.module.css";

export const HamburgerButton = ({ setIsOpen }) => {
	return (
		<div
			onClick={() => setIsOpen((prevValue) => !prevValue)}
			className={styles.hamburger}
		>
			<GiHamburgerMenu />
		</div>
	);
};
