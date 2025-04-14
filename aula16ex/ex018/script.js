//Número (entre 1 e 100):

let array = []

function adicionar(){
    let txtnum = window.document.getElementById('numeros')
    let num = Number(txtnum.value)

    let sel = window.document.getElementById('seltab')
    let item = document.createElement('option')

    if (num < 1 || num > 100) {
        window.alert(`Valor inválido ou já inserido na lista.`)
    } else {
        array.push(num)

        item.text += `O valor ${num} foi adicionado`
        sel.appendChild(item)
    }
}

function finalizar(){
    let res = window.document.getElementById('resultado')

    let soma = 0

    array.sort((a,b)=>a-b)

    res.innerHTML = `Ao todo, temos ${array.length} números cadastrados.`

    res.innerHTML += `<br>O maior valor informado foi ${array[array.length - 1]}.`

    res.innerHTML += `<br>O menor valor informado foi ${array[0]}.`

    for(let c in array){
        soma += array[c]
    }

    res.innerHTML += `<br>Somando todos os valores, temos ${soma}.`

    let media = soma / array.length

    res.innerHTML += `<br>A média dos valores digitados é ${media}.`

    
}


/*



*/
