import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';

function App() {
  log('<App /> rendered');


  return (
    <>
      <Header />
      <main>

        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
