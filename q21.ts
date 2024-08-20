const filtrarStringsLongas = (strings: string[]): string[] => {
    return strings.filter(str => str.length > 5);
};

// Exemplo de uso:
const stringsExemplo = ["apple", "banana", "cherry", "date"];
console.log(filtrarStringsLongas(stringsExemplo)); // ["banana", "cherry"]
