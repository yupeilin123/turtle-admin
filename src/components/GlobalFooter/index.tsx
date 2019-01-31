import React, { ReactNode } from 'react';
import styles from './index.less';

interface GlobalFooterProps {
  copyright: ReactNode,
  style: object
}

export default ({ copyright, style }: GlobalFooterProps) => (
  <div className={styles.footer}>
    {copyright && <div className={styles.copyright} style={style}>{copyright}</div>}
  </div>
);