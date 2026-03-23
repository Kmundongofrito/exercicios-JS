function calcularFatorial(numero) {
    if (numero < 0) return "Não existe fatorial de número negativo";
    if (numero === 0 || numero === 1) return 1;

    let resultado = 1;
    for (let i = numero; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

const num = 5;
console.log(`O fatorial de ${num} é ${calcularFatorial(num)}`)