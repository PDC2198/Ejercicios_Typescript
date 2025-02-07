<<<<<<< HEAD
import { useState, useEffect } from 'react';

export const Ejercicio1 = () => {
    //valor quedamado para el lado del cuadrado
    const lado: number = 5;

    //Area
    const [area, setArea] = useState<number | null>(null);

    // Función para calcular el área del cuadrado
    const calcularArea = (lado: number): number => {
        return lado * lado;
    };

    useEffect(() => {
        setArea(calcularArea(lado)); // Se calcula el área usando el valor de lado
    }, [lado]);

    return (
        <div>
            <h2>Ejercicio 1 - Calcular el área de un cuadrado</h2>
            <p>Valor del lado del cuadrado es: {lado}</p>
            <div>
                <h3>Área del cuadrado: {area} unidades cuadradas</h3>
            </div>
        </div>
    );
};
=======
/* 1.	Crear una función con parámetros que permita calcular el área de un cuadrado.*/

export function calcularAreaCuadrado(lado: number): number {
    const area = lado * lado;
    return area;
}
>>>>>>> 78945b39d69dc55b7ab7f4f4c1296d95f968ebb2
