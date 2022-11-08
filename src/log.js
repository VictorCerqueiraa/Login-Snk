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

var iori = document.querySelector(".iori")
var slug = document.querySelector(".slug")
var  inpEm = document.querySelector("#email")
var  inpPas = document.querySelector("#password")

inpEm.addEventListener('click', () => {
  iori.classList.toggle('selected')
 })
inpPas.addEventListener('click', () => {
  slug.classList.toggle('selected')
 })

window.alert('atenção não se trata de um projeto profissional, e sim iniciante em vista disso o botão "cadastrar" nao cadastra, e o "entrar" tambem nao leva a lugar algum, por isso teste, relembre a infancia e me de um feedback obrigado! ^o^ ')
