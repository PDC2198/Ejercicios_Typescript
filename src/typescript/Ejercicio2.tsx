<<<<<<< HEAD
export const Ejercicio2 = () => {
  // Arreglo 
  const numeros: number[] = [1, 2, 3, 4, 5];

  // Función para calcular la suma de los elementos del arreglo
  const calcularSuma = (arr: number[]): number => {
    return arr.reduce((acc, num) => acc + num, 0); //reduce = sumar los elementos
  };

  // Calculamos la suma del arreglo
  const suma = calcularSuma(numeros);

  return (
    <div>
      <h2>Ejercicio 2 - Sumar los elementos de un arreglo</h2>
      <p>Arreglo de números: {numeros.join(', ')}</p>
      <div>
        <h3>Suma de los elementos del arreglo: {suma}</h3>
      </div>
    </div>
  );
};
=======
/*2.	Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los elementos del arreglo. */


export function sumarArreglo(arreglo: number[]): number {

    let suma = 0
    ;
    for (let num of arreglo) {
        suma += num;
    }
    return suma;
}
>>>>>>> 78945b39d69dc55b7ab7f4f4c1296d95f968ebb2
