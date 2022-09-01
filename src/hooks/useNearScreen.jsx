import { useEffect, useRef, useState } from "react";

export const useNearScreen = ({ distance = 0.8 } = {}) => {
	const [isVisible, setIsVisible] = useState(true);
	const elementRef = useRef();

	useEffect(() => {
		const onChange = (entries) => {
			const element = entries[0];
			if (element) setIsVisible(element.isIntersecting);
		};

		const observer = new IntersectionObserver(onChange, {
			threshold: distance
		});

		observer.observe(elementRef.current);
	});

	return { isVisible, elementRef };
};
