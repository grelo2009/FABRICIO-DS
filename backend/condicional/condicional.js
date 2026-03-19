let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

if (media > 6) {
    alert("Aprovado! Média: " + media);
} else if (media >= 5 && media <= 6) {
    alert("Em recuperação. Média: " + media);
} else {
    alert("Reprovado. Média: " + media);
}
