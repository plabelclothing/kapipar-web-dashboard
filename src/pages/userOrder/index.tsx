import type { ReactElement } from 'react';
import RootLayout from '@/components/rootLayout';
import type { NextPageWithLayout } from '../_app';

const UserOrder: NextPageWithLayout = () => {
  return <>
    <div className="main">
      <h1 className="order-calculator_title">Where to send your package</h1>
      <p className="order-calculator_subtitle">Where will we be sending the package?</p>
      <div className="order-calculator_wrapper">
        <div className="order-wrapper">
          <label className="order-input_title" htmlFor="">Country</label>
          <select className="order-input select-input">
            <option value="">Poland</option>
            <option value="">UK</option>
            <option value="">Lithuania</option>
            <option value="">Latvia</option>
          </select>
          <label className="order-input_title" htmlFor="">Package type</label>
          <select className="order-input select-input">
            <option value="">Big</option>
            <option value="">Large</option>
            <option value="">Small</option>
          </select>
          <label className="order-input_title" htmlFor="">Some select</label>
          <select className="order-input select-input">
            <option value="">nothing</option>
            <option value="">big nothing</option>
            <option value="">Small nothing</option>
          </select>
          <label className="order-input_title" htmlFor="">Address</label>
          <input className="order-input" type="text" placeholder="17 Kensington Street" />
          <label className="order-input_title" htmlFor="">Some input</label>
          <input className="order-input" type="text" placeholder="Hello input" />
          <label className="order-input_title" htmlFor="">second some input</label>
          <input className="order-input" type="text" placeholder="Hello second input" />
          <label className="order-input_title" htmlFor="">three some input</label>
          <input className="order-input" type="text" placeholder="Hello three input" />
          <div className="order-btn_wrapper">
            <button className="get-btn order-btn">Calculate</button>
            <button className="get-btn order-btn">Order</button>
          </div>
        </div>
        <div className="calculator-wrapper">
          <div className="calculator-text_wrapper">
            <p className="calculator-title">Your Price Is :</p>
            <p className="calculator-price">13.89  €</p>
            <p className="calculator-description">usually it takes about 14 days for delivery</p>
          </div>
        </div>
      </div>
    </div>
  </>
}

UserOrder.getLayout = function getLayout(page: ReactElement) {
	return (
		<RootLayout>
			{page}
		</RootLayout>
	);
};

export default UserOrder;