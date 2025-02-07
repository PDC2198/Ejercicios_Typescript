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
