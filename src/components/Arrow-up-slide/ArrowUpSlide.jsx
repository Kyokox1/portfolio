import React from "react";

import styles from "./arrowUpSlide.module.css";

import { BsArrowUpCircleFill } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

export const ArrowUpSlide = ({ isVisible }) => {
	const handleScroll = () => {
		window.scrollTo({ top: 0 });
	};

	return (
		<AnimatePresence>
			{!isVisible && (
				<motion.button
					onClick={handleScroll}
					className={styles.arrow}
					initial={{ opacity: 0, visibility: "hidden" }}
					animate={{ opacity: 1, visibility: "visible" }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 1,
						type: "spring",
						repeatType: "reverse"
					}}
					whileHover={{ color: "var(--gray-letter-100)" }}
					whileTap={{ scale: 1.3 }}
				>
					<BsArrowUpCircleFill />
				</motion.button>
			)}
		</AnimatePresence>
	);
};
