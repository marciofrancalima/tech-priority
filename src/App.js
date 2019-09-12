import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';

import Dashboard from './pages/Dashboard';

function App() {
  useEffect(() => {
    // Init materialize js
    M.AutoInit();
  }, []);
  return <Dashboard />;
}

export default App;
