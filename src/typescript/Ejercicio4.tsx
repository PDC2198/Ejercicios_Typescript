<<<<<<< HEAD

export const Ejercicio4 = () => {
    // Arreglo con los objetos de los alumnos
    const alumnos = [
        {
            name: 'Viviana',
            edad: 19,
            calificacion: 10,
        },
        {
            name: 'Wendy',
            edad: 20,
            calificacion: 8,
        },
        {
            name: 'Gerson',
            edad: 18,
            calificacion: 9,
        }
    ];

    // Función para calcular el promedio de las calificaciones
    const calcularPromedio = (arr: { name: string, edad: number, calificacion: number }[]): number => {
        const sumaCalificaciones = arr.reduce((acc, alumno) => acc + alumno.calificacion, 0); // Sumar todas las calificaciones
        return sumaCalificaciones / arr.length; // Dividir la suma por el número de alumnos
    };

    // Calcular el promedio de las calificaciones
    const promedio = calcularPromedio(alumnos);

    return (
        <div>
            <h2>Ejercicio 4 - Calcular el promedio de las calificaciones</h2>
            <ul>
                {alumnos.map((alumno, index) => (
                    <li key={index}>
                        {alumno.name} - Edad: {alumno.edad} - Calificación: {alumno.calificacion}
                    </li>
                ))}
            </ul>
            <div>
                <h3>Promedio de las calificaciones: {promedio}</h3>
            </div>
        </div>
    );
};
=======
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
>>>>>>> 78945b39d69dc55b7ab7f4f4c1296d95f968ebb2
