function carregar() {
    var mensagem = window.document.getElementById("msg")
    var imagem = window.document.getElementById("img")

    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        imagem.src = "manha.png"
        document.body.style.background = "#ee8f63"
    } else if (hora >= 12 && hora <= 18) {
        imagem.src = "tarde.png"
        document.body.style.background = "#d23e00"
    } else {
        imagem.src = "noite.png"
        document.body.style.background = "#382e47"
    }
}