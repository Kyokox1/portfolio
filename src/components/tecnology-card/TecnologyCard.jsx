import React from "react";
import { motion } from "framer-motion";

import { FadeInDirection } from "../../animations/FadeInDirection";

import styles from "./tecnologyCard.module.css";

export const TecnologyCard = ({ name, logo, className, index }) => {
	return (
		<FadeInDirection onView={true}>
			<figure className={styles.figure}>
				<div
					className={`${styles.img__container} ${styles[className]}`}
				>
					<motion.img
						initial={index % 2 === 0 ? { y: -2 } : { y: 2 }}
						animate={index % 2 === 0 ? { y: 2 } : { y: -2 }}
						transition={{
							duration: 2,
							repeat: Infinity,
							repeatType: "reverse"
						}}
						src={logo}
						alt={name}
					/>
				</div>
				<figcaption>{name}</figcaption>
			</figure>
		</FadeInDirection>
	);
};
