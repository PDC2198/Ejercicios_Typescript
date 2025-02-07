<<<<<<< HEAD
export const Ejercicio3 = () => {
    // Arreglo 
    const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    // Función para dividir cada elemento por 5 usando map
    const dividirPor5 = (arr: number[]): number[] => {
        return arr.map(num => num / 5); //division para 5
    };

    //Nuevo arreglo
    const nuevoArreglo = dividirPor5(arreglo);

    return (
        <div>
            <h2>Ejercicio 3 - Dividir los valores de un arreglo por 5</h2>
            <p>Arreglo original: {arreglo.join(', ')}</p>
            <div>
                <h3>Nuevo arreglo (dividido por 5): {nuevoArreglo.join(', ')}</h3>
            </div>
        </div>
    );
};
=======
/**3.	Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5.
const arreglo = [5,10,15,20,25,30,35,40,45,50]
Recomendación emplear función map.
 */

export const dividirArregloPorCinco = (arreglo: number[]): number[] => {
    return arreglo.map((numero) => numero / 5);
}
>>>>>>> 78945b39d69dc55b7ab7f4f4c1296d95f968ebb2
