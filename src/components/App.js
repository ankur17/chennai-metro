import React,{ useState } from 'react';
import LeftPanel from './leftPanel'
import RightPanel from './RightPanel';
import Heading from './Heading'
import './../styles/App.css';


function App() {
    const [searchNode, setSearchNode] = useState(0);
    const setSearchResult = (loc)=>{setSearchNode(loc)}
  return (
    <div className="App">
      <div className="HeadingDiv">
        <Heading/>
      </div>
      <div>
        <LeftPanel setSearchResult={setSearchResult} />
        <RightPanel/>
      </div>
    </div>
  );
}

export default App;
