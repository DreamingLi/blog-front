import React, {ReactElement} from 'react';
import Nav from './Nav';
import Footer from './Footer';
/**
 *
 * @param {any} children
 * @return { ReactElement<any, any>} Component
 */
function Layout({children}:any): ReactElement<any, any> {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export {Layout};
