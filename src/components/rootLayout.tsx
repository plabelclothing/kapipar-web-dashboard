import React from 'react';
import styles from '@/styles/RootLayout.module.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { useEffect, useRef } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	// initiate dataFetch
	const dataFetch = useRef(false);

	useEffect(() => {
		if (dataFetch.current) {
			// menu burger
			// 	const iconMenu = document.querySelector(`.${styles['menu-icon']}`);
			// 	if (iconMenu) {
			// 		const menuBurger = document.querySelector(`.${styles['menu-body_wrapper']}`);
			// 		const hideLogoImage = document.querySelector(`.${styles['header-logo']}`);
			// 		const MenuLink = document.querySelectorAll(`.${styles['menu-sub_link']}`);
			//
			// 		iconMenu.addEventListener('click', (e) => {
			// 			document.body.classList.toggle('lock');
			// 			iconMenu.classList.toggle('active');
			// 			menuBurger?.classList.toggle('active');
			// 			hideLogoImage?.classList.toggle('active');
			// 		});
			//
			// 		MenuLink.forEach((link) => {
			// 			link.addEventListener('click', () => {
			// 				document.body.classList.remove('lock');
			// 				iconMenu.classList.toggle('active');
			// 				menuBurger?.classList.toggle('active');
			// 				hideLogoImage?.classList.toggle('active');
			// 			});
			// 		});
			// 	}
			//
			// 	const allHoverBtn = document.querySelectorAll(`.${styles['get-btn']}`);
			//
			// 	let hover = (e: any) => {
			// 		e.target.classList.add('hover');
			// 	};
			//
			// 	let end = (e: any) => {
			// 		e.target.classList.remove('hover');
			// 	};
			//
			// 	allHoverBtn.forEach(btn => {
			// 		btn.addEventListener('touchmove', hover);
			// 		btn.addEventListener('touchend', end);
			// 	});
			// }
		}

		return () => {
			dataFetch.current = true;
		};
	}, []);

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
