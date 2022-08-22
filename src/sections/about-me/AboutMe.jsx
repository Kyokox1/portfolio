import React from "react";
import { motion } from "framer-motion";

import { VerticalAnimation } from "../../animations/VerticalAnimation";

import avatar from "../../../public/assets/avatar.svg";
import styles from "./aboutMe.module.css";

export const AboutMe = () => {
	return (
		<section id="about-me" className={styles.container}>
			<div className={styles.description}>
				<VerticalAnimation>
					<h3>Sobre Mí</h3>
					<p>
						Hola, Soy desarrollador Web Front-end, Con experiencia
						en desarrollo de proyectos personales. Me encargo de
						crear, desarrollar, desplegar paginas webs, y de la
						optimización y mantenimiento de estás.
					</p>
					<p>
						Me apasiona la tecnología y el detalle, me encanta que
						mi trabajo pueda convertir ideas en algo real con
						codigo, y crear soluciones eficientes y eficaces que le
						entreguen a los usuarios la mejor experiencia y
						accesibilidad posible.
					</p>
					<p>
						Con el uso y conocimiento en técnologías enfocadas al
						front-end, quiero ser parte de una startup o empresa
						para ayudar a alcanzar sus objetivos, y desarrollar u
						optimizar el producto o servicio que ofrecen.
					</p>
				</VerticalAnimation>
			</div>
			<motion.div
				initial={{ y: 5 }}
				animate={{ y: -5 }}
				transition={{
					duration: 2,
					repeat: Infinity,
					repeatType: "reverse"
				}}
				className={styles.img__container}
			>
				<VerticalAnimation delayTime={0.3}>
					<img src={avatar} alt="avatar" />
				</VerticalAnimation>
			</motion.div>
		</section>
	);
};
