import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LogItem from './LogItem';
import Preloader from '../../components/Preloader';

import { getLogsRequest } from '../../store/modules/log/actions';

export default function Log() {
  const loading = useSelector(state => state.log.loading);
  const logs = useSelector(state => state.log.logs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogsRequest());
    // eslint-disable-next-line
  }, [dispatch]);

  if (loading || logs === null) {
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
