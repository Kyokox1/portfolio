import React from "react";

import { ProjectCard } from "../../components/project-card/ProjectCard";
import { projects } from "../../constants/projects";
import { Title } from "../../components/title-section/Title";

import styles from "./projects.module.css";

export const Projects = () => {
	return (
		<section id="projects" className={styles.projects__container}>
			<Title>Proyectos</Title>
			{projects.map((project, i) => (
				<ProjectCard key={project.title} {...project} index={i} />
			))}
		</section>
	);
};
