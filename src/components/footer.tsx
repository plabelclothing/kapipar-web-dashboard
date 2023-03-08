import styles from '@/styles/RootLayout.module.css';

export default function Footer() {
	return <footer className={styles.footer}>
		<div className='link-wrapper'>
			<div className='also-on'>
				<h4 className='also-title'>WE ARE ALSO ON</h4>
				<hr className='also-underline'></hr>
				<div className='social-media'>
					<a className='social-icon' href='https://www.instagram.com/'>
						<div className='icon-instagram'></div>
					</a>
					<a className='social-icon' href='https://www.facebook.com/'>
						<div className='icon-facebook'></div>
					</a>
					<a className='social-icon' href='https://www.tiktok.com/'>
						<div className='icon-tiktok'></div>
					</a>
				</div>
			</div>
			<div className={styles.pages}>
				<h4 className='pages-title'>Pages</h4>
				<a href='/' className='also-links'>Home</a>
				<a href='/calculator' className='also-links'>Calculator</a>
				<a href='/contact' className='also-links'>Contact</a>
				<a href='/order' className='also-links'>Your Order</a>
				<a href='tracker' className='also-links'>Track Your Package</a>
			</div>
			<div className='about-us'>
				<h4 className='about-us_title'>About Us</h4>
				<a href='/howItWorks' className='also-links'>How It Works</a>
				<a href='/faq' className='also-links'>FAQ</a>
				<a href='/ourBusiness' className='also-links'>Our Business</a>
				<a href='/careers' className='also-links'>Career</a>
			</div>
		</div>
		<hr className={styles.underline}></hr>
		<div className={styles.confidentiality}>
			<p className={styles.copyright}>Copyright © 2022</p>
			<div className='privacy-policy_wrapper'>
				<a href='#' className='policy-text'>Term & Condition</a>
				<a href='#' className='policy-text'>Privacy and Policy</a>
			</div>
		</div>
	</footer>;
}
