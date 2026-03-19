
let soma = 0
let contador = 0
while(contador < 5){
    let numero = Number(prompt("informe o numero"))
    soma = soma + numero
    contador = contador + 1
}
alert(soma)
document.writeln(`A soma dos 5 numeros é ${soma}`)