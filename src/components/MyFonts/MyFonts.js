import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/createDataContex';
import BoxM from '../BoxM/BoxM';
import BoxR from '../BoxR/BoxR';
import BoxNS from '../BoxNS/BoxNS';
import renderCurrentTab from '../../utils/renderCurrentTab';

const MyFontsTabContent = () => {
  const { data } = useContext(Context);

  const [selectedBox, setSelectedBox] = useState(() => {
    const localData = localStorage.getItem('tab');
    return localData ? JSON.parse(localData) : '';
  });

  const boxContent = data[1].data.content;

  useEffect(() => {
    localStorage.setItem('tab', JSON.stringify(selectedBox));
  }, [selectedBox, boxContent]);

  useEffect(() => {
    const onKeypress = (e) => {
      switch (e.charCode) {
        case 109:
          return localStorage.setItem(
            'tab',
            JSON.stringify(setSelectedBox(boxContent[0].color))
          );
        case 114:
          return localStorage.setItem(
            'tab',
            JSON.stringify(setSelectedBox(boxContent[1].color))
          );
        case 110:
          return localStorage.setItem(
            'tab',
            JSON.stringify(setSelectedBox(boxContent[2].color))
          );
        default:
          return '';
      }
    };

    document.addEventListener('keypress', onKeypress);

    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, [selectedBox, boxContent]);

  return (
    <>
      <div
        className='grid-content'
        style={{
          border: '2px solid #c5cedd',
          borderRadius: '10px',
          marginTop: '1rem',
          minHeight: '35vh',
          display: 'grid',
        }}
      >
        {boxContent.map((el, i) => {
          return (
            <React.Fragment key={el.id}>
              {i === 0 && <BoxM {...el} onClick={setSelectedBox} />}
              {i === 1 && <BoxR {...el} onClick={setSelectedBox} />}
              {i === 2 && <BoxNS {...el} onClick={setSelectedBox} />}
            </React.Fragment>
          );
        })}
      </div>
      {localStorage.length > 0 && renderCurrentTab(selectedBox)}
    </>
  );
};

export default MyFontsTabContent;
