// 2. Ingresar tres calificaciones, calcular el promedio y determinar si el alumno aprobó la materia (3.5 es la nota mínima para pasar).

let primeraNota = Number(prompt( 'ingrese primera nota' ))
let segundaNota = Number(prompt( 'ingrese segunda nota' ))
let terceraNota = Number(prompt( 'ingrese tercera nota' ))

let promedio = (primeraNota + segundaNota + terceraNota) / 3

let aprobo = (promedio >= 3.5 ? 'pasa la materia': 'perdio la materia' )

console.log( "El estudiante " + name + " tiene un promedio " + " " + promedio + " " + " en la materia" )