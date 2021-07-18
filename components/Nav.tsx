import React, {ReactElement, useState} from 'react';
import {Button} from 'antd';
import {getNav} from '../lib/api';
/**
 *
 * @return { ReactElement<any, any>} Component
 */
export default function Nav(): ReactElement<any, any> {
  const [navTitle, setNavTitle] = useState('');
  const handleClick = () => {
    getNav().then(
        (resp:any) => {
          setNavTitle(resp.blogName);
        },
    );
  };
  return (
    <div>
      <Button onClick={handleClick}>GET NAV info</Button>
      {navTitle}
    </div>
  );
}
