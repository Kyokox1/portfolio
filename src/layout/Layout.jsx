import React from "react";

import { Header } from "../sections/header/Header";

import styles from "./layout.module.css";

export const Layout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main>{children}</main>
		</div>
	);
};
