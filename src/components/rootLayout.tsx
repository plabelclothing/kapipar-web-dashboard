import React from 'react';
import styles from '@/styles/RootLayout.module.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { useEffect, useRef } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	// initiate dataFetch
	const dataFetch = useRef(false);

	return (
		<>
			<div className={styles.wrapper}>
				<Header />
				{children}
				<Footer />
			</div>
		</>
	);
}
