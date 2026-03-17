function CalcularMedia(nota1, nota2, nota3, nota4) {
    let media = (nota1 + nota2 +nota3 + nota4) / 4;
    return media.toFixed(2);
}

console.log("Média do aluno:", CalcularMedia( 6, 7, 10, 5))