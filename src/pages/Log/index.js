import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import M from 'materialize-css/dist/js/materialize.min';

import LogItem from './LogItem';
import Preloader from '../../components/Preloader';

import {
  getLogsRequest,
  deleteLogRequest,
  setCurrentRequest,
} from '../../store/modules/log/actions';

export default function Log() {
  const loading = useSelector(state => state.log.loading);
  const logs = useSelector(state => state.log.logs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogsRequest());
  }, [dispatch]);

  function handleUpdate(id) {
    dispatch(setCurrentRequest(id));
  }

  function handleDelete(id) {
    dispatch(deleteLogRequest(id));

    M.toast({ html: 'Ocorrência excluída' });
  }

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
        logs.map(log => (
          <LogItem
            key={log.id}
            log={log}
            onDelete={() => handleDelete(log.id)}
            onUpdate={() => handleUpdate(log.id)}
          />
        ))
      )}
    </ul>
  );
}
