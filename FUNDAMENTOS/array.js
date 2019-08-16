const valores = [10, 5, 9.3, 8]

console.log(valores[5])

valores[5] = 100

console.log(valores[5])
console.log(valores.length)
valores.push('teste') //push envio para a ultima posição
console.log(valores.length)

console.log(valores.pop()) //pop recuperar/exclui da ultima posição

console.log(valores[valores.length-1])


