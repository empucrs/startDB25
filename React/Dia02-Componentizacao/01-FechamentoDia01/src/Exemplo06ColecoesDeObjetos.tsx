import { people } from "./dados/People";

export function Exemplo06ColecoesDeObjetos() {

    

    return (
        <>
            <h1>Exemplo 06 - Operação de filtragem e transformação sobre um array de objetos</h1>
            {
                <ul>    
                    {people
                        .filter(person => person.idade <= 30)
                        .map(
                            (person, idx) => 
                                <li key={idx}>
                                    {person.nome}; {person.idade} anos; {person.genero} {(person.genero==="Feminino" && ('==> \u{1F33A}'))}</li>) 
                    }
                </ul>
            }
                
        </>
    );
}