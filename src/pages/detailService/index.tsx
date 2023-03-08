import type { ReactElement } from 'react';
import RootLayout from '@/components/rootLayout';
import type { NextPageWithLayout } from '../_app';

const DetailSercive: NextPageWithLayout = () => {
  return <>
    <img className="detail-background" src="/icons/lines.svg" alt="lines" />
    <section className="detail-main">
      <div className="detail-package">
        <div className="greeting-wrapper">
          <h1 className="greeting-title">Package Consolidation</h1>
          <p className="greeting-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nam sit amet felis vel ante vestibulum sollicitudin.
            Praesent efficitur condimentum lacus, sagittis vehicula
            tortor dictum vel.
          </p>
          <button className="get-btn">Get address</button>
        </div>
        <img src="/images/delivery-v2.svg" alt="" />
      </div>
      <div className="detail-description">
        <h4 className="detail-description_title">Lorem Ipsum</h4>
        <p className="detail-description_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam ultrices, ante non blandit imperdiet, lectus mauris
          egestas augue, sit amet commodo ante diam ac lacus. Morbi
          in nisi eget risus elementum tempus. className aptent taciti
          sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Quisque eleifend ac ligula eget
          convallis. Aliquam erat volutpat. Duis ac posuere nisi,
          id consequat tellus. Phasellus ornare ligula eget enim
          tempor pretium. Pellentesque hendrerit cursus consectetur.
          Praesent facilisis ut dui vel dignissim. Nulla dignissim
          justo at lobortis sodales. Maecenas dapibus dolor purus,
          vel hendrerit ipsum cursus at. Maecenas eu nibh eros. In
          hac habitasse platea dictumst. In leo arcu, suscipit in
          laoreet et, sagittis vitae ex.
        </p>
        <div className="grants-wrapper">
          <div className="grants-cards">
            <img src="/icons/police-badge.svg" alt="police-badge" />
            <h4 className="grants-cards_title">Lorem Ipsum</h4>
            <p className="grants-cards_description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="grants-cards">
            <img src="/icons/tech-support.svg" alt="tech-support" />
            <h4 className="grants-cards_title">Lorem Ipsum</h4>
            <p className="grants-cards_description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="grants-cards">
            <img src="/icons/refund.svg" alt="refund" />
            <h4 className="grants-cards_title">Lorem Ipsum</h4>
            <p className="grants-cards_description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="grants-cards">
            <img src="/icons/credit-cards.svg" alt="credit-cards" />
            <h4 className="grants-cards_title">Lorem Ipsum</h4>
            <p className="grants-cards_description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
    </section>
    <div className="testimonials-wrapper">
      <div className="testimonials">
        <h4>Testimonials</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam ultrices, ante non blandit imperdiet, lectus mauris
          egestas augue, sit amet commodo ante diam ac lacus. Morbi
          in nisi eget risus elementum tempus.
        </p>
        <button className="get-btn">Get address</button>
      </div>
      <div></div>
    </div>
  </>
}

DetailSercive.getLayout = function getLayout(page: ReactElement) {
	return (
		<RootLayout>
			{page}
		</RootLayout>
	);
};

export default DetailSercive;