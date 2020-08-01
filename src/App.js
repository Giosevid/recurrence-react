import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HeaderSearch from './components/HeaderSearch';
import ListTree from './components/ListTree';

function App() {
  const [url, setUrl] = useState('');
  const [dataTree, setdataTree] = useState('');

  useEffect(() => {
    if(url) {
      axios.get(url).then(({ data }) => setdataTree(data))
    }
  }, [url])

  return (
    <>
      <HeaderSearch setUrl={setUrl}/>
      <ListTree list={dataTree}/>
    </>
  );
}

export default App;
