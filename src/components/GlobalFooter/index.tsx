import React from 'react';
import { CopyrightOutlined } from '@ant-design/icons';
// import styles from './index.less';
const styles = require('./index.less');

interface Props {
  copyright?: React.ReactNode;
  style?: React.CSSProperties;
}

export default ({ copyright, style }: Props) => (
  <div className={styles.footer}>
    <div className={styles.copyright} style={style}>
      {copyright || (
        <>
          Copyright
          {' '}
          <CopyrightOutlined />
          {' '}
          2020 yupeilin
        </>
      )}
    </div>
  </div>
);
