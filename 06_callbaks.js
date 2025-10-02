function saludar(param1){
    console.log(`Hola ${param1}`)
}
let nombre = "Pedro"

saludar(nombre)

console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░")
console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░")
console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░")

function procesarSaludo(param2,callback){
    console.log(`la funcion procesarSaludo 
        recibira como argumento a ${param2} y a la funcion 
        saludar como callback, pues bien, saludemos a ${param2} 
        utilizando el callback: `)
        
        callback(param2)
}

procesarSaludo(nombre,saludar)

console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░")
console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░")
console.log("░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░")

let numero1 = 2

function potenciar (num1){
    numero1 =num1 ** 2
    return numero1
}

function operar (num2, num3, callback){
    let numero2 =num3 **3

    setTimeout(callback, 3000,num2)

    console.log(`Numero 1 vale: ${numero1} y no se ejecuto el callback,
        entonces el resultado es ${numero1+numero2}`)
    
    setTimeout(() => {
        console.log(`Numero 1 vale ${numero1} y se va a ejecutar el 
            callback entonces el resultado es ${numero1+numero2} `)
    },5000)
}

operar(5,3,potenciar)