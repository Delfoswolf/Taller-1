const edad = parseInt(prompt("Ingrese su edad: "));


if (!isNaN(edad)) {
   
    for (let i = 1; i <= 3; i++) {
        
        if (edad >= 18) {
            console.log("Iteracion " + i + ": Eres mayor de edad.");
        } else {
            console.log("Iteracion " + i + ": Eres menor de edad. Le falta, le falta.");
        }
    }
} else {
   
    console.log("Por favor, ingrese una edad valida.");
}