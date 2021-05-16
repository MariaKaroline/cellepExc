/* 14. Utilizando funções e estrutura condicional, crie um programa que calcule o IMC de uma pessoa, imprimir o valor do IMC e sua classificação */

function calcularImc(peso, altura){
    let calculo = peso/(altura*altura)
    console.log(calculo)
    if(calculo<18.5){
        return "Abaixo do peso"
    }else if(calculo>18.5 && calculo < 25){
        return "Peso normal"
    }else if(calculo >=25 && calculo<30){
        return "Sobrepeso"
    }else{
        return "Obeso"
    }
}
console.log(calcularImc(60, 1.7))