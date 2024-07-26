/**5.	Empleado el hook useState crear un acumulador de 5. Se debe visualizar el valor del acumular y dos botones (incrementar - disminuir) */
import React, { useState } from 'react';

const useAcumulador = () => {
    const [acumulador, setAcumulador] = useState(5);

    const incrementarAcumulador = () => {
        setAcumulador(acumulador + 5);
    }

    const disminuirAcumulador = () => {
        setAcumulador(acumulador - 5);
    }

    return {
        acumulador,
        incrementarAcumulador,
        disminuirAcumulador,
    };
}

export default useAcumulador;
