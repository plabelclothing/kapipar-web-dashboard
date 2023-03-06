import type { ReactElement } from 'react';
import RootLayout from '@/components/rootLayout';
import type { NextPageWithLayout } from '../_app';

const Profile: NextPageWithLayout = () => {
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
      <div className="right-side_profile">
        <h2 className="profile-title">Profile</h2>
        <div className="profile-information">
          <div className="profile-photo">
            <div className="photo-circle">
              <img className="user-photo" src="/icons/profile-icon.svg" alt="" />
            </div>
            <p className="profile-name">ilkerturker@gmail.com</p>
          </div>

        </div>
        <div className="profile-password_wrapper">
          <div className="profile-password">
            <div className="password-wrapper">
              <img className="profile-right_icon" src="/icons/lock-icon.svg" alt="lock-icon" />
              <p className="profile-wrapper_title">Password</p>
            </div>
            <div className="edit-btn change-btn">Change</div>
          </div>
          <div className="panel-password">
            <a href="#user-popup">
              <button className="get-btn submit-change">Change Password</button>
            </a>
          </div>
          <p className="password-title">**********</p>
        </div>
        <div className="user-address_wrapper">
          <div className="user-title_wrapper">
            <img className="profile-right_icon" src="/icons/track-icon.svg" alt="track-icon" />
            <p className="profile-wrapper_title">Delivery address</p>
          </div>
          <div className="user-location_wrapper">
            <div className="user-input_wrapper">
              <p className="user-input_title"><span className="red-dot">*</span> Country</p>
              <select className="location-input location-select" name="" id="" >
                <option value="">Poland</option>
                <option value="">Germany</option>
                <option value="">Finland</option>
                <option value="">England</option>
              </select>
            </div>
            <div className="user-input_wrapper">
              <p className="user-input_title"><span className="red-dot">*</span> Region</p>
              <input className="location-input" type="text" />
            </div>
            <div className="user-input_wrapper">
              <p className="user-input_title"><span className="red-dot">*</span> City</p>
              <input className="location-input" type="text" />
            </div>
            <div className="user-input_wrapper">
              <p className="user-input_title"><span className="red-dot">*</span> Street</p>
              <input className="location-input" type="text" />
            </div>
            <div className="user-input_wrapper">
              <p className="user-input_title"><span className="red-dot">*</span> Full name</p>
              <input className="location-input" type="text" />
            </div>
            <div className="user-input_wrapper">
              <p className="user-input_title"><span className="red-dot">*</span> Phone</p>
              <input className="location-input" type="text" />
            </div>
          </div>
          <button className="get-btn location-btn">Save</button>
        </div>
        <div id="user-popup" className="user-popup">
          <a href="#" className="popup-area"></a>
          <div className="user-popup_body">
            <div className="popup-content">
              <div className="popup-title">Request to change the password is successful</div>
              <div className="popup-btn_wrapper">
                <a href="#" className="popup-close close-popup">close</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

Profile.getLayout = function getLayout(page: ReactElement) {
	return (
		<RootLayout>
			{page}
		</RootLayout>
	);
};

export default Profile;