import React from "react";

import { ProjectCard } from "../../components/project-card/ProjectCard";

export const Projects = () => {
	const projects = [
		{
			title: "Todo App",
			description: "",
			img: "/assets/Projects/todo-app.png",
			urlDemo: "https://to-do-list-kyokox1.vercel.app/",
			urlCode: "https://github.com/Kyokox1/ToDo_list"
		},
		{
			title: "Aerolab Challenge",
			description: "",
			img: "/assets/Projects/aerolab.png",
			urlDemo: "https://aerolab-challenge-kyokox1.vercel.app/",
			urlCode: "https://github.com/Kyokox1/Aerolab_Challenge"
		},
		{
			title: "Weather App",
			description: "",
			img: "/public/assets/Projects/waether-app.png",
			urlDemo: "https://weatherz-app.vercel.app/",
			urlCode: "https://github.com/Kyokox1/Weatherz_app"
		}
	];

	return (
		<section id="projects">
			{projects.map((project) => (
				<ProjectCard key={project.title} {...project} />
			))}
		</section>
	);
};
