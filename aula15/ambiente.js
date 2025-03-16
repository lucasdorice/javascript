let num = [5, 8, 2, 9, 3]

num.push(1)

num.sort()

//console.log(`Nosso vetor é o ${num}`)

console.log(num)

console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log(`O comprimento do nosso vetor é ${num.length}`)

let pos = num.indexOf(4)

if (pos == -1) {
    console.log(`O Valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}