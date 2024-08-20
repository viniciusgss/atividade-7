interface Pessoa {
    nome: string;
    idade: number;
}

const encontrarPessoaMaisVelha = (pessoas: Pessoa[]): string => {
    let pessoaMaisVelha = pessoas[0];

    for (const pessoa of pessoas) {
        if (pessoa.idade > pessoaMaisVelha.idade) {
            pessoaMaisVelha = pessoa;
        }
    }

    return pessoaMaisVelha.nome;
};

// Exemplo de uso:
const pessoasExemplo: Pessoa[] = [
    { nome: "João", idade: 45 },
    { nome: "Maria", idade: 55 },
    { nome: "Carlos", idade: 40 }
];
console.log(encontrarPessoaMaisVelha(pessoasExemplo)); // "Maria"
