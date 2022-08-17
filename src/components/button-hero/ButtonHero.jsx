import React from "react";

import styles from "./buttonHero.module.css";

export const ButtonHero = ({ children, url }) => {
	return (
		<a
			className={styles.button}
			href={url}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
};
