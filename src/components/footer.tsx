import styles from '@/styles/RootLayout.module.css';

export default function Footer() {
	return <footer className={styles.footer}>
		<div className={styles['link-wrapper']}>
			<div className={styles['also-on']}>
				<h4 className={styles['also-title']}>WE ARE ALSO ON</h4>
				<hr className={styles['also-underline']}></hr>
				<div className={styles['social-media']}>
					<a className={styles['social-icon']} href='https://www.instagram.com/'>
						<div className={styles['icon-instagram']}></div>
					</a>
					<a className={styles['social-icon']} href='https://www.facebook.com/'>
						<div className={styles['icon-facebook']}></div>
					</a>
					<a className={styles['social-icon']} href='https://www.tiktok.com/'>
						<div className={styles['icon-tiktok']}></div>
					</a>
				</div>
			</div>
			<div className={styles.pages}>
				<h4 className={styles['pages-title']}>Pages</h4>
				<a href='/' className={styles['also-links']}>Home</a>
				<a href='/calculator' className={styles['also-links']}>Calculator</a>
				<a href='/contact' className={styles['also-links']}>Contact</a>
				<a href='/order' className={styles['also-links']}>Your Order</a>
				<a href='tracker' className={styles['also-links']}>Track Your Package</a>
			</div>
			<div className={styles['about-us']}>
				<h4 className={styles['about-us_title']}>About Us</h4>
				<a href='/howItWork' className={styles['also-links']}>How It Works</a>
				<a href='/faq' className={styles['also-links']}>FAQ</a>
				<a href='/ourBusiness' className={styles['also-links']}>Our Business</a>
				<a href='/careers' className={styles['also-links']}>Career</a>
			</div>
		</div>
		<hr className={styles.underline}></hr>
		<div className={styles.confidentiality}>
			<p className={styles.copyright}>Copyright © 2022</p>
			<div className={styles['privacy-policy_wrapper']}>
				<a href='#' className={styles['policy-text']}>Term & Condition</a>
				<a href='#' className={styles['policy-text']}>Privacy and Policy</a>
			</div>
		</div>
	</footer>;
}
