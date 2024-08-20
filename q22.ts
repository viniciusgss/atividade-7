interface Livro {
    titulo: string;
    autor: string;
    ano: number;
}

const filtrarLivrosPorAutor = (livros: Livro[], autor: string): Livro[] => {
    return livros.filter(livro => livro.autor === autor);
};

// Exemplo de uso:
const livrosExemplo: Livro[] = [
    { titulo: "Livro A", autor: "Autor 1", ano: 2001 },
    { titulo: "Livro B", autor: "Autor 2", ano: 2005 },
    { titulo: "Livro C", autor: "Autor 1", ano: 2010 }
];
console.log(filtrarLivrosPorAutor(livrosExemplo, "Autor 1")); 
// [{ titulo: "Livro A", autor: "Autor 1", ano: 2001 }, { titulo: "Livro C", autor: "Autor 1", ano: 2010 }]
