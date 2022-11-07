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

var check = document.querySelector("#read");
var span = document.querySelector("#read-text");

check.addEventListener('click', () => {
  check.classList.toggle('checked') 
  span.classList.toggle('checked') 
})

var moon = document.querySelector(".moon")
var sun = document.querySelector(".sun")
var content_center = document.querySelector(".content-center")
var body = document.querySelector("body")
 
moon.addEventListener('click', () => {
     moon.classList.toggle('active')
     sun.classList.toggle('active')
     content_center.classList.toggle('active')
     body.classList.toggle('active')
})
  sun.addEventListener('click', () => {
    moon.classList.remove('active')
    sun.classList.remove('active')
    content_center.classList.remove('active')
    body.classList.remove('active')
 })

 //validação

 var email = document.querySelector('input[name = email]')
 var confEmail = document.querySelector('input[name = conf-email]')
 var pass = document.querySelector('input[name = pass]')
 var confPass = document.querySelector('input[name = conf-pass]')
 var box = document.querySelector('input[name=box]')



function confirmaEmail(){
    if (email.value === confEmail.value) {
        confEmail.setCustomValidity('')
    }
    else{
        confEmail.setCustomValidity('Seu email não confere!')    
    }
}
function confirmaSenha(){
    if (pass.value === confPass.value) {
        confPass.setCustomValidity('')
    }
    else{
        confPass.setCustomValidity('Sua senha não confere!')    
    }
}
