document.getElementById("btn__registrarse").addEventListener("click",register);
    document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
    
    //variables
    
    var box_login_register = document.querySelector(".box__login-register");
    var formulario_login = document.querySelector(".formulario__login");
    var formulario_register = document.querySelector(".formulario__register");
    var box_back_login = document.querySelector(".box__back-login");
    var box_back_register = document.querySelector(".box__back-register");
    
    
    function register() {
    
        formulario_register.style.display = "block";
        box_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        box_back_register.style.opacity = "0";
        box_back_login.style.opacity = "1";
    
    }
    
    function iniciarSesion() {
    
        formulario_register.style.display = "none";
        box_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        box_back_register.style.opacity = "1";
        box_back_login.style.opacity = "0";
    
    }








    document.querySelector(".formulario__login button").addEventListener("click", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        window.location.href = "pages/inicio.html"; // Aquí pones la URL a la que quieres redirigir
    });
    