const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modal = $('.modal')
const btnClose = $('.icon--close')
const btnLogin = $('#login')
const login = $('.text--register')
const register = $('.text--login')
const formLogin = $('.form--login')
const formRegister = $('form--register')

btnLogin.onclick = function () {
    modal.classList.add('active--modal')
}

btnClose.onclick = function () {
    modal.classList.remove('active--modal')
}
