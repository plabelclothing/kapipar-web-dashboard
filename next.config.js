/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	i18n:          {
		locales:         ['en', 'de', 'fr'],
		defaultLocale:   'en',
		localeDetection: true,
	},
	trailingSlash: true,
};

module.exports = nextConfig;
