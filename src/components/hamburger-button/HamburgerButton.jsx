import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";

export const HamburgerButton = ({ setIsOpen }) => {
	return (
		<div onClick={() => setIsOpen((prevValue) => !prevValue)}>
			<GiHamburgerMenu />
		</div>
	);
};
