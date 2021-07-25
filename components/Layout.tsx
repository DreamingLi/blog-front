import React, {ReactElement} from 'react';
import Header from './Header';
import Footer from './Footer';
import {HeaderContent} from '../interface';
import type {FooterContent} from '../interface';

interface LayoutProps{
  children: any,
  headerContent: HeaderContent,
  footerContent: FooterContent,

}
/**
 * @param {any} children
 * @param {HeaderContent} headerContent
 * @param {FooterContent} footerContent
 * @return { ReactElement<any, any>} Component
 */
function Layout({children, headerContent, footerContent}: LayoutProps): ReactElement<any, any> {
  return (
    <div>
      <Header headerContent={headerContent}/>
      {children}
      <Footer footerContent={footerContent}/>
    </div>
  );
}

export {Layout};
