/**3.	Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5.
const arreglo = [5,10,15,20,25,30,35,40,45,50]
Recomendación emplear función map.
 */

export const dividirArregloPorCinco = (arreglo: number[]): number[] => {
    return arreglo.map((numero) => numero / 5);
}
