import React, { useState, useContext, useRef } from 'react';

import ByFontsTabContent from '../ByFonts/ByFonts';
import MyFontsTabContent from '../MyFonts/MyFonts';

import styles from './fonts-tab.module.css';
import { Context } from '../../context/createDataContex';

const Tabs = () => {
  const { data, status } = useContext(Context);
  const [active, setActive] = useState(null);
  const activeLiElement = useRef(0);

  const openTab = (e) => {
    setActive(+e.target.dataset.index);
    activeLiElement.current = +e.target.dataset.index + 1;
  };

  return (
    <>
      {status === 'loading' && <h1 className={styles.loading}>Loading...</h1>}
      <div className={styles.tab}>
        <h2 className={styles['font-header']}>Please select one font</h2>
        <div style={{ display: 'flex' }}>
          {status === 'success' &&
            data[0].data.map((n, i) => (
              <nav key={i}>
                <ul className={styles['ul-style']}>
                  <li
                    className={`${i === active ? styles.active : ''}`}
                    onClick={openTab}
                    data-index={i}
                    ref={activeLiElement}
                  >
                    {n.label}
                  </li>
                </ul>
              </nav>
            ))}
        </div>
      </div>
      {status === 'success' &&
      activeLiElement.current === 0 ? null : activeLiElement.current === 1 ? (
        <MyFontsTabContent />
      ) : (
        <ByFontsTabContent />
      )}
    </>
  );
};

export default Tabs;
