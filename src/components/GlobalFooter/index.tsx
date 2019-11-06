import React from 'react';
// import styles from './index.less';
const styles = require('./index.less');

interface Props {
  copyright?: React.ReactNode,
  style?: React.CSSProperties
}

export default ({ copyright, style }: Props) => (
  <div className={styles.footer}>
    {copyright && <div className={styles.copyright} style={style}>{copyright}</div>}
  </div>
);
