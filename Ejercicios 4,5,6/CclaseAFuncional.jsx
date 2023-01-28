import React from "react";
import "../../styles/clock.scss";

const Clock = (props) => {
  let timerID;
  React.useEffect(() => {
    timerID = setInterval(() => tick(), 1000);
  }, []);
  React.useEffect(() => {
    clearInterval(timerID);
  }, []);
  const estadoInicial = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };
  const [state, setState] = React.useState(estadoInicial);
  function tick() {
    setState((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  }
  return (
    <div>
      <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {state.nombre} {state.apellidos}
      </h3>
      <h1>Edad: {state.edad}</h1>
    </div>
  );
};

export default Clock;
