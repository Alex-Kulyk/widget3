import React from 'react';
import styles from './box-ns.module.css';

const BoxNS = ({
  abbr,
  color,
  'color-blind-label': colorBlindLabel,
  label,
  onClick,
}) => {
  return (
    <div className={styles.blue} role='region' aria-label='blue box'>
      <div
        className='box'
        style={{ display: 'flex' }}
        onClick={() => onClick(color)}
      >
        <div className={styles['blue-box']} aria-details='blue-info'>
          <dl id='blue-info'>
            <dd>square {colorBlindLabel} box with 'ns' mark</dd>
          </dl>
          <div className={styles['box-ns']}>
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

export default BoxNS;
