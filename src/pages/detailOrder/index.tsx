import type { ReactElement } from 'react';
import RootLayout from '@/components/rootLayout';
import type { NextPageWithLayout } from '../_app';

const DetailOrder: NextPageWithLayout = () => {
  return <>
    <div className="main_tracker_profile">
      <aside className="left-side_profile">
        <a className="profile-link" href="/profile">
          <img className="profile-link_icon" src="/icons/profile-icon.svg" alt="profile-icon" />
          Profile
        </a>
        <a className="profile-link" href="/order" >
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
      <div className="right-side_detail">
        <h2 className="detail-order_title">Detail Order</h2>
        <div className="detail-order_wrapper">
          <div className="image-description_wrapper">
            <img className="big-box_image" src="/images/big-box-image.svg" alt="big-box-image" />
            <div className="detail-description_wrapper">
              <h1 className="detail-description_title">Package Iphone</h1>
              <div className="subtitle-wrapper">
                <p className="subtitle">Sender : Apple Store Poland</p>
                <p className="subtitle">Date : 23 May 2022</p>
              </div>
              <p className="detail-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p>
            </div>
          </div>
          <div className="detail-photo_wrapper">
            <h3 className="photo-title">Photos</h3>
            <div className="photo-wrapper">
              <img className="photo-image" src="/images/unknown-image.svg" alt="unknown-image" />
              <img className="photo-image" src="/images/unknown-image.svg" alt="unknown-image" />
              <img className="photo-image" src="/images/unknown-image.svg" alt="unknown-image" />
              <img className="photo-image" src="/images/unknown-image.svg" alt="unknown-image" />
            </div>
            <div id="modal" className="modal">
              <div className="popup-area"></div>
              <div className="modal-body">
                <span id="modal-close" className="modal-close">&times;</span>
                <img id="modal-content" className="modal-content" />
              </div>
            </div>
          </div>
          <div className="more-service_wrapper">
            <h3 className="more-service_title">Need More Service ?</h3>
            <div className="more-card_wrapper">
              <div className="more-card">
                <aside>
                  <input className="card-input" type="checkbox" name="" id="" />
                </aside>
                <div className="card-right_wrapper">
                  <img className="card-right_image" src="/images/delivery-v4.svg" alt="" />
                  <p className="card-right_description">Taking Pictures</p>
                </div>
              </div>
              <div className="more-card">
                <aside>
                  <input className="card-input" type="checkbox" name="" id="" />
                </aside>
                <div className="card-right_wrapper">
                  <img className="card-right_image" src="/images/delivery-v3.svg" alt="" />
                  <p className="card-right_description">Repacking</p>
                </div>
              </div>
              <div className="more-card">
                <aside>
                  <input className="card-input" type="checkbox" name="" id="" />
                </aside>
                <div className="card-right_wrapper last-card_wrapper">
                  <img className="card-right_image last-card_image" src="/images/delivery-v2.svg" alt="" />
                  <p className="card-right_description last-card_derscription">Package Consilidation</p>
                </div>
              </div>
            </div>
            <button className="get-btn more-service_btn">Add</button>
          </div>
        </div>
      </div>
    </div>
  </>
}

DetailOrder.getLayout = function getLayout(page: ReactElement) {
	return (
		<RootLayout>
			{page}
		</RootLayout>
	);
};

export default DetailOrder;