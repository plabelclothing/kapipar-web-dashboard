import styles from '@/styles/RootLayout.module.css';
import { useState } from 'react';

export default function Header() {
	const [menuIconClk, setClicked] = useState(false);
	//mnBodyWrClk, headerLgClk, menuSubLnkCll,

	return <header className={styles.header}>
		<div className={styles['header-wrapper']}>
			<a href='/'>
				<img className={styles['header-logo']} src='/icons/kapipar-logo.svg' alt='kapipar-logo' />
			</a>
			<div>
				<div onClick={() => setClicked(!menuIconClk)} className={`${styles['menu-icon']} ${menuIconClk ? 'active' : ''}`}>
					<span />
				</div>
				<div className={styles['menu-body_wrapper']}>
					<nav className={styles['menu-body']}>
						<ul className={styles['menu-list']}>
							<li><a href='/' className={styles['menu-link']}>Home</a></li>
							<li>
									<span className={`${styles['menu-link']} ${styles['menu-arrow_icon']} clickable-touch`}>About
										<span className={styles['burger-arrow']} />
									</span>
								<ul className={styles['menu-sub_list']}>
									<li><a href='/howItWork' className={styles['menu-sub_link']}>How It Works</a>
									</li>
									<li><a href='/faq' className={styles['menu-sub_link']}>FAQs</a></li>
									<li><a href='/ourBusiness' className={styles['menu-sub_link']}>Our Business</a>
									</li>
									<li><a href='careers' className={styles['menu-sub_link']}>Careers</a></li>
								</ul>
							</li>
							<li>
									<span className={`${styles['menu-link']} ${styles['menu-arrow_icon']} clickable-touch`}>Services
										<span className={styles['burger-arrow']} />
									</span>
								<ul className={styles['menu-sub_list']}>
									<li><a href='#package-consolidation' className={styles['menu-sub_link']}>Package Consolidation</a>
									</li>
									<li><a href='#slimming-parcels' className={styles['menu-sub_link']}>Slimming Parcels</a></li>
									<li><a href='#taking-pictures' className={styles['menu-sub_link']}>Taking Picture</a></li>
								</ul>
							</li>
							<li><a href='/calculator' className={styles['menu-sub_link']}>Calculator</a>
							</li>
							<li><a href='/contact' className={styles['menu-sub_link']}>Contact</a></li>
							<form action='/login' target='_blank'>
								<button className={`${styles['get-btn']} ${styles['menu-btn']}`}>Login</button>
							</form>
							<div className={styles['hide-menu']}>
								<a href='/profile' className={styles['hide-menu_link']}>Profile</a>
								<a href='/order' className={styles['hide-menu_link']}>My Order</a>
								<a href='tracker' className={styles['hide-menu_link']}>Track Your Package</a>
								<a href='/' className={styles['hide-menu_link']}>Log Out</a>
							</div>
							<form action='/register' target='_blank'>
								<button className={`${styles['get-btn']} ${styles['menu-btn']}`}>Sing Up</button>
							</form>
							<li>
								<span className={`${styles['menu-link']} ${styles['menu-arrow_icon']} clickable-touch`}>Eng
									<span className={styles['burger-arrow']} />
								</span>
								<ul className={`${styles['menu-sub_list']} ${styles['menu-sub_small']}`}>
									<li><a href='' className={styles['menu-sub_link']}>Ger</a></li>
									<li><a href='' className={styles['menu-sub_link']}>Pol</a></li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>;
}
