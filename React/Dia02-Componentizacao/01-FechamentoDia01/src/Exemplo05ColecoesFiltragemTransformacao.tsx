export function Exemplo05ColecoesFiltragemTransformacao() {

    const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];    

    return (
        <>
            <h1>Exemplo 05 - Operação de filtragem e transformação</h1>
            {
                <ol>    
                    {numeros
                        .filter(numero => numero % 2 !== 0)
                        .map((numero, idx) => <li key={idx}>{numero}</li>)
                    }
                </ol>
            }
                
        </>
    );
}