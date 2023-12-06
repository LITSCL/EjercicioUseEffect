import React, { useEffect } from 'react';

export const Aviso = (props) => {
  
  useEffect(() => {
    alert("El componente 'Aviso' está montado");
    
    return () => {
      alert("Componentes desmontado"); //Se ejecuta cuando se desmonta el componente.
    }
  }, []); //Se ejecuta cuando se monta el componente.

  return (
    <>
      <strong>Has llegado a los 5 cambios, este mensaje se borra al llegar a los 10 cambios</strong>
    </>
  );
}