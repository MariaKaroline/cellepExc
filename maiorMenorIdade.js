/* 11. Utilizando instrução condicional, crie um programa que determine se uma pessoa é maior ou menor de idade
 */


function maiorIdade( idade){
    if( idade>=18){
        return "Maior de idade";
    }else{
        return "Menor de idade";
    }
}

console.log(maiorIdade(17))