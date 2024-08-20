const imprimirEmQuadro = (strings: string[]): void => {
    const largura = Math.max(...strings.map(str => str.length));
    const borda = '*'.repeat(largura + 4);

    console.log(borda);
    strings.forEach(str => {
        console.log(`* ${str.padEnd(largura)} *`);
    });
    console.log(borda);
};

// Exemplo de uso:
imprimirEmQuadro(["Hello", "World", "in", "a", "frame"]);
