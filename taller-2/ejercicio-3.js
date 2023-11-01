// // 3. Ingresar el nombre de un alumno y tres notas por materia (en total tres materias) y determinar qué materias aprobó y cuáles reprobó.

let alumno = {};
let materias = [];



const nombreAlumno = prompt( 'Ingresa el nombre del alumno' );
// console.log( nombreAlumno );

for ( let i = 0; i < 3; i++ ) {
    const materia = {};
    let notas =[];

    const nombreMateria = prompt( 'Ingrese nombre de la materia' );
    materia.nombre = nombreMateria;

    
    for( let j = 0; j < 3; j++ ) {
        const nota = Number( prompt( 'Ingrese nota' ) );
        notas.push( nota );
     }

    materia.notas = notas;

    materias.push = ( materia );
}

alumno.nombre = nombreAlumno;
alumno.materias = materias;

console.log ( alumno );







