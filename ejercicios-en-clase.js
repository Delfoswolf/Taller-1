// 3. Ingresar el nombre de un alumno 
// y tres notas por materia (en total tres materias) 
// y determinar qué materias aprobó 
// y cuáles reprobó.


const notasDeSultanito = {};


class Alumno {
    constructor( nombres ) {
        this.nombres = nombres;
    }
}

class Materia {
    constructor(nombre, objNotas) {
        this.nombre;
        this.objNotas;
    }
}
class Nota {
    notas = [];

    agregar( nota ) {
        this.notas.push( nota );
    }

    agregarVarias( listaNotas) {
        this.notas = listaNotas
    }
}
   
    





