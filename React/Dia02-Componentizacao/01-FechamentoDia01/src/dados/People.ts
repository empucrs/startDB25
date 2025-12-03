export type Person = {
    nome: string;
    idade: number;
    genero: string;
};

export const people: Person[] = [
    { nome: 'Alice', idade: 30, genero: 'Feminino' },
    { nome: 'Bob', idade: 25, genero: 'Masculino' },
    { nome: 'Charlie', idade: 35, genero: 'Masculino' },
    { nome: 'Diana', idade: 28, genero: 'Feminino' },
];