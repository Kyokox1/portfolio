import React from "react";

import { TecnologyCard } from "../../components/tecnology-card/TecnologyCard";
import { skills } from "../../constants/skills";

import styles from "./skills.module.css";

export const Skills = () => {
	return (
		<section id="skills" className={styles.container}>
			<h3>Habilidades</h3>
			<div className={styles.skills__figure}>
				{skills.map((skill, i) => (
					<TecnologyCard
						key={`${skill.name} ${i}`}
						{...skill}
						index={i}
					/>
				))}
			</div>
		</section>
	);
};
