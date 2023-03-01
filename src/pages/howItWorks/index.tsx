import type { ReactElement } from 'react';
import RootLayout from '@/components/rootLayout';
import type { NextPageWithLayout } from '../_app';

const HowItWork: NextPageWithLayout = () => {
  return <>
    <img className="main-background" src="/icons/lines.svg" alt="" />
      <section className="main">
        <div className="how-works">
          <h1 className="how-works_title">How It Works</h1>
          <p className="how-works_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
            amet felis vel ante vestibulum sollicitudin. Praesent efficitur
            condimentum lacus, sagittis vehicula tortor dictum vel.
          </p>
          <button className="get-btn how-works_btn">Get address</button>
        </div>
        <div className="sing-up_wrapper">
          <img className="sing-up_image" src="/images/sign.svg" alt="sing-up image" />
          <div className="sing-up">
            <h3 className="about-works_title">1. Sign up and get your EU address</h3>
            <h4 className="about-works_subtitle">You will get address in Poland</h4>
            <p className="about-works_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
              amet felis vel ante vestibulum sollicitudin. Praesent efficitur
              condimentum lacus, sagittis vehicula tortor dictum vel.
            </p>
          </div>
        </div>
        <div className="shop-in_wrapper">
          <div className="shop-in">
            <h3 className="about-works_title">
              2. Shop in any EU Store and ship it to your EU address
            </h3>
            <h4 className="about-works_subtitle">
              Only European stores, without UK
            </h4>
            <p className="about-works_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
              amet felis vel ante vestibulum sollicitudin. Praesent efficitur
              condimentum lacus, sagittis vehicula tortor dictum vel.
            </p>
          </div>
          <img className="shop-in_image" src="/images/shopping.svg" alt="shop-in-image" />
        </div>
        <div className="sending-wrapper">
          <img className="sending-image" src="/images/export.svg" alt="track" />
          <div className="sending">
            <h3 className="about-works_title">
              3. When we get your package we will send it anywhere you want
            </h3>
            <h4 className="about-works_subtitle">
              We can do many options with you package
            </h4>
            <p className="about-works_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
              amet felis vel ante vestibulum sollicitudin. Praesent efficitur
              condimentum lacus, sagittis vehicula tortor dictum vel.
            </p>
          </div>
        </div>
      </section>
  </>
}

HowItWork.getLayout = function getLayout(page: ReactElement) {
	return (
		<RootLayout>
			{page}
		</RootLayout>
	);
};

export default HowItWork;