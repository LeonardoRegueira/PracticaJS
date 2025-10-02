let numero = 18

function sumar(num){ //num es un parametro
    return num+2
}

sumar(numero)

let resultado =sumar(numero)

console.log(`sumo desde sumar,el resultado es: ${resultado}`)

console.log(`sumo desde sumar,el resultado es: ${sumar(numero)}`)

let sumarConArrow = (num)=>{
    return num+2
}
console.log(`sumo desde sumarConArrow, el resultado es: ${sumarConArrow(numero)}`)

let sumarConArrowPower = num => num + 2
console.log(`sumo desde sumarConArrowPower, el resultado es: ${sumarConArrowPower(numero)}`)
