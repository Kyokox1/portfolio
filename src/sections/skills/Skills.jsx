import React from "react";

import { TecnologyCard } from "../../components/tecnology-card/TecnologyCard";
import { skills } from "../../constants/skills";
import { Title } from "../../components/title-section/Title";

import styles from "./skills.module.css";

export const Skills = () => {
	return (
		<section id="skills" className={styles.container}>
			<Title>Habilidades</Title>
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
