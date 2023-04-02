// Script utilizado na telainicial para redirecionar o usuario para a telahome caso o usuario preencha devidamente os campos email e senha.

function redirecionar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    // Expressão regular para validar o formato do email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Expressão regular para aceitar qualquer senha com pelo menos 1 caractere
    var senhaRegex = /.+/;

    if (emailRegex.test(email) && senhaRegex.test(senha)) {
        window.location.href = "telahome.html";
    } else {
        alert("Por favor, preencha corretamente os campos de email e senha.");
    }
}