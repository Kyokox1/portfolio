import React from "react";

import { Layout } from "./layout/Layout";
import { Hero } from "./sections/hero/Hero";
import { Projects } from "./sections/projects/Projects";
import { Skills } from "./sections/skills/Skills";
import { Hobbies } from "./sections/hobbies/Hobbies";

function App() {
	return (
		<Layout>
			<Hero />
			<Projects />
			<Skills />
			<Hobbies />
		</Layout>
	);
}

export default App;
