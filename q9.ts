const calcularDesconto = (valor: number, percentual: number): number => {
    return valor - (valor * (percentual / 100));
};
