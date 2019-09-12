import React, { useState, useEffect } from 'react';

import LogItem from './LogItem';
import Preloader from '../../components/Preloader';

export default function Log() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getLogs() {
    setLoading(true);

    const response = await fetch('/logs');
    const data = await response.json();

    setLogs(data);
    setLoading(false);
  }

  useEffect(() => {
    getLogs();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Lista de Ocorrências</h4>
      </li>

      {!loading && logs.length === 0 ? (
        <p className="center">Nenhuma ocorrência registrada</p>
      ) : (
        logs.map(log => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
}
