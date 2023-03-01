import type { ReactElement } from 'react';
import RootLayout from '@/components/rootLayout';
import type { NextPageWithLayout } from '../_app';

const Faq: NextPageWithLayout = () => {
  return <>
    <img className="faq-background" src="../../assets/icons/lines.svg" alt="lines" />
    <section className="main">
      <div className="faq-wrapper">
        <h1 className="faq-title">FAQs</h1>
        <p className="faq-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam sit amet felis vel ante vestibulum sollicitudin.
          Praesent efficitur condimentum lacus, sagittis vehicula
          tortor dictum vel.
        </p>
        <div className="faq-accardion">
          <div className="faq-accordion-wrapper">
            <div className="faq-accordion">
              <h5>Lorem Ipsum is Simple Dummy Text</h5>
              <div className="icon"></div>
            </div>
            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam sit amet felis vel ante vestibulum sollicitudin.
                Praesent efficitur condimentum lacus, sagittis vehicula
                tortor dictum vel.
              </p>
            </div>
          </div>
          <div className="faq-accordion-wrapper">
            <div className="faq-accordion">
              <h5>Lorem Ipsum is Simple Dummy Text</h5>
              <div className="icon"></div>
            </div>
            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam sit amet felis vel ante vestibulum sollicitudin.
                Praesent efficitur condimentum lacus, sagittis vehicula
                tortor dictum vel.
              </p>
            </div>
          </div>
          <div className="faq-accordion-wrapper">
            <div className="faq-accordion">
              <h5>Lorem Ipsum is Simple Dummy Text</h5>
              <div className="icon"></div>
            </div>
            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam sit amet felis vel ante vestibulum sollicitudin.
                Praesent efficitur condimentum lacus, sagittis vehicula
                tortor dictum vel.
              </p>
            </div>
          </div>
          <div className="faq-accordion-wrapper">
            <div className="faq-accordion">
              <h5>Lorem Ipsum is Simple Dummy Text</h5>
              <div className="icon"></div>
            </div>
            <div className="panel">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam sit amet felis vel ante vestibulum sollicitudin.
                Praesent efficitur condimentum lacus, sagittis vehicula
                tortor dictum vel.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="faq-image" src="../../assets/images/question-img.svg" alt="question-img" />
    </section>
  </>
}

Faq.getLayout = function getLayout(page: ReactElement) {
	return (
		<RootLayout>
			{page}
		</RootLayout>
	);
};

export default Faq;