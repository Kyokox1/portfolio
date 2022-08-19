import React from "react";
import { motion } from "framer-motion";

// ? Componente de Framer Motion, la prop "onView" definira si el children se animara al hacer scroll,
// ? o sea cuando aparezca en pantalla, o no.

export const FadeInDirection = ({
	children,
	direction = "right",
	time = 1,
	onView = false
}) => {
	return (
		<motion.div
			initial={
				direction === "right"
					? { x: 250, opacity: 0 }
					: { x: -250, opacity: 0 }
			}
			animate={!onView && { x: 0, opacity: 1 }}
			whileInView={onView && { opacity: 1, x: 0 }}
			viewport={onView && { once: true, amount: 0.3 }}
			transition={{
				type: "spring",
				bounce: 0.3,
				duration: time
			}}
		>
			{children}
		</motion.div>
	);
};
