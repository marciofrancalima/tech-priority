import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min';

export default function AddTechModal() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleClearInputs() {
    setFirstName('');
    setLastName('');
  }

  function handleSubmit() {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Preencha os dados corretamente' });
    } else {
      console.log(firstName, lastName);

      handleClearInputs();
    }
  }

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Novo Técnico</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              Nome
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Sobrenome
            </label>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={handleSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Salvar
        </a>
      </div>
    </div>
  );
}
