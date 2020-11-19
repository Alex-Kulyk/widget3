import React from 'react';
import styles from './box-r.module.css';

const BoxR = ({
  abbr,
  color,
  'color-blind-label': colorBlindLabel,
  label,
  onClick,
}) => {
  return (
    <div className={styles.pink} role='region' aria-label='pink box'>
      <div
        className='box'
        style={{ display: 'flex' }}
        onClick={() => onClick(color)}
      >
        <div className={styles['pink-box']} aria-details='pink-info'>
          <dl id='pink-info'>
            <dd>square {colorBlindLabel} box with 'r' mark</dd>
          </dl>
          <div className={styles['box-r']}>
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

export default BoxR;
