import React from "react";
import { useRef } from "react";
import "./styles/createTask.css";
export default function CreateContact({ openCreateContacts, createContact }) {
  const nameRef = useRef("Nico");
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  console.log(nameRef);
  return (
    <form
      onSubmit={(e) =>
        createContact(
          e,
          nameRef.current.value,
          lastNameRef.current.value,
          phoneRef.current.value,
          emailRef.current.value,
          false
        )
      }
    >
      <div>
        <h1>Creacion de contacto</h1>
        <label htmlFor={"inputName"}>Ingrese Nombre</label>
        <input type={"text"} id={"inputName"} ref={nameRef}></input>
        <label htmlFor={"inputLastName"}>Ingrese Apellido</label>
        <input type={"text"} id="inputLastName" ref={lastNameRef}></input>
        <label htmlFor={"inputPhone"}>Ingrese Telefono</label>
        <input type={"text"} id="inputPhone" ref={phoneRef}></input>
        <label htmlFor={"inputEmail"}>Ingrese Email</label>
        <input type={"text"} id="inputEmail" ref={emailRef}></input>
        <input type="button" onClick={openCreateContacts} value="Volver Atras"></input>
        <input type={"submit"}></input>
      </div>
    </form>
  );
}
