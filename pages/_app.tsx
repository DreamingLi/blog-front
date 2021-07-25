import '../styles/globals.css';
import React, {ReactElement} from 'react';
import {Layout} from '../components';
import 'antd/dist/antd.css';
import {getNav} from '../lib/api';
import {HeaderContent} from '../interface';
import {NextComponentType, NextPageContext} from 'next';
import { AxiosResponse } from 'axios';

interface AppProps{
  Component: NextComponentType<NextPageContext, any, {}>,
  pageProps: any,
  headerContent: HeaderContent
}

/**
 *
 * @param { AppProps } Component
 * @param {any} pageProps
 * @param {HeaderContent} headerContent
 * @return {ReactElement<any, any>} Component
 */
function MyApp({
  Component,
  pageProps,
  headerContent}: AppProps): ReactElement<any, any> {
  return (
    <Layout headerContent={headerContent}>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;

MyApp.getInitialProps = async (appContext: any) => {
  let headerContent: AxiosResponse<HeaderContent> | string = await getNav();
  if (!headerContent) {
    headerContent = '';
  }
  return {headerContent};
};

