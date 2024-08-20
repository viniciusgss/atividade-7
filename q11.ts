const calcularMediaArredondada = (numeros: number[]): number => {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const media = soma / numeros.length;
    return Math.round(media);
};
