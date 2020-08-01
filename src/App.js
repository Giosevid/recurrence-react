import React, {useState, useEffect} from 'react';
import axios from 'axios';
import HeaderSearch from './components/HeaderSearch';

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
      <h1>Arbol de directorios</h1>
      <HeaderSearch setUrl={setUrl}/>
    </>
  );
}

export default App;
