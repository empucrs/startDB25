import type React from "react";

export interface estruturaDeComunicacao{
    //funcao: () => void;
    funcao: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}

export default function Button({funcao, children }: estruturaDeComunicacao){
    return (
        <button onClick={funcao}>
            {children}
        </button>
    );
}