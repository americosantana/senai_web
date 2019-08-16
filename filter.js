const produto = [
    {nome: 'Notebook', preco: '3000', fragil: true},
    {nome: 'Ipad Pro', preco: '5000', fragil: true},
    {nome: 'Copo de vidro', preco: '5', fragil: true},
    {nome: 'Copo de ferro', preco: '12', fragil: false}
]
console.log(produto.filter(function(p){
    return false
}))

const fraco = produto => produto.fragil
const caro = produto => produto.preco <= 5

console.log(preduto.filter(caro))