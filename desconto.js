/* 9. Crie um programa que calcule o desconto na venda de um produto
 */

function pagamento(desconto, preco ){

    let calculoDesconto = (preco*desconto)/100
    return `O valor de produto é R$${preco-calculoDesconto}`
}

console.log(pagamento(70,200))