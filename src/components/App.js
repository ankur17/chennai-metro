import React from 'react';
import LeftPanel from './leftPanel'
import RightPanel from './RightPanel';

import './../styles/App.css';

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <RightPanel/>
    </div>
  );
}

export default App;
