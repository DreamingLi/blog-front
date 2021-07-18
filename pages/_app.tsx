import '../styles/globals.css';
import React, {ReactElement} from 'react';
import type {AppProps} from 'next/app';
import {Layout} from '../components';
import 'antd/dist/antd.css';

/**
 *
 * @param { NextComponentType<NextPageContext, any, {}>} Component
 * @param {any} pageProps
 * @return {ReactElement<any, any>} Component
 */
function MyApp({Component, pageProps}: AppProps): ReactElement<any, any> {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
