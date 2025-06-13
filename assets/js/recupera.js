const formRecupera = document.getElementById("recover-form");
const emailField = document.getElementById("email-field");
const emailInput = document.getElementById("recover-email");
const sendCodeButton = document.getElementById("send-code-button");
const codeEntrySection = document.getElementById("code-entry-section");
const verificationCodeInput = document.getElementById("verification-code");
const newPasswordInput = document.getElementById("login-pass");
const confirmNewPasswordInput = document.getElementById("login-pass-confirm");
const verifyCodeButton = document.getElementById("verify-code-button");

let generateCode = '';

// Funlao para gerar um codigo aleatorio de 6 digitos numeicos
function generateRandomCode() {
    return Math.floor(Math.random() * 1000000).toString();
}

// ouvintes de eventos para o botao sendCodeButton
sendCodeButton.addEventListener("click", (event) => {
    event.preventDefault();

    const emailRecover = emailInput.value;

    if (!emailRecover) {
        alert("Por favor digite um email para continuar.");
        return;
    };

    const emailCadastrado = localStorage.getItem("email_cadastro");
    
    if (emailCadastrado === emailRecover.toLowerCase()) {
        generateCode = generateRandomCode();
        alert(`Foi enviado o Código ${generateCode} para o email ${emailRecover}`)


          localStorage.setItem("codigoGerado", generateCode)

        emailField.style.display = "none"
        sendCodeButton.style.display = "none"
        codeEntrySection.style.display = "block"

    } else {
        alert(`Foi enviado um código para o email ${emailRecover}`)
        formRecupera.reset();
    };

});

// Ouvinte de evento para o botao redefinir senha

verifyCodeButton.addEventListener("click", (event) => {

    event.preventDefault();

    const enteredCode = verificationCodeInput.value;
    const newPassword = newPasswordInput.value;
    const confirmNewPassword = confirmNewPasswordInput.value;

    const codigoGeradoLs = localStorage.getItem("codigoGerado");

    if (!enteredCode || !newPassword  || !confirmNewPassword) {
        alert('Por favor, preencha todos os campos: Codigo de verificação. Nova senha e confirmar nova senha')
         return;
    }

    // Validar noca senha e confirmar se senhas sao iguais
    if (newPassword !== confirmNewPassword) {
        alert("As senhas não se coincidem. Tente novamente");

        newPasswordInput.value = "";
        confirmNewPasswordInput.value = "";
        return;
    }

    // verificar se o codigo é igual
    if (enteredCode === codigoGeradoLs) {
        localStorage.setItem("password_cadastro", newPassword);
        localStorage.removeItem("codigoGerado");
        
        alert("Senha redefinida com sucesso. Você ja pode fazer o login com sua nova senha!");
        
        window.location.href = "../index.html";

    } else {
        alert("Código de verificação inválaido. Tente novamente");

    };
   

    
});