const calcularPrecoProduto = (custo: number, margem: number, frete: number): number => {
    const valorMargem = custo * (margem / 100);
    return custo + valorMargem + frete;
};
