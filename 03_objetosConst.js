const vendedor ={
    nombre:'Carlos',
    apellido:'Rodriguez',
    empresa:'SauHumus SA',
    HabilidadesBlandas:['Carisma','empatia','comunicacion',
        'Participacion activa'],
    vender:function(){
        return 'carlos vendio un auto'         
    },
    obtenerNombreCompleto:function(){
        return `el nombre del vendedor que vendio el auto es 
        ${this.apellido} ${this.nombre}` 
    }
}
console.log(vendedor)
console.log(vendedor.nombre)
console.log('el tipo de dato del vendedor es ', typeof vendedor)

console.log(vendedor.vender())

vendedor.apellido = 'Suarez'
console.log(vendedor)

vendedor.edad = 56

console.log(vendedor)


// vendedor = 'Juana Dominguez' ¡Error! no se puede reasignar
// console.log(vendedor)
