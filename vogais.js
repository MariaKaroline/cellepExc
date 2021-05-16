/* 16. Utilizando o loop de repetição for, instrução condicional, e operadores relacionais e lógicos crie um programa que conte a quantidade de vogais em uma String */

function vogais( palavra){
    let resultado =[];
    for(let item of palavra){
        if(item === 'a'||item === 'e'||item === 'i'||item === 'o'||item === 'u'||
            item === 'A'||item === 'E'||item === 'I'||item === 'O'||item === 'U'){
                resultado.push(item)
              
            }
            
    }
    console.log(resultado.length);
}

vogais( "EOIUAEGHH")