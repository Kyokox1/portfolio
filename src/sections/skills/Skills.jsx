import React from "react";

import { TecnologyCard } from "../../components/tecnology-card/TecnologyCard";

import styles from "./skills.module.css";

export const Skills = () => {
	const skills = [
		{
			name: "HTML5",
			className: "html",
			logo: "/assets/tecnology/html-1.svg",
			delay: 0
		},
		{
			name: "Css",
			className: "css",
			logo: "/assets/tecnology/css-3.svg",
			delay: 0.2
		},
		{
			name: "JavaScript",
			className: "javascript",
			logo: "/assets/tecnology/logo-javascript.svg",
			delay: 0.4
		},
		{
			name: "React",
			className: "react",
			logo: "/assets/tecnology/react-2.svg",
			delay: 0.6
		},
		{
			name: "Redux Toolkit",
			className: "redux",
			logo: "/assets/tecnology/redux.svg",
			delay: 0.8
		},
		{
			name: "Git",
			className: "git",
			logo: "/assets/tecnology/git-icon.svg",
			delay: 1
		},
		{
			name: "GitHub",
			className: "github",
			logo: "/assets/tecnology/github-1.svg",
			delay: 1.2
		},
		{
			name: "Chakra UI",
			className: "chakra",
			logo: "/assets/tecnology/chakra-ui.svg",
			delay: 1.4
		}
	];

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
