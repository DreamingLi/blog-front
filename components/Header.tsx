import React, {ReactElement} from 'react';
import styles from '../styles/Header.module.css';
import type {HeaderContent, HeaderContentItem} from '../interface';
import Link from 'next/link';
import {Menu, Dropdown} from 'antd';
import {HeaderContentDropDownItem} from '../interface/headerTypes';

interface HeaderProps{
  headerContent: HeaderContent
}

/**
 * @param {headerContent} headerProps
 * @return { ReactElement<any, any>} Component
 */
export default function Header({headerContent}: HeaderProps): ReactElement<any, any> {
  if (headerContent === undefined) {
    return (<div>FOR RENDERING HEADER, PLEASE CONNECT TO THE BACK SERVER</div>);
  }

  const {
    leftName,
    nav,
    rightSearch,
  } = headerContent;

  const renderDropDownItem = (list: HeaderContentDropDownItem[], path: string) => {
    return list.map(
        (item: HeaderContentDropDownItem) => (
          <Menu.Item key={item.id}>
            <Link href={`${path}/${item.path}`}>{item.name}</Link>
          </Menu.Item>
        ),
    );
  };

  const renderDropDown = (list: HeaderContentDropDownItem[], path: string) => (
    <Menu>
      {renderDropDownItem(list, path)}
    </Menu>
  );

  const renderNavContentItem = (id: number, name: string, path: string, list: HeaderContentDropDownItem[]) => {
    return (<div className={styles.header__middle__item} key={id}>
      <Link href={path} >
        <Dropdown overlay={renderDropDown(list, path)} placement="bottomCenter" arrow>
          <a>{name} </a>
        </Dropdown>
      </Link>
    </div>);
  };

  const renderNavContent = () => {
    return nav.map(
        (item: HeaderContentItem) => renderNavContentItem(item.id, item.name, item.path, item.list),
    );
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        {leftName}
      </div>
      <div className={styles.header__middle}>
        {renderNavContent()}
      </div>
      <div className={styles.header__right}>
        {rightSearch}
      </div>
    </header>
  );
}


