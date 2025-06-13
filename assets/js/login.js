const formLogin = document.querySelector(".login__form");

let tentativas = 0

formLogin.addEventListener("submit", (event) => {

    event.preventDefault();

    const emailLogin = document.getElementById("login-email").value
    
    const passwordLogin = document.getElementById("login-pass").value

    const emailCadastro = localStorage.getItem("email_cadastro")
    const passwordCadastro = localStorage.getItem("password_cadastro")
    
    if ((emailCadastro === emailLogin) && (passwordCadastro === passwordLogin)) {
        alert("Login realizado com sucesso!");
        
    } else {

        if (emailCadastro !== emailLogin) {
            alert("Email incorreto!!");
        } 
    
        if (passwordCadastro !== passwordLogin) {
            alert("Senha incorreta");
        }

        tentativas++

        alert(`tentativa ${tentativas}/3`)

        if (tentativas === 3) {
            alert('Senha bloqueada por excesso de tentativas')
            window.location.href = "pages/recupera.html"
        }
    };

   
});