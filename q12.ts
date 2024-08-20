interface Contagem {
    pares: number;
    impares: number;
}

const contarDigitosParesImpares = (numero: number): Contagem => {
    let pares = 0;
    let impares = 0;
    const digitos = numero.toString().split('');

    digitos.forEach(digito => {
        const num = parseInt(digito);
        if (num % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    });

    return { pares, impares };
};
