function contar() {
    var txtini = window.document.getElementById('txtinicio')
    var ini = Number(txtini.value)

    var txtfim = window.document.getElementById('txtfim')
    var fim = Number(txtfim.value)

    var txtpasso = window.document.getElementById('txtpasso')
    var passo = Number(txtpasso.value)

    var res = window.document.getElementById("resultado")
    res.innerHTML = 'Contando:<br>'

    if (txtini.value.length == 0 || txtfim.value.length == 0) {
        res.innerHTML = "Impossível contar!"
    } else if (txtpasso.value.length == 0){
        window.alert('Passo inválido! Considerando PASSO 1')
        var passo = 1

        if (ini <= fim) {
            while (ini <= fim){
                res.innerHTML += `&#x1F449 ${ini} `
                ini += passo
    
                res.innerHTML += `&#x1F449 &#x1F3C1`
            }
        } else if (ini >= fim) {
            while (ini >= fim){
                res.innerHTML += `&#x1F449 ${ini} `
                ini -= passo
    
                res.innerHTML += `&#x1F449 &#x1F3C1`
            }
        }   
    } else if (ini <= fim) {
        while (ini <= fim){
            res.innerHTML += `&#x1F449 ${ini} `
            ini += passo

            res.innerHTML += `&#x1F449 &#x1F3C1`
        }
    } else if (ini >= fim) {
        while (ini >= fim){
            res.innerHTML += `&#x1F449 ${ini} `
            ini -= passo

            res.innerHTML += `&#x1F449 &#x1F3C1`
        }
    }
    
    


}

/*
    var ini = 5
    var fim = 12
    var passo = 2

    while (ini < fim){
        console.log(`Passo ${ini}`)
        ini += passo
    }
*/