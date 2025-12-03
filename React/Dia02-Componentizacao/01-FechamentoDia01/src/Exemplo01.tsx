import type { JSX } from "react";

export function Exemplo01() {

    const strings: String[] = ['Hello', 'World', 'React', 'Collection'];

    let alista: JSX.Element[] = [];

    for(let i = 0; i < strings.length; i++) {
        alista.push(<p>{strings[i]}</p>);
    }

    return ( 
        <div>
            <h1>Exemplo 01 - Lista de String</h1>
            {strings}

            <h1>Exemplo 02 - Lista de elementos JSX </h1>
            {alista}

            <h1>Exemplo 03 - Lista de strings com transformação </h1>
            <ul>
                {strings.map( (str) => <li>{str}</li> )}
            </ul>
        </div>
    );
}