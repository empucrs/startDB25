export function Exemplo04ColecoesSimples() {

    const frutas: String[] = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Manga'];
    const mostraAsFrutas: boolean = true;

    return (
        <>
            <h1>Exemplo 04 - Coleções Simples</h1>
            {
                mostraAsFrutas && 
                    <ol>
                        {frutas.map( 
                                (fruta, idx) => 
                                    <li key={idx}>{fruta}</li>
                            )
                        }
                    </ol>
            }
                
        </>
    );
}