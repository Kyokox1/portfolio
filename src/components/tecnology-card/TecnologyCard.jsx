import React from "react";

import { VerticalAnimation } from "../../animations/VerticalAnimation";
import { ImageBounce } from "../../animations/ImageBounce";

import styles from "./tecnologyCard.module.css";

export const TecnologyCard = ({ name, logo, className, index, delay }) => {
	const top = index % 2 === 0 ? -2 : 2;
	const base = index % 2 === 0 ? 2 : -2;

	return (
		<VerticalAnimation delayTime={delay}>
			<figure className={styles.figure}>
				<div
					className={`${styles.img__container} ${styles[className]}`}
				>
					<ImageBounce
						imgUrl={logo}
						name={`${name}-tech`}
						top={top}
						base={base}
					/>
				</div>
				<figcaption>{name}</figcaption>
			</figure>
		</VerticalAnimation>
	);
};
