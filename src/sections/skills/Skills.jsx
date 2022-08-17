import React from "react";

import { TecnologyCard } from "../../components/tecnology-card/TecnologyCard";

import styles from "./skills.module.css";

export const Skills = () => {
	const skills = [
		{
			name: "HTML5",
			className: "html",
			logo: "/public/assets/tecnology/html-1.svg"
		},
		{
			name: "Css",
			className: "css",
			logo: "/public/assets/tecnology/css-3.svg"
		},
		{
			name: "JavaScript",
			className: "javascript",
			logo: "/public/assets/tecnology/logo-javascript.svg"
		},
		{
			name: "React",
			className: "react",
			logo: "/public/assets/tecnology/react-2.svg"
		},
		{
			name: "Redux Toolkit",
			className: "redux",
			logo: "/public/assets/tecnology/redux.svg"
		},
		{
			name: "Git",
			className: "git",
			logo: "/assets/tecnology/git-icon.svg"
		},
		{
			name: "GitHub",
			className: "github",
			logo: "/public/assets/tecnology/github-1.svg"
		},
		{
			name: "Chakra UI",
			className: "chakra",
			logo: "/public/assets/tecnology/chakra-ui.svg"
		}
	];

	return (
		<section id="skills" className={styles.container}>
			<h3>Habilidades</h3>
			<div className={styles.skills__figure}>
				{skills.map((skill, i) => (
					<TecnologyCard key={`${skill.name} ${i}`} {...skill} />
				))}
			</div>
		</section>
	);
};
