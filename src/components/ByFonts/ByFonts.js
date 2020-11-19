import React, { useContext } from 'react';
import { Context } from '../../context/createDataContex';
import styles from './by-fonts.module.css';

const ByFonts = () => {
  const { data, status } = useContext(Context);

  return (
    <div className={styles.tabcontent} role='region'>
      {status === 'success' && data[2].data.content}
    </div>
  );
};

export default ByFonts;
