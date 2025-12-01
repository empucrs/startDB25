import React, {useState } from 'react';

export interface CounterProps {
  valorInicial: number;
  cor: string;
}

export default function Counter({valorInicial, cor}: CounterProps) {

    const [valor, setValor] = React.useState<number>(valorInicial);

    function incrementar() {
        setValor(valor + 1);
    }
    function decrementar() {
        setValor(valor - 1);
    }
    return (
        <>
            <h2 style={{color: cor}}>Counter: {valor}</h2>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
        </>
    );

}
