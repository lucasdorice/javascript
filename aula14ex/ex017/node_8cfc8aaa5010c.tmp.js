/*function gerarTabuada() {
    var txtnum = window.document.getElementById("txtnum")
    var num = Number(txtnum.value)

    var res = window.document.getElementById("resultado")

    
} */

var num = 8
var c = 1

console.log(`${num} x ${c} = ${num * c}`)

while (num <= num * 10) {
    console.log(`${num} x ${c} = ${num * c}`)
    c++
}