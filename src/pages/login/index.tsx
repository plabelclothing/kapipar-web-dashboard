import type { ReactElement } from 'react';
import RootLayout from '@/components/rootLayout';
import type { NextPageWithLayout } from '../_app';

const Login: NextPageWithLayout = () => {
  return <>
    <div className="wrapper_login-main">
    <div className="logo-image">
      <a href="/"><img className="logo" src="/icons/kapipar-logo.svg" alt="Kapipar" /></a>
    </div>
    <div className="login-wrapper">
      <div className="greeting">
        <img className="greeting-image" src="/images/gift-image.svg" alt="gift-image" />
        <h3 className="greeting-title">Welcome</h3>
        <p className="greeting-description">Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the
          industry's standard
        </p>
      </div>
      <div className="login">
        <h4 className="login-title">Login</h4>
        <div className="login-window">
          <p className="login-window_title">Email</p>
          <input className="login-input" type="text" placeholder="Email" />
          <p className="login-window_title">Password</p>
          <input className="login-input" type="password" placeholder="Password" />
          <div className="recovery-memorization">
            <form className="remember-wrapper" action="">
              <input type="checkbox" />
              <label className="remember-description" htmlFor=''>Remember me</label>
            </form>
            <a className="forgot" href="">Forgot Password</a>
          </div>
          <button className="get-btn login-btn">Login</button>
        </div>
        <p className="login-footer_description">Don’t have an account? <a href="../Register/Register.html" className="description-biggest">Sign Up</a></p>
      </div>
    </div>
  </div>
  </>
}

Login.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			{page}
		</>
	);
};

export default Login;