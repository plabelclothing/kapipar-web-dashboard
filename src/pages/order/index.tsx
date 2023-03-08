import type { ReactElement } from 'react';
import RootLayout from '@/components/rootLayout';
import type { NextPageWithLayout } from '../_app';

const Order: NextPageWithLayout = () => {
  return <>
    <div className="main_tracker_profile">
      <aside className="left-side_profile">
        <a className="profile-link" href="profile">
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
      <div className="right-side_order">
        <h2 className="my-order_title">My Order</h2>
        <button className="get-btn consolidate-btn">Consolidate</button>
        <div className="orders-wrapper">
          <div className="order-title_wrapper">
            <div className="wrapper-title">
              <img className="orders-cart" src="/icons/new-cart.svg" alt="cart icon" />
              <p className="orders-title">New Order</p>
            </div>
            <div className="parcel-combine">
              <p className="consolidate-title">select</p>
              <input className="combine-btn" id="consolidate" type="checkbox" />
            </div>
          </div>
          <div className="order-card_wrapper">
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="orders-wrapper">
          <div className="order-title_wrapper">
            <div className="wrapper-title">
              <img className="orders-cart" src="/icons/new-cart.svg" alt="cart icon" />
              <p className="orders-title">New Order</p>
            </div>
            <div className="parcel-combine">
              <p className="consolidate-title">select</p>
              <input className="combine-btn" id="consolidate" type="checkbox" />
            </div>
          </div>
          <div className="order-card_wrapper">
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="orders-wrapper">
          <div className="order-title_wrapper">
            <div className="wrapper-title">
              <img className="orders-cart" src="/icons/new-cart.svg" alt="cart icon" />
              <p className="orders-title">New Order</p>
            </div>
            <div className="parcel-combine">
              <p className="consolidate-title">select</p>
              <input className="combine-btn" id="consolidate" type="checkbox" />
            </div>
          </div>
          <div className="order-card_wrapper">
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="orders-wrapper">
          <div className="order-title_wrapper">
            <div className="wrapper-title">
              <img className="orders-cart" src="/icons/new-cart.svg" alt="cart icon" />
              <p className="orders-title">New Order</p>
            </div>
            <div className="parcel-combine">
              <p className="consolidate-title">select</p>
              <input className="combine-btn" id="consolidate" type="checkbox" />
            </div>
          </div>
          <div className="order-card_wrapper">
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
            <div className="order-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="order-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="description-btn_wrapper">
                  <button className="get-btn description-btn">Send Package</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="process-wrapper">
          <div className="process-title_wrapper">
            <img className="process-icon" src="/icons/process-car-icon.svg" alt="car icon" />
            <p className="process-title">On Process</p>
          </div>
          <div className="process-card_wrapper">
            <div className="process-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="process-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="process-btn_wrapper">
                  <button className="get-btn description-btn">Process</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
            <div className="process-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="process-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="process-btn_wrapper">
                  <button className="get-btn description-btn">Process</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
            <div className="process-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="process-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="process-btn_wrapper">
                  <button className="get-btn description-btn">Process</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
            <div className="process-card">
              <img className="order-image" src="/images/package-image.svg" alt="package-image" />
              <div className="process-description_wrapper">
                <h4 className="order-description_title">Package Iphone </h4>
                <p className="order-description">Sender : Apple Store Poland</p>
                <p className="order-description_subtitle">Date : 23 May 2022</p>
                <div className="process-btn_wrapper">
                  <button className="get-btn description-btn">Process</button>
                  <button className="description-btn_line">See Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lds-ellipsis_wrapper">
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </>
}

Order.getLayout = function getLayout(page: ReactElement) {
	return (
		<RootLayout>
			{page}
		</RootLayout>
	);
};

export default Order;