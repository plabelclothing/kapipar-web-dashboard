import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import '../styles/global.css';
import '../pages/contact/contact.css';
import '../pages/calculator/calculator.css';
import '../pages/login/login.css';
import '../pages/register/register.css'
import '../pages/faq/faq.css'
import './howItWorks/howItWorks.css'
import './ourBusiness/ourBusiness.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return getLayout(
		<>
			<Script src='/js/script.js' />
			<Component {...pageProps} />
		</>,
	);
}
