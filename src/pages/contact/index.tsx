import type { ReactElement } from 'react';
import RootLayout from '@/components/rootLayout';
import type { NextPageWithLayout } from '../_app';

const Contact: NextPageWithLayout = () => {
	return <>
    <div className="background-box">
      <img className="contact-background" src="/icons/lines.svg" alt="lines" />
    </div>
		<h1 className="contact-title">Contact Us!</h1>
		<div className="contact-wrapper">
      <img className="contact-image" src="/images/telephone-guy.svg" alt="telephone-guy" />
      <div className="contact-data_wrapper">
        <p className="contact-subtitle">Please fill the contact form below, Our team will respond
          back to you in one working day.
        </p>
        <p className="contact-input_title">Name*</p>
        <input className="contact-input" type="text" />
        <div className="email-phone_wrapper">
          <div className="email">
            <p className="contact-input_title">Email*</p>
            <input className="contact-input email-phone_input" type="text" />
          </div>
          <div className="phone">
            <p className="contact-input_title">Phone number*</p>
            <input className="contact-input email-phone_input" type="text" />
          </div>
        </div>
        <p className="contact-input_title">Inquiry*</p>
        <input className="contact-input" type="text" />
        <p className="contact-input_title">Message*</p>
        <input className="contact-input message-input" type="text" />
        <div className="captcha-wrapper">
          <div className="g-recaptcha" data-sitekey="6Lf1MkcUAAAAAFFY9zmereeM0-HHoJP5_25wiLLz"></div>
          <button className="get-btn">Submit</button>
        </div>
      </div>
    </div>
    <div className="detail-wrapper">
      <div className="detail">
        <h4 className="detail-title">Detail</h4>
        <div className="detail-contact_wrapper">
          <div className="detail-contact_phone">
            <img className="detail-image" src="/icons/handset-icon.svg" alt="" />
            <a className="detail-contact_link" href=""><span className="link-title">Phone :</span> +1 02 0223 0223</a>
          </div>
          <div className="detail-contact_email">
            <img className="detail-image" src="/icons/envelope-icon.svg" alt="" />
            <a className="detail-contact_link" href=""><span className="link-title">Email :</span> youremail@gmail.com</a>
          </div>
        </div>
        <div className="detail-email_wrapper">
          <img className="detail-image" src="/icons/address-tag-icon.svg" alt="" />
          <a className="detail-contact_link" href=""><span className="link-title">Address :</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</a>
        </div>
      </div>
      <img className="detail-footer_image" src="/images/calling-guy-girl.svg" alt="" />
    </div>
	</>;
};

Contact.getLayout = function getLayout(page: ReactElement) {
	return (
		<RootLayout>
			{page}
		</RootLayout>
	);
};

export default Contact;