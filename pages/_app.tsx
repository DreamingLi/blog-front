import '../styles/globals.css';
import React from 'react';
import type {AppProps} from 'next/app';

/**
 * ssr params
 * @param { NextComponentType<NextPageContext, any, {}>} Component
 * @param {any} pageProps
 * @return {any} MyApp
 */
function MyApp({Component, pageProps}: AppProps): any {
  return <Component {...pageProps} />;
}
export default MyApp;
