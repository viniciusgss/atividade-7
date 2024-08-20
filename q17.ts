const verificarPropriedade = (objeto: object, propriedade: string): boolean => {
    return propriedade in objeto;
};
