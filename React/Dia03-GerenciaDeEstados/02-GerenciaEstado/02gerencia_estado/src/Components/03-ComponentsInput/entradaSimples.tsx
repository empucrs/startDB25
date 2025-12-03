import React, { useState } from 'react';
export default function EntradaSimples() {
    const [valor, setValor] = useState<string>("um valor inicial");

    function quandoMudar(evento: React.ChangeEvent<HTMLInputElement>) {
        setValor(evento.target.value);
        //console.log(evento.target.value);
    }
    return (
        <input type="text" onChange={quandoMudar} value={valor}/>        
    );
}