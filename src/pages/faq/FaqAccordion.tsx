import { ReactElement, useState } from 'react';

export function FaqAccordion() {
  const [faqStyleActive, setFaqStyleActive] = useState(false);
  return (
    <div className="faq-accordion-wrapper" onClick={() => setFaqStyleActive(!faqStyleActive)}>
      <div className={faqStyleActive ? 'faq-accordion active' : 'faq-accordion'}>
        <h5>Lorem Ipsum is Simple Dummy Text</h5>
        <div className="icon"></div>
      </div>
      <div className={faqStyleActive ? 'panel active' : 'panel'} style={faqStyleActive ? {'maxHeight': 53} : {}}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam sit amet felis vel ante vestibulum sollicitudin.
          Praesent efficitur condimentum lacus, sagittis vehicula
          tortor dictum vel.
        </p>
      </div>
    </div>
   );
}
