import type { ReactElement } from 'react';
import RootLayout from '@/components/rootLayout';
import Head from 'next/head';
import type { NextPageWithLayout } from './_app';


const Index: NextPageWithLayout = () => {
	return <>
		<Head>
			<title>My page title</title>
		</Head>
		<section className='main'>
			<div className='delivery-wrapper'>
				<div className='delivery'>
					<h1 className='delivery-title'>
						Your <span className='yellow-text'>address in Europe</span>, now you
						can buy what you want with shipping to your country
					</h1>
					<p className='delivery-description'>
						Shipping 1KG your goods to Serbia only for 29.99 € Small letters
						for only 16 €
					</p>
					<button className='get-btn delivery-button'>Get address</button>
				</div>
				<img className='delivery-image' src='/images/delivery.svg' alt='delivery' />
			</div>
			<div className='payment-wrapper'>
				<img className='payment-image' src='/images/scales.svg' alt='scales' />
				<div className='payment'>
					<h3 className='payment-title'>No Monthly Fee, No Setup Fee, No Processing Fee</h3>
					<h4 className='payment-subtitle'>You only pay for shipping</h4>
					<p className='payment-description'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
						amet felis vel ante vestibulum sollicitudin. Praesent efficitur
						condimentum lacus, sagittis vehicula tortor dictum vel.
					</p>
					<button className='get-btn payment-btn'>Get address</button>
				</div>
			</div>
			<div className='join-us'>
				<h2 className='join-us_title'>Easy to Join Us!</h2>
				<p className='join-us_description'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
					amet felis vel ante vestibulum sollicitudin. Praesent efficitur
					condimentum lacus, sagittis vehicula tortor dictum vel.
				</p>
				<div className='join-us_cards_wrapper'>
					<div className='join-us_cards'>
						<img src='/images/sign.svg' alt='sign-image' className='join-us_sign_image' />
						<h5 className='join-us_sign_title'>
							1. Sign up and get your EU address
						</h5>
						<p className='join-us_sign_description'>
							You will get address in Poland
						</p>
					</div>
					<div className='join-us_cards'>
						<img src='/images/shopping.svg' alt='shopping' className='join-us_shopping_image' />
						<h5 className='join-us_shopping_title'>
							2. Shop in any EU Store <br />and ship it to your EU address
						</h5>
						<p className='join-us_shopping_description'>
							Only European stores, without UK
						</p>
					</div>
					<div className='join-us_cards'>
						<img src='/images/export.svg' alt='export' className='join-us_export_image' />
						<h5 className='join-us_export_title'>
							3. When we get your package <br />we will send it anywhere you
							want
						</h5>
						<p className='join-us_export_description'>
							we can do many options with you package
						</p>
					</div>
				</div>
			</div>
			<div className='our-service'>
				<div id='package-consolidation' className='package-consolidation-wrapper'>
					<div id='service-second-elem' className='package-consolidation'>
						<h4 id='service-first-elem' className='package-consolidation_title'>Our Service</h4>
						<h2 id='package-consolidation' className='package-consolidation_subtitle'>Package
							Consolidation</h2>
						<p className='package-consolidation_description'>
							Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit. Nam
							sit amet felis vel ante vestibulum sollicitudin. Praesent
							efficitur condimentum lacus, sagittis vehicula tortor dictum vel.
						</p>
						<button className='read-more'>
							Read More
							<img src='/images/arrow-right.png' alt='' className='arrows' />
						</button>
					</div>
					<img id='service-three-elem' src='/images/delivery-v2.svg' alt='delivery-v2'
							 className='our-service_image' />
				</div>
				<div id='slimming-parcels' className='slimming-parcels_wrapper'>
					<img src='/images/delivery-v3.svg' alt='delivery-v3' className='slimming-parcels_image' />
					<div className='slimming-parcels'>
						<h4 className='slimming-parcels_title'>Our Service</h4>
						<h2 className='slimming-parcels_subtitle'>Slimming Parcels</h2>
						<p className='slimming-parcels_description'>Lorem ipsum dolor sit amet, consectetur
							adipiscing <br />elit.
							Nam sit amet felis vel ante vestibulum sollicitudin.
							Praesent efficitur condimentum lacus, sagittis vehicula
							tortor dictum vel.
						</p>
						<button className='read-more'>
							Read More
							<img src='/images/arrow-right.png' alt='' className='arrows' />
						</button>
					</div>
				</div>
				<div id='taking-pictures' className='taking-pictures_wrapper'>
					<div className='taking-pictures'>
						<h4 className='taking-pictures_title'>Our Service</h4>
						<h2 className='taking-pictures_subtitle'>Taking Pictures</h2>
						<p className='taking-pictures_description'>Lorem ipsum dolor sit amet, consectetur
							adipiscing <br />elit.
							Nam sit amet felis vel ante vestibulum sollicitudin.
							Praesent efficitur condimentum lacus, sagittis vehicula
							tortor dictum vel.
						</p>
						<button className='read-more'>
							Read More
							<img src='/images/arrow-right.png' alt='' className='arrows' />
						</button>
					</div>
					<img src='/images/delivery-v4.svg' alt='delivery-v4' className='taking-pictures_image' />
				</div>
			</div>
		</section>
		<div className='save-money'>
			<img src='/images/map.svg' alt='map' className='save-money_image' />
			<div className='save-money_wrapper'>
				<h1 className='save-money_title'>Buy what you like and save money on delivery</h1>
				<button className='get-btn save-money_btn'>Get address</button>
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
