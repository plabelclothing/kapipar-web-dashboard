import styles from '@/styles/RootLayout.module.css';
import { useState } from 'react';

export default function Header() {
	//mnBodyWrClk, headerLgClk, menuSubLnkCll,
	const [navbarActive, setNavbarActive] = useState(false);

	return <header className={styles.header}>
		<div className='header-wrapper'>
			<a href='/'>
				<img className='header-logo' src='/icons/kapipar-logo.svg' alt='kapipar-logo' />
			</a>
			<div>
				<div onClick={() => setNavbarActive(!navbarActive)} className={ navbarActive ? 'menu-icon active' : 'menu-icon'}>
					<span />
				</div>
				<div className={ navbarActive ? 'menu-body_wrapper active' : 'menu-body_wrapper'}>
					<nav className='menu-body'>
						<ul className='menu-list'>
							<li><a href='/' className='menu-link'>Home</a></li>
							<li>
									<span className='menu-link menu-arrow_icon clickable-touch'>About
										<span className='burger-arrow' />
									</span>
								<ul className='menu-sub_list'>
									<li><a href='/howItWorks' className='menu-sub_link'>How It Works</a>
									</li>
									<li><a href='/faq' className='menu-sub_link'>FAQs</a></li>
									<li><a href='/ourBusiness' className='menu-sub_link'>Our Business</a>
									</li>
									<li><a href='careers' className='menu-sub_link'>Careers</a></li>
								</ul>
							</li>
							<li>
									<span className='menu-link menu-arrow_icon clickable-touch'>Services
										<span className='burger-arrow' />
									</span>
								<ul className='menu-sub_list'>
									<li><a href='/#package-consolidation' className='menu-sub_link'>Package Consolidation</a>
									</li>
									<li><a href='/#slimming-parcels' className='menu-sub_link'>Slimming Parcels</a></li>
									<li><a href='/#taking-pictures' className='menu-sub_link'>Taking Picture</a></li>
								</ul>
							</li>
							<li><a href='/calculator' className='menu-sub_link'>Calculator</a>
							</li>
							<li><a href='/contact' className='menu-sub_link'>Contact</a></li>
							<form action='/login' target='_blank'>
								<button className='get-btn menu-btn'>Login</button>
							</form>
							<div className='hide-menu'>
								<a href='/profile' className='hide-menu_link'>Profile</a>
								<a href='/order' className='hide-menu_link'>My Order</a>
								<a href='tracker' className='hide-menu_link'>Track Your Package</a>
								<a href='/' className='hide-menu_link'>Log Out</a>
							</div>
							<form action='/register' target='_blank'>
								<button className='get-btn menu-btn'>Sign Up</button>
							</form>
							<li>
								<span className='menu-link menu-arrow_icon clickable-touch'>Eng
									<span className='burger-arrow' />
								</span>
								<ul className='menu-sub_list menu-sub_small'>
									<li><a href='' className='menu-sub_link'>Ger</a></li>
									<li><a href='' className='menu-sub_link'>Pol</a></li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>;
}
