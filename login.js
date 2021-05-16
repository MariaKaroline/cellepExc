/* 13. Utilizando instrução condicional e operadores lógicos, crie um programa que simule um sistema de login
 */

function autenticar(user, password){
    let usuario = "userKarol"
    let senha = 123456789

    if(user===usuario && senha== password){
        return "Acesso liberado"
    }else{
        return "ACESSO NEGADO"
    }
}

console.log(autenticar("userKaroli", 123456789))