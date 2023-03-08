import { ReactElement, useState } from 'react';
import RootLayout from '@/components/rootLayout';
import type { NextPageWithLayout } from '../_app';
import { FaqAccordion } from '../../components/FaqAccordion';

const Faq: NextPageWithLayout = () => {
  const [faqStyleActive, setFaqStyleActive] = useState(false);

  return <>
    <img className="faq-background" src="/icons/lines.svg" alt="lines" />
    <section className="main_faq">
      <div className="faq-wrapper">
        <h1 className="faq-title">FAQs</h1>
        <p className="faq-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam sit amet felis vel ante vestibulum sollicitudin.
          Praesent efficitur condimentum lacus, sagittis vehicula
          tortor dictum vel.
        </p>

        <div className="faq-accardion">
          <FaqAccordion />
          <FaqAccordion />
          <FaqAccordion />
          <FaqAccordion />
        </div>
      </div>
      <img className="faq-image" src="/images/question-img.svg" alt="question-img" />
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