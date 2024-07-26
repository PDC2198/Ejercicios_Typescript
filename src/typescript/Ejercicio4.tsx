/**4.	Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y calificaciones. Luego, escribir una función que calcule el promedio de las calificaciones.  */
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
