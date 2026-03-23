const produtos = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 250 }
];

const maisCaro = produtos.reduce((anterior, atual) => {
    return (anterior.preco > atual.preco) ? anterior : atual;
});

console.log(`O produto mais caro é: ${maisCaro.nome}`);