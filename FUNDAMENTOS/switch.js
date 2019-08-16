const imprimirResultado = function(nota){
    switch (nota){
    case 10:
    case 9:
    console.log('Conceito A')
    break
    case 8:
    case 7:
    console.log('Conceito B')
    break
    case 6:
    case 5:
    case 4:
    console.log('Conceito D')
    break
    default:
            console.log('Nota Invalida')
            break
    }
}
imprimirResultado(10)
imprimirResultado(9.5)
imprimirResultado(5)