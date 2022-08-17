import React from "react";

import styles from "./buttonProject.module.css";

export const ButtonProject = ({ children, urlDemo }) => {
	return (
		<a
			className={styles.button}
			href={urlDemo}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
};
