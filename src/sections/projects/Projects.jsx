import React from "react";

import { ProjectCard } from "../../components/project-card/ProjectCard";
import { projects } from "../../constants/projects";

import styles from "./projects.module.css";

export const Projects = () => {
	return (
		<section id="projects" className={styles.projects__container}>
			{projects.map((project, i) => (
				<ProjectCard key={project.title} {...project} index={i} />
			))}
		</section>
	);
};
