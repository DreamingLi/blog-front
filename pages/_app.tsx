import '../styles/globals.css';
import React, {ReactElement} from 'react';
import {Layout} from '../components';
import 'antd/dist/antd.css';
import {getFooter, getHeader} from '../lib/api';
import {HeaderContent} from '../interface';
import {NextComponentType, NextPageContext} from 'next';
import {AxiosResponse} from 'axios';
import {FooterContent} from '../interface';

interface AppProps{
  Component: NextComponentType<NextPageContext, any, {}>,
  pageProps: any,
  headerContent: HeaderContent
  footerContent: FooterContent
}

/**
 *
 * @param { AppProps } Component
 * @param {any} pageProps
 * @param {HeaderContent} headerContent
 * @param {FooterContent} footerContent
 * @return {ReactElement<any, any>} Component
 */
function MyApp({
  Component,
  pageProps,
  headerContent,
  footerContent,
}: AppProps): ReactElement<any, any> {
  return (
    <Layout headerContent={headerContent} footerContent={footerContent}>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;

MyApp.getInitialProps = async (appContext: any) => {
  try {
    let headerContent: AxiosResponse<HeaderContent> | null= await getHeader();
    let footerContent: AxiosResponse<FooterContent> | null = await getFooter();
    if (!headerContent) {
      headerContent = null;
      footerContent = null;
    }
    return {headerContent, footerContent};
  } catch {
    return {};
  } finally {

  }
};

