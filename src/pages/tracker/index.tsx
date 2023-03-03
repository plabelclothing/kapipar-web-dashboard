import type { ReactElement } from 'react';
import RootLayout from '@/components/rootLayout';
import type { NextPageWithLayout } from '../_app';

const Tracker: NextPageWithLayout = () => {
  return <>
    <div className="main_tracker_profile">
      <aside className="left-side_profile">
        <a className="profile-link" href="/profile">
          <img className="profile-link_icon" src="/icons/profile-icon.svg" alt="profile-icon" />
          Profile
        </a>
        <a className="profile-link" href="/order">
          <img className="profile-link_icon order-icon" src="/icons/order-icon.svg" alt="order-icon" />
          My Orders
        </a>
        <a className="profile-link" href="/tracker">
          <img className="profile-link_icon" src="/icons/track-icon.svg" alt="track-icon" />
          Track Your Package
        </a>
        <a className="profile-link" href="#">
          <img className="profile-link_icon" src="/icons/track-icon.svg" alt="track-icon" />
          My address
        </a>
        <a className="profile-link" href="#">
          <img className="profile-link_icon" src="/icons/logout-icon.svg" alt="logout-icon" />
          Log Out
        </a>
      </aside>
      <div className="right-side_tracker">
        <h2 className="tracker-title">Track Package</h2>
        <div className="shipping-check_wrapper">
          <div className="shipping-check_title-wrapper">
            <img className="track-icon" src="/icons/track-icon.svg" alt="track-icon" />
            <h4 className="shipping-check_title">Shipping Check</h4>
          </div>
          <div className="tracker-image_wrapper">
            <img className="tracker-image" src="/images/tracker-image.svg" alt="tracker-image" />
          </div>
          <form className="tracker-input_wrapper">
            <input className="tracker-input" type="text" placeholder="Please Enter Your Number Order" />
            <button className="get-btn tracker-btn">Track</button>
          </form>
        </div>
      </div>
    </div>
  </>
}

Tracker.getLayout = function getLayout(page: ReactElement) {
	return (
		<RootLayout>
			{page}
		</RootLayout>
	);
};

export default Tracker;