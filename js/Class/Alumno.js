export class Alumno{
    constructor(dni,nombre,apellido){
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

export function imprimirDatosAlumno($referencia,alumno){
    $referencia.innerText = "Ivan Nahuel Ghigliotti";
    console.log(`Dni: ${alumno.dni}\nNombre: ${alumno.nombre}\nApellido: ${alumno.apellido}`);
}

