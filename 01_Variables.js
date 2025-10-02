console.log("*************************************************************************")
console.log("*************************************************************************")
console.log("**************************** NUEVA EJECUCION ****************************")
console.log("*************************************************************************")
console.log("*************************************************************************")

var MiVar

MiVar = "Texto de MiVar"
console.log(MiVar)

console.log("¡El valor de MiVar cambio! ")

MiVar = 86
console.log("El NUEVO valor de MiVar es: ",MiVar)

//var MiVar =19 No afecta la redeclaración 

let MiLet1

let MiLet = "Este es el texto asignado a una variable MiLet1"

console.log(MiLet)

MiLet = 99

console.log("el valor de MiLet es: ",MiLet)

//let MiLet =19 ¡Error! no se puede redeclarar

const MiConst = 'Texto asignado a la variable Const'
console.log(MiConst)

//const MiConst = 18 ¡Error! no se puede redeclarar

//MiConst = 6 ¡Error! no se puede reasignar
function imprimirvar() {
    console.log("Imprimendo MiVar dentro de una función, el valor de MiVar es", MiVar)

    var MiVar2 = "Texto de MiVar2"

    console.log("Imprimendo MiVar2 dentro de una función, el valor de MiVar2 es", MiVar2)
}

imprimirvar()

//console.log("Imprimendo MiVar FUERA la función, el valor de MiVar2 es", MiVar2) ¡Error! variable fuera de alcance


function imprimirlet() {
    console.log("Imprimendo MiLet dentro de una función, el valor de MiLet es", MiLet)

    let MiLet2 = "Hola Mundo desde imprimirlet"

    console.log("Imprimendo MiLet2 dentro de una función, el valor de MiLet2 es", MiLet2)

}

imprimirlet()

console.log("Imprimendo MiLet dentro de una función, el valor de MiLet es", MiLet)

/*console.log("Imprimendo MiLet2 dentro de una función, el valor de MiLet2 es", MiLet2) 
    Error! variable fuera de alcance.
    MiLet2 se encuentra dentro del bloque de la funcion */

