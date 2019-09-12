import React from 'react';

import SearchBar from '../../components/SearchBar';
import Log from '../Log';
import AddLogModal from '../Log/AddLogModal';
import EditLogModal from '../Log/EditLogModal';
import AddTechModal from '../Tech/AddTechModal';
import TechListModal from '../Tech/TechListModal';
import Button from '../../components/Button';

export default function Dashboard() {
  return (
    <>
      <SearchBar />
      <div className="container">
        <Log />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Button />
      </div>
    </>
  );
}
