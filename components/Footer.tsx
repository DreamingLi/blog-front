import React, {ReactElement} from 'react';
import {FooterContent} from '../interface';
import styles from '../styles/Footer.module.css';
import moment from 'moment';

interface FooterProps{
  footerContent: FooterContent
}

/**
 * @param {FooterContent} footerContent
 * @return { ReactElement<any, any>} Component
 */
export default function Footer({footerContent}:FooterProps): ReactElement<any, any> {
  const {
    copyright,
    theme,
    author,
    themeLink,
    authLink,
    builtTime,
  } = footerContent;

  if (copyright === undefined) {
    return <div>FOR RENDERING FOOTER, PLEASE CONNECT TO THE BACK SERVER</div>;
  }
  const timeCaculator = () => {
    const time = moment().diff(moment(builtTime), 'days');
    // const time = moment().diff(moment(builtTime), 'seconds');
    // const minutes = time / 60;
    // const minute = time % 60;
    // const hours = minutes / 60;
    // const hour = hours % 24;
    // const days = hours / 24;
    // return `${days.toFixed()}days ${hour.toFixed()}:${minute.toFixed()}`;
    return `${time}DAYS`;
  };

  return (
    <footer className={styles.footer}>
      <div>{copyright} | THE SITE IS BUILT WITH <a href={authLink}>{author}</a></div>
      <div>POWERED BY <a href="https://github.com/DreamingLi/blog-front">最终blog的名字</a> | THEME <a href={themeLink}>{theme}</a></div>
      <div>THIS SITE HAS BEEN RUNNING: {timeCaculator()}</div>
    </footer>
  );
}
