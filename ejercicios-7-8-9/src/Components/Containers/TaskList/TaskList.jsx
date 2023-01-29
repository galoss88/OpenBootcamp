import React from "react";

import Tasks from "../../Pure/Tasks";
import { useState } from "react";
import Task from "../../../Models/task.class";
import CreateContact from "../../Pure/forms/CreateTask";

const TaskList = (props) => {
  const [ListContacts, setListContacts] = useState([]);
  console.log(ListContacts);
  const [openCreateContact, setOpenCreateContact] = useState(false);
  function createContact(e, nombre, apellido, telefono, email, estado) {
    e.preventDefault();
    let contact = new Task(nombre, apellido, telefono, email, estado);
    alert(contact);
    ListContacts.push(contact);
    openCreateContacts();
  }
  function openCreateContacts() {
    setOpenCreateContact(!openCreateContact);
  }
  function deleteContact(contact) {
    const copyContacts = [...ListContacts];
    let index = copyContacts.indexOf(contact);

    copyContacts.splice(index, 1);
    return setListContacts(copyContacts);
  }
  function setStatus(contact) {
    const index = ListContacts.indexOf(contact);
    const newContacts = [...ListContacts];
    newContacts[index].Estado = !newContacts[index].Estado;
    setListContacts(newContacts);
  }
  return (
    <>
      {openCreateContact && (
        <CreateContact
          createContact={createContact}
          openCreateContacts={openCreateContacts}
        ></CreateContact>
      )}
      {!openCreateContact && (
        <Tasks
          ListContacts={ListContacts}
          setListContacts={setListContacts}
          openCreateContacts={openCreateContacts}
          deleteContact={deleteContact}
          setStatus={setStatus}
        ></Tasks>
      )}
    </>
  );
};

export default TaskList;
