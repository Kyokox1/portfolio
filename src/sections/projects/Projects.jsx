import React from "react";

import { ProjectCard } from "../../components/project-card/ProjectCard";

import styles from "./projects.module.css";

export const Projects = () => {
	const projects = [
		{
			title: "Todo App",
			description: `Aplicación de Todos, consta con las funcionalidades básicas de agregar,
						eliminar, editar, marcar tareas, incluye un Dark Theme y es responsive.`,
			img: "/assets/Projects/todo-app.png",
			tags: ["React", "Chakra UI"],
			urlDemo: "https://to-do-list-kyokox1.vercel.app/",
			urlCode: "https://github.com/Kyokox1/ToDo_list"
		},
		{
			title: "Aerolab Challenge",
			description: "",
			img: "/assets/Projects/aerolab.png",
			tags: ["React", "React Router", "Redux Toolkit"],
			urlDemo: "https://aerolab-challenge-kyokox1.vercel.app/",
			urlCode: "https://github.com/Kyokox1/Aerolab_Challenge"
		},
		{
			title: "Weather App",
			description: "",
			img: "/public/assets/Projects/waether-app.png",
			tags: ["React", "Chakra UI", "Days Js"],
			urlDemo: "https://weatherz-app.vercel.app/",
			urlCode: "https://github.com/Kyokox1/Weatherz_app"
		}
	];

	return (
		<section id="projects" className={styles.projects__container}>
			{projects.map((project) => (
				<ProjectCard key={project.title} {...project} />
			))}
		</section>
	);
};
