const calcularIdade = (nascimento: number): number => {
    const anoAtual = new Date().getFullYear();
    return anoAtual - nascimento;
};
