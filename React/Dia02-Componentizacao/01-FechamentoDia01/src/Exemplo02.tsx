export function Exemplo02() {

    const numeros: number[] = [1, 2, 3, 4, 5];

    numeros.forEach( (cadaNumeroDaLista) => {
        console.log(cadaNumeroDaLista);
    });

    const acum: number = numeros.reduce( (acumulador, valorAtual) => acumulador + valorAtual, 0);

    return ( 
        <div>
            <h1>Exemplos de função em React</h1>
            <p> Números originais: {numeros.join(', ')} </p>
            <p> Soma dos números: {acum} </p>
            <p> O maior número é: {Math.max(...numeros)} </p>
            <p> O menor número é: {numeros.reduce((min, valorAtual) => ((min<valorAtual) ? min : valorAtual))} </p>
            <p> O valor médio é: {acum / numeros.length} </p>
        </div>
    );
}