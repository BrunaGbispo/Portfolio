function validar() {
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let mensagem = document.getElementById("mensagem");

    if (nome.value == ""){
        alert("Nome não informado");
        nome.focus();
    }
    if (email.value == "") {
        alert("E-mail não informado");
        email.focus();
    }
    if (mensagem.value == "") {
        alert("Nenhuma mensagem foi escrita");
        mensagem.focus();
    }
}

