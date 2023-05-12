var idade = 65
console.log(`Você tem ${idade} anos e `)
if (idade < 16) {
    console.log('você ainda não pode votar')
} else {
    if (idade < 18 || idade >= 65) {
        console.log('o seu voto é opcional')
    } else {
        console.log('o seu voto é obrigatório')
    }
}
