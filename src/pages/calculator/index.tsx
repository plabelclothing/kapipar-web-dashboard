import type { ReactElement } from 'react';
import RootLayout from '@/components/rootLayout';
import type { NextPageWithLayout } from '../_app';

const Calculator: NextPageWithLayout = () => {
  return <>
    <img className="calculator-background_main" src="/icons/lines.svg" alt="lines"/>
      <section className="main_calculator">
        <div className="calculator-title_wrapper">
          <h1 className="calculator-title_main">Calculate your price</h1>
          <p className="calculator-description_main">
            Where will we be sending the package?
          </p>
        </div>
        <div className="calculator-payment-wrapper">
          <div className="owner-information">
            <div className="block-1_wrapper">
              <div className="owner-country_wrapper">
                <h4 className="owner-title">Country</h4>
                <select className="owner-input">
                  <option value="">Serbia</option>
                </select>
              </div>
              <div className="owner-city_wrapper">
                <h4 className="owner-title">City</h4>
                <select className="owner-input">
                  <option value="">Belgrade</option>
                </select>
              </div>
            </div>
            <div className="block-2_wrapper">
              <div className="owner-postal_wrapper">
                <h4 className="owner-title">Postal Code</h4>
                <input className="owner-input_small" type="text" placeholder="11122" readOnly />
              </div>
              <div className="owner-package_wrapper">
                <h4 className="owner-title">Package Weight</h4>
                <input className="owner-input_small owner-input_mobile" type="text" placeholder="100"/>
              </div>
            </div>
            <h4 className="package-title">Package Value</h4>
            <input className="package-input input-icon" type="text" placeholder="100"/>
            <div className="package-insure_wrapper">
              <input type="checkbox" id="scales" name="scales" />
              <p className="package-insure_description">
                do you want to insure the package?
              </p>
            </div>
            <div className="package-insure_accardion">
              <div className="shipping-size_wrapper">
                <div className="shipping-wrapper shipping-btn">
                  <span className="plus-btn">+</span>
                  <p className="shipping-description">
                    I want to enter shipping sizes
                  </p>
                </div>
                <div className="panel">
                  <div className="size-table_wrapper">
                    <p className="size-table_title">L</p>
                    <input className="size-table_input" type="text" value="10" />
                    <p className="size-table_title">W</p>
                    <input className="size-table_input" type="text" value="10" />
                    <p className="size-table_title">H</p>
                    <input className="size-table_input" type="text" value="10" />
                    <select className="size-table_type">
                      <option value="">CM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <button className="calculator-btn_main get-btn">Check Your Price</button>
          </div>
          <div className="price-card">
            <div className="price-wrapper">
              <h3 className="price-title">Your Price Is :</h3>
              <p className="price-cost">12.89 €</p>
              <p className="price-description">
                usually it takes about 14 days for delivery
              </p>
            </div>
          </div>
        </div>
      </section>
  </>
}

Calculator.getLayout = function getLayout(page: ReactElement) {
	return (
		<RootLayout>
			{page}
		</RootLayout>
	);
};

export default Calculator;