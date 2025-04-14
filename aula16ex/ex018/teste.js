//somar todos os numeros de um array

a = [1, 2, 3, 4, 5]

soma = 0

media = 0

for(let c = 0;c < a.length;c++){
    soma += a[c]
}

media = soma / a.length

console.log(media)