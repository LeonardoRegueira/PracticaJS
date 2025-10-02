let letras ={
    letra_a: "a",
    letra_b: "b",
    letra_c: "c",
    saludo2: function(){
        return "Hola de nuevo"
    }
}
console.log(typeof letras)
console.log(letras)

let stringi_letras=JSON.stringify(letras)

console.log(typeof stringi_letras)
console.log(letras)

console.log("los JSON siempre son STRING")

let saludo="Hola!"
console.log(saludo)

console.log("los String siempre va entre 'a' ")

let numerosE ={
    numero1: 1,
    "numero dos": 2
}

console.log(typeof numerosE)
console.log(numerosE)

console.log(numerosE.numero1)
console.log(numerosE["numero dos"])

let stringi_numerosE =JSON.stringify(numerosE)
console.log(stringi_numerosE)