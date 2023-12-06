import React, { useState, useEffect } from 'react';
import { Aviso } from './Aviso';

export const Componente = (props) => {
  var [numeroState, setNumeroState] = useState(0);
  var [contadorState, setContadorState] = useState(-1);

  useEffect(() => {
    setContadorState(contadorState + 1);
  }, [numeroState]);

  const aumentarHandler = (e) => {
    setNumeroState(numeroState + 1)
  }

  const decrementarHandler = (e) => {
    setNumeroState(numeroState - 1);
  }

  return (
    <>
      <strong className={numeroState < 0 ? ("rojo") : numeroState == 0 ? ("amarillo") : numeroState > 0 ? ("verde") : ("")}>Valor actual: {numeroState}</strong>
      <br/>
      <strong>Cantidad de cambios: {contadorState}</strong>
      <p>
        <button onClick={(e) => aumentarHandler(e)}>Aumentar</button>
      </p>
      <p>
        <button onClick={(e) => decrementarHandler(e)}>Decrementar</button>
      </p>
      <p>
        {contadorState >= 5 && contadorState < 10 && (<Aviso></Aviso>)} {/*Montando componente en base a condición.*/}
      </p>
    </>
  );
}