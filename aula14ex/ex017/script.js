function gerarTabuada() {
    var txtnum = window.document.getElementById("txtnum")
    var num = Number(txtnum.value)

    var res = window.document.getElementById("resultado")

    if (txtnum.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
        res.innerHTML = ``

        for (var c = 1; c <= 10; c++){
        res.innerHTML += `${num} x ${c} = ${num * c}<br>`
        }
    }
    
}
