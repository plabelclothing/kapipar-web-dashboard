import type { ReactElement } from 'react';
import RootLayout from '@/components/rootLayout';
import type { NextPageWithLayout } from '../_app';

const Register: NextPageWithLayout = () => {
  return <>
    <div className="wrapper_register-main">
      <img className="register-background" src="/icons/lines.svg" alt="line" />
      <div className="logo-image">
        <a href="/"><img className="logo" src="/icons/kapipar-logo.svg" alt="" /></a>
      </div>
      <h1 className="register-title">Register</h1>
      <div className="contact-information_wrapper">
        <div className="contact-information_data">
          <h4 className="data-title">Email <span className="red-dot">*</span></h4>
          <input className="data-input" type="text" placeholder="Email" />
          <h4 className="data-title">Password <span className="red-dot">*</span></h4>
          <input className="data-input" type="password" placeholder="Password" />
          <h4 className="data-title">
            Retry password <span className="red-dot">*</span>
          </h4>
          <input className="data-input" type="password" placeholder="Password" />
          <form className="rules-wrapper" action="">
            <input className="rules-input" id="rules" type="checkbox" />
            <p className="rules-description">Agree with the rules</p>
          </form>
          <button className="register-btn get-btn">Create Account</button>
          <p className="register-description">
            Already have an account ?
            <a href="/login" className="description-biggest"> Login</a>
          </p>
        </div>
      </div>
    </div>
  </>
}

Register.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			{page}
		</>
	);
};

export default Register;