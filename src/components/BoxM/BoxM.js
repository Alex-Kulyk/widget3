import React from 'react';
import styles from './box-m.module.css';

const BoxM = ({
  abbr,
  color,
  'color-blind-label': colorBlindLabel,
  label,
  onClick,
}) => {
  return (
    <div className={styles.green} role='region' aria-label='green box'>
      <div className='box' onClick={() => onClick(color)}>
        <div className={styles.border} aria-details='green-info'>
          <dl id='green-info'>
            <dd>square {colorBlindLabel} box with 'M' mark</dd>
          </dl>
          <div className={styles['box-m']}>
            <p className={styles['p-color']}>{abbr}</p>
          </div>
        </div>
        <ul className={styles['ul-style']}>
          <li>{label}</li>
        </ul>
      </div>
    </div>
  );
};

export default BoxM;
