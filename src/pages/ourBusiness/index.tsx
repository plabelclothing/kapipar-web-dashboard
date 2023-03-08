import type { ReactElement } from 'react';
import RootLayout from '@/components/rootLayout';
import type { NextPageWithLayout } from '../_app';

const OurBusiness: NextPageWithLayout = () => {
  return <>
    <img className="bussines-background" src="/icons/lines.svg" alt="lines" />
    <div className="title-wrapper">
      <h1 className="title">Our Business</h1>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam sit amet felis vel ante vestibulum sollicitudin.
        Praesent efficitur condimentum lacus, sagittis vehicula
        tortor dictum vel.
      </p>
    </div>
    <section className="main-ourbussines">
      <h4>Lorem Ipsum</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam ultrices, ante non blandit imperdiet, lectus mauris
        egestas augue, sit amet commodo ante diam ac lacus.
        Morbi in nisi eget risus elementum tempus. className aptent
        taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Quisque eleifend ac ligula eget convallis.
        Aliquam erat volutpat. Duis ac posuere nisi, id consequat tellus.
        Phasellus ornare ligula eget enim tempor pretium. Pellentesque
        hendrerit cursus consectetur. Praesent facilisis ut dui vel
        dignissim. Nulla dignissim justo at lobortis sodales.
        Maecenas dapibus dolor purus, vel hendrerit ipsum cursus at.
        Maecenas eu nibh eros. In hac habitasse platea dictumst.
        In leo arcu, suscipit in laoreet et, sagittis vitae ex.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam ultrices, ante non blandit imperdiet, lectus mauris
        egestas augue, sit amet commodo ante diam ac lacus.
        Morbi in nisi eget risus elementum tempus. className aptent
        taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Quisque eleifend ac ligula eget convallis.
        Aliquam erat volutpat. Duis ac posuere nisi, id consequat tellus.
        Phasellus ornare ligula eget enim tempor pretium. Pellentesque
        hendrerit cursus consectetur. Praesent facilisis ut dui vel
        dignissim. Nulla dignissim justo at lobortis sodales.
        Maecenas dapibus dolor purus, vel hendrerit ipsum cursus at.
        Maecenas eu nibh eros. In hac habitasse platea dictumst.
        In leo arcu, suscipit in laoreet et, sagittis vitae ex.
      </p>
      <div className="ourbussines-image_wrapper">
        <div className="word-wrapper">
          <img className="word-image" src="/icons/word-icon.svg" alt="word-icon" />
          <h5 className="word-title">Lorem Ipsum</h5>
          <p className="word-description">Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
        </div>
        <div className="word-wrapper">
          <img className="word-image" src="/icons/word-icon.svg" alt="word-icon" />
          <h5 className="word-title">Lorem Ipsum</h5>
          <p className="word-description">Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
        </div>
        <div className="word-wrapper">
          <img className="word-image" src="/icons/word-icon.svg" alt="word-icon" />
          <h5 className="word-title">Lorem Ipsum</h5>
          <p className="word-description">Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
        </div>
        <div className="word-wrapper">
          <img className="word-image" src="/icons/word-icon.svg" alt="word-icon" />
          <h5 className="word-title">Lorem Ipsum</h5>
          <p className="word-description">Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </p>
        </div>
      </div>
      <h4 className="some-text">Lorem Ipsum</h4>
      <p className="some-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam ultrices, ante non blandit imperdiet, lectus mauris
        egestas augue, sit amet commodo ante diam ac lacus.
        Morbi in nisi eget risus elementum tempus.
        className aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Quisque eleifend ac ligula
        eget convallis.
      </p>
      <div className="cube-wrapper">
        <div className="cube">
          <h5 className="cube-title">Lorem Ipsum</h5>
          <p className="cube-description">+50</p>
        </div>
        <div className="cube">
          <h5 className="cube-title">Lorem Ipsum</h5>
          <p className="cube-description">+100</p>
        </div>
        <div className="cube">
          <h5 className="cube-title">Lorem Ipsum</h5>
          <p className="cube-description">+50</p>
        </div>
        <div className="cube">
          <h5 className="cube-title">Lorem Ipsum</h5>
          <p className="cube-description">+200</p>
        </div>
      </div>
    </section>
  </>
}

OurBusiness.getLayout = function getLayout(page: ReactElement) {
	return (
		<RootLayout>
			{page}
		</RootLayout>
	);
};

export default OurBusiness;