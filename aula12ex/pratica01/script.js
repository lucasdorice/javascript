function carregar() {
    var agora = new Date()
    var hora = agora.getHours()

    var horario = window.document.getElementById("horario")
    horario.innerHTML = `Agora são ${hora} horas.`
    horario.style.textAlign = "center"

    var imagem = window.document.getElementById('img')
    if (hora < 12) {
        imagem.src = "manha.png"
        document.body.style.backgroundColor = "orange"
    } else if (hora < 18) {
        imagem.src = "tarde.png"
        document.body.style.backgroundColor = "darkred"
    } else {
        imagem.src = "noite.png"
        document.body.style.backgroundColor = "darkblue"
    }

}