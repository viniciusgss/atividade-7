const advinheNumero = (): void => {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let acertou = false;

    while (!acertou) {
        const tentativa = Number(prompt('Adivinhe o número (entre 1 e 100):'));
        tentativas++;

        if (tentativa === numeroAleatorio) {
            console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
            acertou = true;
        } else if (tentativa < numeroAleatorio) {
            console.log('O número correto é maior.');
        } else {
            console.log('O número correto é menor.');
        }
    }
};
