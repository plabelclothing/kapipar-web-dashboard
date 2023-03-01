import type { ReactElement } from 'react';
import RootLayout from '@/components/rootLayout';
import styles from '@/styles/RootLayout.module.css';
import Head from 'next/head';
import type { NextPageWithLayout } from './_app';

const Index: NextPageWithLayout = () => {
	return <>
		<Head>
			<title>My page title</title>
		</Head>
		<section className={styles.main}>
			<div className={styles['delivery-wrapper']}>
				<div className={styles['delivery']}>
					<h1 className={styles['delivery-title']}>
						Your <span className={styles['yellow-text']}>address in Europe</span>, now you
						can buy what you want with shipping to your country
					</h1>
					<p className={styles['delivery-description']}>
						Shipping 1KG your goods to Serbia only for 29.99 € Small letters
						for only 16 €
					</p>
					<button className={`${styles['get-btn']} ${styles['delivery-button']}`}>Get address</button>
				</div>
				<img className={styles['delivery-image']} src='/images/delivery.svg' alt='delivery' />
			</div>
			<div className={styles['payment-wrapper']}>
				<img className={styles['payment-image']} src='/images/scales.svg' alt='scales' />
				<div className={styles['payment']}>
					<h3 className={styles['payment-title']}>No Monthly Fee, No Setup Fee, No Processing Fee</h3>
					<h4 className={styles['payment-subtitle']}>You only pay for shipping</h4>
					<p className={styles['payment-description']}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
						amet felis vel ante vestibulum sollicitudin. Praesent efficitur
						condimentum lacus, sagittis vehicula tortor dictum vel.
					</p>
					<button className={`${styles['get-btn']} ${styles['payment-btn']}`}>Get address</button>
				</div>
			</div>
			<div className={styles['join-us']}>
				<h2 className={styles['join-us_title']}>Easy to Join Us!</h2>
				<p className={styles['join-us_description']}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
					amet felis vel ante vestibulum sollicitudin. Praesent efficitur
					condimentum lacus, sagittis vehicula tortor dictum vel.
				</p>
				<div className={styles['join-us_cards_wrapper']}>
					<div className={styles['join-us_cards']}>
						<img src='/images/sign.svg' alt='sign-image' className={styles['join-us_sign_image']} />
						<h5 className={styles['join-us_sign_title']}>
							1. Sign up and get your EU address
						</h5>
						<p className={styles['join-us_sign_description']}>
							You will get address in Poland
						</p>
					</div>
					<div className={styles['join-us_cards']}>
						<img src='/images/shopping.svg' alt='shopping' className={styles['join-us_shopping_image']} />
						<h5 className={styles['join-us_shopping_title']}>
							2. Shop in any EU Store <br />and ship it to your EU address
						</h5>
						<p className={styles['join-us_shopping_description']}>
							Only European stores, without UK
						</p>
					</div>
					<div className={styles['join-us_cards']}>
						<img src='/images/export.svg' alt='export' className={styles['join-us_export_image']} />
						<h5 className={styles['join-us_export_title']}>
							3. When we get your package <br />we will send it anywhere you
							want
						</h5>
						<p className={styles['join-us_export_description']}>
							we can do many options with you package
						</p>
					</div>
				</div>
			</div>
			<div className={styles['our-service']}>
				<div id='package-consolidation' className={styles['package-consolidation-wrapper']}>
					<div id='service-second-elem' className={styles['package-consolidation']}>
						<h4 id='service-first-elem' className={styles['package-consolidation_title']}>Our Service</h4>
						<h2 id='package-consolidation' className={styles['package-consolidation_subtitle']}>Package
							Consolidation</h2>
						<p className={styles['package-consolidation_description']}>
							Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit. Nam
							sit amet felis vel ante vestibulum sollicitudin. Praesent
							efficitur condimentum lacus, sagittis vehicula tortor dictum vel.
						</p>
						<button className={styles['read-more']}>
							Read More
							<img src='/images/arrow-right.png' alt='' className={styles['arrows']} />
						</button>
					</div>
					<img id='service-three-elem' src='/images/delivery-v2.svg' alt='delivery-v2'
							 className={styles['our-service_image']} />
				</div>
				<div id='slimming-parcels' className={styles['slimming-parcels_wrapper']}>
					<img src='/images/delivery-v3.svg' alt='delivery-v3' className={styles['slimming-parcels_image']} />
					<div className={styles['slimming-parcels']}>
						<h4 className={styles['slimming-parcels_title']}>Our Service</h4>
						<h2 className={styles['slimming-parcels_subtitle']}>Slimming Parcels</h2>
						<p className={styles['slimming-parcels_description']}>Lorem ipsum dolor sit amet, consectetur
							adipiscing <br />elit.
							Nam sit amet felis vel ante vestibulum sollicitudin.
							Praesent efficitur condimentum lacus, sagittis vehicula
							tortor dictum vel.
						</p>
						<button className={styles['read-more']}>
							Read More
							<img src='/images/arrow-right.png' alt='' className={styles['arrows']} />
						</button>
					</div>
				</div>
				<div id='taking-pictures' className={styles['taking-pictures_wrapper']}>
					<div className={styles['taking-pictures']}>
						<h4 className={styles['taking-pictures_title']}>Our Service</h4>
						<h2 className={styles['taking-pictures_subtitle']}>Taking Pictures</h2>
						<p className={styles['taking-pictures_description']}>Lorem ipsum dolor sit amet, consectetur
							adipiscing <br />elit.
							Nam sit amet felis vel ante vestibulum sollicitudin.
							Praesent efficitur condimentum lacus, sagittis vehicula
							tortor dictum vel.
						</p>
						<button className={styles['read-more']}>
							Read More
							<img src='/images/arrow-right.png' alt='' className={styles['arrows']} />
						</button>
					</div>
					<img src='/images/delivery-v4.svg' alt='delivery-v4' className={styles['taking-pictures_image']} />
				</div>
			</div>
		</section>
		<div className={styles['save-money']}>
			<img src='/images/map.svg' alt='map' className={styles['save-money_image']} />
			<div className={styles['save-money_wrapper']}>
				<h1 className={styles['save-money_title']}>Buy what you like and save money on delivery</h1>
				<button className={`${styles['get-btn']} ${styles['save-money_btn']}`}>Get address</button>
			</div>
		</div>
	</>;
};

Index.getLayout = function getLayout(page: ReactElement) {
	return (
		<RootLayout>
			{page}
		</RootLayout>
	);
};

export default Index;
