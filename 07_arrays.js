//ARRAYS

// Existe mas de una forma de declarar arrays, entre ellas:

const lenguajes = ['HMTL', 'CSS', ' JS'];

const lenguajes2 = new Array(5)
lenguajes2[0] = 'HTML'
lenguajes2[1] = 'CSS'
lenguajes2[4] = 'JS'
// No necesariamente deben estar todos los lugares 'ocupados'

console.log(lenguajes)
console.log(lenguajes2)

separar()

const arrayNumeros = [5, 6, 7, 2, 4, 5, 8, 9, 1, 3]

// Para saber cuantos elementos tiene un array:
console.log(`El array arrayNumeros tiene ${arrayNumeros.length} elementos`)

// Si quisiera saber cual es el valor que tiene el ultimo elemento:
console.log(`El indice del ultimo elemento de arrayNumeros es ${arrayNumeros[arrayNumeros.length - 1]}`)// ¿Y por que? bueno, el indice arranca en 0... ¿no?

separar()

// Curiosidad:

let una_letra = 'a'
let misma_letra = 'a'

console.log("Pregunta: ¿'una_letra' y 'misma_letra', son iguales? ", una_letra == misma_letra)

// Ahora...

const frutas1 = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja', 'Banana', 'Pera']
const frutas2 = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Manzana', 'Naranja', 'Banana', 'Pera']

console.log(`frutas1 y frutas2... ¿serán iguales? `, frutas1 == frutas2)

// Los leo en telegram.......

// Ambos están declarados como constantes... podré agregarle algun valor a cualquiera de los dos?

/* 
frutas1[frutas1.length] = 'Tomate'
console.log(`El array frutas ahora es [${frutas1}]`)
 */

// Y si quisiera que frutas ahora sea el string frutas1 = "manzanas, peras"?

/* 
frutas1 = 'manzanas, peras'
console.log(`Ahora frutas1 es ${frutas1}`)
 */

// Los leo en telegram.......

separar()

// Vamos con algunos metodos porpios de los arrays

// FILTER
// Devuelve un array basado en algun criterio que defina

console.log('FILTER:')

let filter = frutas1.filter(param => param === 'Manzana')

console.log("'Filtramos' frutas, el criterio es 'Manzana', entonces filter es:")
console.log(filter) // Devuelve un array filtrado
console.log("filter es de tipo ", typeof filter) // Es un array?
console.log("Es un array? ", Array.isArray(filter)) // Si, es un array
console.log('¿El array original se modifica?')
console.log('El array frutas1 es')
console.log(frutas1)
console.log("Entonces no, 'FILTER' no modifica el array original")

console.log('----------')

// Vean este array

const temas = [
    { tema: 'HTML', materia: 'Frontend' },
    { tema: 'CSS', materia: 'Frontend' },
    { tema: 'JS', materia: 'Frontend' },
    { tema: 'JS', materia: 'Backend' },
    { tema: 'NodeJS', materia: 'Backend' },
    { tema: 'MongoDB', materia: 'Backend' }
]

console.log('Vamos con el array temas')
console.log(temas)

let temas_backend = temas.filter(param => param.materia === 'Backend')

console.log('')
console.log('Puedo filtrar por el valor de la clave')
console.log(temas_backend)

let temas_js = temas.filter(param => param.tema === 'JS')

console.log('')
console.log('Tambien puedo filtrar por clave')
console.log(temas_js)


separar()

// MAP
// Devuelve un nuevo array transformando cada elemento del array original como nosotros le indiquemos

console.log('MAP:')

const manzanas = ['Manzana', 'Manzana', 'Manzana', 'Manzana', 'Manzana', 'Manzana']

const naranjas = manzanas.map(param => {
    if (param === 'Manzana') {
        return 'Naranja'
    }
})

console.log(manzanas)
console.log(naranjas)

separar()

// FILL
// Llena o reemplaza los elementos por que le indiquemos, utiliza el indice. MODIFICA EL ARRAY ORIGINAL

console.log('FILL')

const mas_manzanas = ['Manzana', 'Manzana', 'Manzana', 'Manzana', 'Manzana', 'Manzana']

console.log(mas_manzanas)

mas_manzanas.fill('Naranja', 2, 5)

console.log(mas_manzanas)

// Apliqué fill y le indiqué que reemplace por 'Naranja' lo que haya entre entre los indices 2 y 5. ¡¡¡Atenti acá!!! El índice 2 está incluido en el reemplazo, el 5 no. Vuelvan a leer la terminal...

separar()

//FIND
// Busca y devuelve el primer elemento que encuentra dentro del array

console.log('FIND')
console.log('Antes que nada recordemos a frutas1:')
console.log(frutas1)

const resultado_find = frutas1.find(param => param === 'Naranja')

console.log("El resutlado de find aplicado a 'frutas1' es: ", resultado_find)
console.log("El tipo de dato de 'resultado_find' es: ", typeof resultado_find)

separar()

// FINDINDEX
// Devuelve el indice del primer elemento que coincide con el criterio de busqueda

console.log('FINDINDEX:')

const resultado_findindex = frutas1.findIndex(param => param === 'Banana')

console.log("La primer 'Banana' de 'frutas1' se encuentra en el indice n°", resultado_findindex)
console.log("El tipo de dato de 'resultado_findindex' es: ", typeof resultado_findindex)

separar()

// SOME
// Verifica si al menos uno de los elementos coincide con el criterio, devuelve true o false

console.log('SOME:')

let resultado_some_Pera = frutas1.some(param => param === 'Pera')
let resultado_some_Ciruela = frutas1.some(param => param === 'Ciruela')

console.log("Hay alguna Pera en 'frutas1'? ", resultado_some_Pera)
console.log("Hay alguna Ciruela en 'frutas1'? ", resultado_some_Ciruela)

let resultado_some_pera = frutas1.some(param => param === 'pera')

console.log("Y hay alguna pera en 'frutas1'? ", resultado_some_pera)
console.log('Atenti con las mayusculas y minusculas')

separar()

// POP
// Elimina el ultimo elemento del array y devuelve ese elemento eliminado

console.log('POP:')
console.log("'frutas1' antes del POP:")
console.log(frutas1)

const resultado_pop = frutas1.pop()

console.log("'frutas1' despues del POP:")
console.log(frutas1)
console.log('El elemento eliminado es: ', resultado_pop)

separar()

// SHIFT
// Elimina el primer elemento del array y devuelve ese elemento eliminado

console.log('SHIF:')
console.log("'frutas1' antes del SHIFT:")
console.log(frutas1)

const resultado_shift = frutas1.shift()

console.log("'frutas1' despues del SHIFT:")
console.log(frutas1)
console.log('El elemento eliminado es: ', resultado_shift)

separar()

// PUSH
// Agrega un elemento al final y devuelve la nueva longitud del array

console.log('PUSH:')
console.log("'frutas1' antes del PUSH:")
console.log(frutas1)
console.log("La longitud de 'frutas1' es: ", frutas1.length)

const resultado_push = frutas1.push('Sandia')

console.log("'frutas1' despues del PUSH:")
console.log(frutas1)
console.log("La nueva longitud de 'frutas1' es: ", resultado_push)
console.log("El tipo de dato de 'resultado_push' es:", typeof resultado_push)

separar()

// UNSHIFT
// Agrega uno o mas elementos al principio y devuelve la nueva longitud del array

console.log('UNSHIFT:')
console.log("Este es 'frutas1':")
console.log(frutas1)

const resultado_unshift_ciruela = frutas1.unshift('Ciruela')

console.log("Este es 'frutas1' despues del UNSHIFT")
console.log(frutas1)
console.log("La nueva longitud de 'frutas1' es: ", resultado_unshift_ciruela)
console.log("El tipo de dato de 'resultado_unshift_ciruela' es:", typeof resultado_unshift_ciruela)

// Vamos a hacer un UNSHIFT de dos elementos

let resultado_unshift_durazno_y_naranja = frutas1.unshift('Durazno', 'Naranja')

console.log("Este es 'frutas1' despues del nuevo UNSHIFT")
console.log(frutas1)
console.log("La nueva longitud de 'frutas1' es: ", resultado_unshift_durazno_y_naranja)

separar()

// SPLICE
// Agrega, elimina o reemplaza elementos... miren:

console.log('SPLICE:')

let numeros = [1, 2, 3, 4, 5]

console.log('Armo un nuevo array de numeros:')
console.log(numeros)

// Arranquemos........

numeros.splice(2, 1) // Acá le estoy indicando que elimine 1 elemento desde el indice 2

console.log("Hago un splice(2, 1)")
console.log(numeros)

console.log("Ahora hago un splice(2, 0, 'melon', 'Sandia')")

numeros.splice(2, 0, 'Melon', 'Sandia') // De esta forma le estoy diciendo que primero elimine 0 elementos desde el indice 2, y luego que desde ese indice 2, agreue 2 elementos. En definitiva, AGREGA 2 elementos desde el indice 2
console.log(numeros)

// Ah si, en JavaScript podemos tener arrays con diferentes tipos de elementos... ¿No les dije?

console.log("Y ahora hago un splice(2, 2, 99, 100)")

numeros.splice(2, 2, 99, 100) //Aca le estoy diciendo que primero elimine 2 elementos desde el indice 2, y luego agregue dos elementos (99 y 100) desde el indice 2. En definitiva, REEMPLAZA 2 elementos desde el indice 2
console.log(numeros)

separar()

// SLICE
// Crea una copia del array segun los criterios que le indiquemos

console.log('SLICE:')
console.log('Tenemos nuestro array de numeros:')
console.log(numeros)

// Ahora le digo que haga una copia de este array con los elementos desde el indice 2 hasta el 5

let resutado_slice = numeros.slice(2, 5)

console.log("Esta es la copia de mi array de numeros")
console.log(resutado_slice)
console.log("Y 'resultado_slice' es un nuevo array?", Array.isArray(resutado_slice))

// Como ven desde indice 2 hasta indice 5, incluye el elemento del indice 2 pero no el del indice 5. Ojo con esas cosas!

separar()

// FOREACH
// recorre arrays y ejecuta una funcion específica en cada elemento. Se utiliza para realizar operaciones sobre los elementos sin modificar el array original

// NO devuelve un nuevo array

console.log('FOREACH:')
console.log('Volvamos a nuestro array de frutas:')
console.log(frutas1)

console.log("Usando FOREACH, a cada elemento del array lo imprimimos con la palabra 'FOREACH:' antes:")
frutas1.forEach(fruta => console.log('FOREACH: ', fruta))

// FOREACH tiene algo de magia tambien.. vean:

frutas1.forEach((fruta, indice, array) => {
    console.log(`La fruta ${fruta} se ubica en el indice ${indice} del array [${array}]`)
}) // Entocnes al FOREACH le puedo pasar hasta 3 argumentos, el primero va a ser el valor del elemento, el segundo el indice y el tercero el array completo.

separar()

// SORT
// Ordena de menor a mayor

console.log('SORT:')
console.log("Reasignemos valores al array 'numeros'")

numeros = [3, 9, 8, 5, 6, 4, 7, 2, 1]

console.log(numeros)

console.log('Ordenemoslo entonces con sort()')
console.log(numeros.sort()) // Ordena de menor a mayor

console.log("Genial! Y si mi array de nueros ahora es asi?")

numeros = [3, 9, 8, 5, 6, 4, 7, 2, 1, 12, 25, 10, 30]

console.log('Ordenemoslo entonces con sort()')
console.log(numeros.sort()) // Parece que algo no anda bien aca..

// ¿Por qué numeros.sort() no ordena de menor a mayor? Cuando usamos numeros.sort() sin pasarle una funcion de comparacion, JavaScript convierte los elementos a strings y los ordena alfabeticamente. Es decir, compara "10" con "2". Por eso el resultado parece erroneo desde el punto de vista numerico: "10" aparece antes que "2" porque "1" viene antes que "2" en orden lexicografico. Este comportamiento es util para ordenar palabras, pero no para numeros. Pero no todo esta perdido...

console.log(numeros.sort((a, b) => a - b))

/* 
Esta es una funcion de comparacion numerica que le indica al metodo sort() como comparar dos elementos:
- Si a - b es negativo, significa que a debe ir antes que b.
- Si a - b es positivo, significa que a debe ir despues que b.
- Si a - b es cero, significa que son iguales en orden.
Por ejemplo, si compara 5 y 2, el resultado es 5 - 2 = 3, que es positivo, entonces 2 va antes que 5. Asi, el array se ordena correctamente de menor a mayor. Si usamos (b, a) => a - b, invertimoss el orden para que sea de mayor a menor.
*/

console.log(numeros.sort((b, a) => a - b))


separar()


























function separar() {
    console.log('')
    console.log('************************************************************')
    console.log('')
}