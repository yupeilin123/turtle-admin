import React from 'react';
import styles from './index.less';

export default ({ copyright, style }) => (
  <div className={styles.footer}>
    {copyright && <div className={styles.copyright} style={style}>{copyright}</div>}
  </div>
);