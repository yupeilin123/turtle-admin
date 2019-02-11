import React, { ReactNode } from 'react';
// import styles from './index.less';
const styles = require('./index.less')

interface Props {
  copyright?: ReactNode,
  style?: object
}

export default ({ copyright, style }: Props) => (
  <div className={styles.footer}>
    {copyright && <div className={styles.copyright} style={style}>{copyright}</div>}
  </div>
);