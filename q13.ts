interface Aluno {
    nome: string;
    nota: number;
}

const calcularMediaAlunos = (alunos: Aluno[]): number => {
    const somaNotas = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
    return somaNotas / alunos.length;
};
