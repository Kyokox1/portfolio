import React from "react";
import { IoIosRocket } from "react-icons/io";
import { AiFillCode } from "react-icons/ai";

import { ButtonProject } from "../button-projects/ButtonProject";

import styles from "./projectCard.module.css";
import { FadeInDirection } from "../../animations/FadeInDirection";

export const ProjectCard = ({
	title,
	description,
	img,
	urlDemo,
	urlCode,
	tags,
	index
}) => {
	const animationDirection = index % 2 === 0 ? "left" : "right";
	return (
		<FadeInDirection
			direction={animationDirection}
			time={1.5}
			onView={true}
		>
			<article className={styles.card__container}>
				<div className={styles.card__img}>
					<img src={img} alt={title} />
					<div className={styles.card__img_bg}>asd</div>
				</div>
				<div className={styles.card__text}>
					<h4 className={styles.card__title}>{title}</h4>
					<p className={styles.card__description}>{description}</p>
					<div className={styles.tags}>
						{tags.map((tag) => (
							<span key={`tag-${tag}`} className={styles.tag}>
								{tag.toUpperCase()}
							</span>
						))}
					</div>
					<div className={styles.buttons}>
						<ButtonProject urlDemo={urlDemo}>
							<p>Visitar Sitio</p>
							<IoIosRocket />
						</ButtonProject>
						<ButtonProject urlDemo={urlCode}>
							<p>Código Fuente</p>
							<AiFillCode />
						</ButtonProject>
					</div>
				</div>
			</article>
		</FadeInDirection>
	);
};
