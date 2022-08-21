import React from "react";

import { Layout } from "./layout/Layout";
import { Hero } from "./sections/hero/Hero";
import { AboutMe } from "./sections/about-me/AboutMe";
import { Projects } from "./sections/projects/Projects";
import { Skills } from "./sections/skills/Skills";

function App() {
	return (
		<Layout>
			<Hero />
			<AboutMe />
			<Projects />
			<Skills />
		</Layout>
	);
}

export default App;
