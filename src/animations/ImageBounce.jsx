import React from "react";

import { motion } from "framer-motion";

export const ImageBounce = ({ top, base, imgUrl, name }) => {
	return (
		<motion.img
			initial={{ y: top }}
			animate={{ y: base }}
			transition={{
				duration: 2,
				repeat: Infinity,
				repeatType: "reverse"
			}}
			src={imgUrl}
			alt={name}
		/>
	);
};
