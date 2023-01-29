import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

function Tasks({ ListContacts, openCreateContacts, setListContacts, deleteContact, setStatus }) {
 

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Numero</th>
          <th>Telefono</th>
          <th>Estado</th>
          <th>
            <span className="create-contact" onClick={openCreateContacts}>
              Create Contact
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {ListContacts &&
          ListContacts.map((contact, index) => {
            return (
              <tr key={index}>
                <th>{contact.Nombre}</th>
                <th>{contact.Apellido}</th>
                <th>{contact.Telefono}</th>
                <th>{contact.Email}</th>
                <th>
                  {contact.Estado ? "Conectado" : "Desconectado"}
                  <button onClick={()=>setStatus(contact)}>Cambiar</button>
                
                </th>
                <th>
                  <button onClick={() => deleteContact(contact)}>
                    Eliminar
                  </button>
                </th>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

Tasks.propTypes = {
  createTask: PropTypes.func.isRequired,
};

export default Tasks;
