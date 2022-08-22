import React from "react";
import { motion } from "framer-motion";

// ? Framer Motion component, the "onView" prop will define if the children will be animated when scrolling,
// ? that is when it appears on the screen, or not.

export const LandscapeAnimation = ({
	children,
	direction = "right",
	time = 1,
	onView = false
}) => {
	return (
		<motion.div
			initial={
				direction === "right"
					? { x: 150, opacity: 0 }
					: { x: -150, opacity: 0 }
			}
			animate={!onView && { x: 0, opacity: 1 }}
			whileInView={onView && { opacity: 1, x: 0 }}
			viewport={onView && { once: true, amount: 0.375 }}
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
