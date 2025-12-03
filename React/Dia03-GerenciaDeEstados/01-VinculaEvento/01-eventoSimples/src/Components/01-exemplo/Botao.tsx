import React from 'react';

export default function Botao(){

    function handleClick() {
        alert('Botão clicado!');
        console.log('Botão foi clicado e evento tratado!');
    }

    return ( 
        <button onClick={handleClick}>
            Clique aqui!!!
        </button>
    );
}