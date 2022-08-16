import React from "react";

import styles from "./tecnologyCard.module.css";

export const TecnologyCard = ({ name, logo, className }) => {
	return (
		<figure className={styles.figure}>
			<div className={`${styles.img__container} ${styles[className]}`}>
				<img src={logo} alt={name} />
			</div>
			<figcaption>{name}</figcaption>
		</figure>
	);
};
