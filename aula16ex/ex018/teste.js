//somar todos os numeros de um array

valores = [1, 2, 3, 4, 5]

num = 5

if (valores.indexOf(num) == -1){
    valores.push(num)
    console.log(`valor add`)
    console.log(valores)
} else {
    console.log(`valor ja inserido`)
}