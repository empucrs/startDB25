import react, { useState } from "react";

export default function SelectSimples() {   

    const [opcao, setOpcao] = useState<string>("");

    function mudancaDeOpcao(event: React.ChangeEvent<HTMLSelectElement>): void {
        setOpcao(event.target.value);
    }

    return (
        <>
            <label>Escolha uma opção: </label>
            <select onChange={mudancaDeOpcao} value={opcao}>
                <option value="">...</option>
                <option value="opcao1">Opção 1</option>
                <option value="opcao2">Opção 2</option> 
                <option value="opcao3">Opção 3</option>
                <option value="opcao4">Opção 4</option>                    
            </select>
        </>
    )

}