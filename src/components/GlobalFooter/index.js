import React from 'react';
import { CopyrightOutlined } from '@ant-design/icons';
import styles from './index.less';

export default ({ copyright, style }) => (
  <div className={styles.footer}>
    <div className={styles.copyright} style={style}>
      {copyright || (
        <>
          Copyright
          {' '}
          <CopyrightOutlined />
          {' '}
          2019 yupeilin
        </>
      )}
    </div>
  </div>
);