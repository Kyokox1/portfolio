import React from "react";

import styles from "./projectCard.module.css";

export const ProjectCard = ({ title, description, img, urlDemo, urlCode }) => {
	return (
		<article className={styles.card__container}>
			<img className={styles.card__img} src={img} alt="project" />
			<div>
				<h4>{title}</h4>
				<p>{description}</p>
				<div>
					<span>react</span>
				</div>
				<div>
					<a href={urlDemo} target="_blank" rel="noopener noreferrer">
						Visitar Sitio
					</a>
					<a href={urlCode} target="_blank" rel="noopener noreferrer">
						Codigo Fuente
					</a>
				</div>
			</div>
		</article>
	);
};
