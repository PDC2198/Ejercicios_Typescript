/*2.	Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los elementos del arreglo. */


export function sumarArreglo(arreglo: number[]): number {

    let suma = 0
    ;
    for (let num of arreglo) {
        suma += num;
    }
    return suma;
}
