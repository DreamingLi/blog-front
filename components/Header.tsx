import React, {ReactElement} from 'react';
import styles from '../styles/Header.module.css';
import type {HeaderContent, HeaderContentItem} from '../interface';
import Link from 'next/link';

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

  const {id, ...navContent} = nav;


  // eslint-disable-next-line react/display-name
  const renderNavContentItem = <U extends keyof T, T extends object>(key: U) => (navContent: T) => (
    <div className={styles.header__middle__item} key={key as string}>
      <Link href={key==='home'? '/':`/${key}`} ><a>{navContent[key]}</a></Link>
    </div>
  );

  const renderNavContent = () => {
    return Object.keys(navContent).map(
        (key: any) => {
          return renderNavContentItem<keyof HeaderContentItem, HeaderContentItem>(key)(navContent as HeaderContentItem);
        },
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


