let texto = false

console.log(texto)

console.log('Elementos VERDADEIROS: ')

console.log(!!'a')
console.log(!!' ')
console.log(!!3)
console.log(!![])
console.log(!!{})

console.log("elementos FALSOS: ")
console.log(!!0)
console.log(!!"")
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)

//diferença entre NULL e UNDEFINED

let teste = ''
console.log(teste)

console.log("testando ou")
console.log(!!('' && null && 0 &&' '))
console.log(!!('' || null || 0 ||' '))
