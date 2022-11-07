/*document.querySelector('#btn-submit').addEventListener('click', e => {
    console.log("ciclou");
});
document.querySelector('#btn-submit').addEventListener('mouseenter', e => {
    console.log("passou");
});
document.querySelector('#btn-submit').addEventListener('mouseleave', e => {
    console.log("saiu");
});*/

document.querySelector('#form-login').addEventListener('submit', e =>
{
    e.preventDefault();

    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    console.log(`seu email é: ${email} sua senha é:  ${password}`);

    let json = {
        email,
        password
    };
    console.log(json);
    //transformando em script 
    let jsonString = JSON.stringify(json);
    console.log(jsonString);

    //validando os campos 

    if (!json.email){
        console.error("Escreva um email");
    }
    else if (!json.password) {
        console.error("digite uma Senha")
    }
    else {
        console.info("Validado com sucesso!");
    }
});

