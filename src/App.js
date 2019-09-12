import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';

function App() {
  useEffect(() => {
    // Init materialize js
    M.AutoInit();
  }, []);
  return <h1>Hello World</h1>;
}

export default App;
