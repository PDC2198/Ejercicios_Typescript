
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
