import React, {ReactElement} from 'react';
import Nav from './Header';
import Footer from './Footer';
import {HeaderContent} from '../interface';


interface LayoutProps{
  children: any,
  headerContent: HeaderContent
}
/**
 * @param {any} children
 * @param {HeaderContent} headerContent
 * @return { ReactElement<any, any>} Component
 */
function Layout({children, headerContent}: LayoutProps): ReactElement<any, any> {
  return (
    <div>
      <Nav headerContent={headerContent}/>
      {children}
      <Footer />
    </div>
  );
}

export {Layout};
