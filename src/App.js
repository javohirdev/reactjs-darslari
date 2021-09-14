import React from 'react';
import { Context } from './contextTut/Context';
import Display from './Display';

const App = () => {

  const personName = "Javohir Hakimov";

  return (
    <>
      <Context.Provider value={personName}>
        <Display />
      </Context.Provider>
    </>
  );
}
export default App;