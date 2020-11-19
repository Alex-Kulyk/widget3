import React from 'react';

const renderCurrentTab = (param) => {
  return (
    <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center' }}>
      <h4>You pick</h4>
      <div
        style={{
          width: '50px',
          height: '50px',
          background: `${param}`,
          margin: '0 20px',
        }}
      ></div>
      <h4>font</h4>
    </div>
  );
};
export default renderCurrentTab;
