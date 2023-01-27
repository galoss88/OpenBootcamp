import React, { useState } from "react";

import { Contacto } from "../Clases/contacto.class";
import ComponenteB from "./ComponenteB";

function ComponenteA(props) {
  const [conectado, setConectado] = useState(false);
  const contacto = new Contacto(
    "Nicolas",
    "Gallo",
    "gallogarcianicolas@gmail.com",
    conectado
  );
  const cambiarEstado = () => {
    setConectado(!conectado);
  };
  return (
    <div>
      <ComponenteB
        contacto={contacto}
        cambiarEstado={cambiarEstado}
      ></ComponenteB>
    </div>
  );
}

export default ComponenteA;
