//PABLO DEL CORRAL
//La verdad me ayudé de videos y haciendo consultas en Youtube para poder solucionar los ejercicios.

import React from 'react';
import { calcularAreaCuadrado } from './typescript/Ejercicio1';
import { sumarArreglo } from './typescript/Ejercicio2'; 
import useAcumulador from './typescript/Ejercicio5'; 

// Arreglo de objetos "alumno"
const alumnos = [
  {
    nombre: 'Viviana',
    edad: 19,
    calificaciones: [10],
  },
  {
    nombre: 'Wendy',
    edad: 20,
    calificaciones: [8],
  },
  {
    nombre: 'Gerson',
    edad: 18,
    calificaciones: [9],
  },
];

// Función para calcular el promedio de las calificaciones
const calcularPromedioCalificaciones = (alumnos: { nombre: string; edad: number; calificaciones: number[] }[]): number => {
  let totalCalificaciones = 0;
  let cantidadCalificaciones = 0;

  alumnos.forEach((alumno) => {
    alumno.calificaciones.forEach((calificacion) => {
      totalCalificaciones += calificacion;
      cantidadCalificaciones++;
    });
  });

  if (cantidadCalificaciones === 0) {
    return 0;
  }

  return totalCalificaciones / cantidadCalificaciones;
}

// Función para dividir cada elemento del arreglo por 5
const dividirArregloPorCinco = (arreglo: number[]): number[] => {
  return arreglo.map((numero) => numero / 5);
}

const App: React.FC = () => {
  // Ejercicio 1: Área de un cuadrado
  const ladoDelCuadrado = 5;
  const areaDelCuadrado = calcularAreaCuadrado(ladoDelCuadrado);

  // Ejercicio 2: Suma de elementos de un arreglo
  const arregloDeNumeros = [3, 5, 8, 2, 10];
  const sumaDeArreglo = sumarArreglo(arregloDeNumeros);

  // Ejercicio 3: Dividir elementos de un arreglo por 5
  const arregloDividido = dividirArregloPorCinco(arregloDeNumeros);

  // Ejercicio 4: Promedio de calificaciones de alumnos
  const promedioCalificaciones = calcularPromedioCalificaciones(alumnos);

  // Ejercicio 5: Acumulador con useState usando la función personalizada useAcumulador
  const { acumulador, incrementarAcumulador, disminuirAcumulador } = useAcumulador();

  return (
    <div>
      <h1>EJERCICIOS - TYPESCRIPT</h1>
      <hr />

      {/* Ejercicio 1: Área de un cuadrado */}
      <h2>Ejercicio 1</h2>
      <h3>Área de un cuadrado</h3>
      <p>Lado del cuadrado: {ladoDelCuadrado}</p>
      <p>Área del cuadrado: {areaDelCuadrado}</p>
      <hr />

      {/* Ejercicio 2: Suma de elementos de un arreglo */}
      <h2>Ejercicio 2</h2>
      <h3>Suma de Elementos de un Arreglo</h3>
      <p>Arreglo: {JSON.stringify(arregloDeNumeros)}</p>
      <p>Suma de Elementos: {sumaDeArreglo}</p>
      <hr />

      {/* Ejercicio 3: Dividir elementos de un arreglo por 5 */}
      <h2>Ejercicio 3</h2>
      <h3>Dividir Elementos de un Arreglo por 5</h3>
      <p>Arreglo Original: {JSON.stringify(arregloDeNumeros)}</p>
      <p>Arreglo Dividido por 5: {JSON.stringify(arregloDividido)}</p>
      <hr />

      {/* Ejercicio 4: Promedio de Calificaciones de Alumnos */}
      <h2>Ejercicio 4</h2>
      <h3>Promedio de Calificaciones de Alumnos</h3>
      <p>Lista de Alumnos:</p>
      <ul>
        {alumnos.map((alumno, index) => (
          <li key={index}>
            <p>Nombre: {alumno.nombre}</p>
            <p>Edad: {alumno.edad}</p>
            <p>Calificaciones: {alumno.calificaciones.join(', ')}</p>
          </li>
        ))}
      </ul>
      <p>Promedio de Calificaciones: {promedioCalificaciones.toFixed(2)}</p>
      <hr />

      {/* Ejercicio 5: Acumulador con useState */}
      <h2>Ejercicio 5</h2>
      <h3>Acumulador con useState</h3>
      <p>Valor del Acumulador: {acumulador}</p>
      <button onClick={incrementarAcumulador}>Incrementar en 5</button>
      <button onClick={disminuirAcumulador}>Disminuir en 5</button>
      <hr />
    </div>
  );
}

export default App;
