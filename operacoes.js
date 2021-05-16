/* 10. Crie funções para as 4 operações aritméticas básicas
 */

function somar( numeroA, numeroB){

    return `A soma dos numeros ${numeroA} e ${numeroB} é ${numeroA+numeroB}`;
}

function subtrair( numeroA, numeroB){

    return `A subtração dos numeros ${numeroA} e ${numeroB} é ${numeroA-numeroB}`;
}

function multiplicar( numeroA, numeroB){

    return `A multiplicação dos numeros ${numeroA} e ${numeroB} é ${numeroA*numeroB}`;
}

function dividir( numeroA, numeroB){

    return `A divisão dos ${numeroA} e ${numeroB} numeros é ${numeroA/numeroB}`;
}


console.log(somar(20, 10));
console.log(subtrair(20, 10));
console.log(multiplicar(20, 10));
console.log(dividir(20, 10));