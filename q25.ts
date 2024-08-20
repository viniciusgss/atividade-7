const inverterString = (str: string): string => {
    return str.split('').reverse().join('');
};

// Exemplo de uso:
console.log(inverterString("hello")); // "olleh"
