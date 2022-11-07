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
