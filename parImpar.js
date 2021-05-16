/* 12. Utilizando instrução condicional e operadores relacionais, crie um programa que identifique se um determinado número inteiro é par ou ímpar */

function parOuImpar(numero){
    if(numero%2 ===0 ){
        return `Numero ${numero} é par`;
    }else{
        return `Numero ${numero} é impar`;
    }
}

console.log(parOuImpar(18))