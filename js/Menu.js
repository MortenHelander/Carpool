const menu = document.querySelector(".burger-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const offScreenLogin = document.querySelector(".off-screen-login");
const login = document.querySelector(".login");

menu.addEventListener("click", () =>{
    menu.classList.toggle("active");
    offScreenMenu.classList.toggle("off-screen-menu-active");
})

login.addEventListener("click", () =>{
    login.classList.toggle("active");
    offScreenLogin.classList.toggle("off-screen-login-active");
})