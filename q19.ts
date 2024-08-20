const encontrarPalavraMaisLonga = (frase: string): string => {
    const palavras = frase.split(' ');
    let palavraMaisLonga = '';

    palavras.forEach(palavra => {
        if (palavra.length > palavraMaisLonga.length) {
            palavraMaisLonga = palavra;
        }
    });

    return palavraMaisLonga;
};
