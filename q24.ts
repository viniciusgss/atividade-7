interface Carro {
    marca: string;
    modelo: string;
    ano: number;
}

const filtrarCarrosPorAno = (carros: Carro[], anoMinimo: number): Carro[] => {
    return carros.filter(carro => carro.ano > anoMinimo);
};

// Exemplo de uso:
const carrosExemplo: Carro[] = [
    { marca: "Ford", modelo: "Fiesta", ano: 2010 },
    { marca: "Chevrolet", modelo: "Cruze", ano: 2015 },
    { marca: "Toyota", modelo: "Corolla", ano: 2008 }
];
console.log(filtrarCarrosPorAno(carrosExemplo, 2010)); 
// [{ marca: "Chevrolet", modelo: "Cruze", ano: 2015 }]
