import React, { useState, useEffect } from 'react';

import TechItem from '../TechItem';

export default function TechListModal() {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getTechs() {
    setLoading(true);

    const response = await fetch('/techs');
    const data = await response.json();

    setTechs(data);
    setLoading(false);
  }

  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Técnicos cadastrados</h4>
        <ul className="collection">
          {!loading &&
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
}
