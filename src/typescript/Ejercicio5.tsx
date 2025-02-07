<<<<<<< HEAD
import { useState } from 'react';

export const Ejercicio5 = () => {
    // Estado para el acumulador, comenzando en 5
    const [acumulador, setAcumulador] = useState<number>(5);

    // Función para incrementar el acumulador
    const incrementar = () => {
        setAcumulador(acumulador + 5);
    };

    // Función para disminuir el acumulador
    const disminuir = () => {
        setAcumulador(acumulador - 5);
    };

    return (
        <div>
            <h2>Ejercicio 5 - Acumulador</h2>
            <p>Valor: {acumulador}</p>
            <div>
                <button onClick={incrementar}>Incrementar</button>
                <button onClick={disminuir}>Disminuir</button>
            </div>
        </div>
    );
};
=======
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
>>>>>>> 78945b39d69dc55b7ab7f4f4c1296d95f968ebb2
