/* 5. Crie um programa que utilize os operadores aritméticos e imprima o antecessor e o sucessor de um número */

function imprimeAntecessorSucessor (numero){
    let antecessor= numero-1;
    let sucessor = numero+1;

    return `O antecessor do ${numero} é ${antecessor} e o sucessor é ${sucessor}`
}

console.log(imprimeAntecessorSucessor(10))