import React from 'react';

import Header from './components/Header/Header';
import useQueryAplicationData from './hook/useQueryAplicationData';

import { Context } from './context/createDataContex';

function App() {
  const { data, status } = useQueryAplicationData();

  return (
    <Context.Provider value={{ data, status }}>
      <div className='container'>
        <Header />
      </div>
    </Context.Provider>
  );
}

export default App;
