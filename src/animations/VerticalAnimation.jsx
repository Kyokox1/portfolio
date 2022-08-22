import React from "react";

import { motion } from "framer-motion";

export const VerticalAnimation = ({ children, delayTime = 0 }) => {
	return (
		<motion.div
			initial={{ y: 50, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			// animate={{ }}
			transition={{
				type: "spring",
				bounce: "0.3",
				duration: 1,
				delay: delayTime
			}}
			viewport={{ once: true, amount: 0.3 }}
		>
			{children}
		</motion.div>
	);
};
