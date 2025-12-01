export default function Borbulha(){

    function funcaoPai(){
        alert('Função do componente Pai foi executada!');
    }

    function funcaoFilho01(){
        alert('Função do componente Filho 01 foi executada!');
    }

    function funcaoFilho02(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        evento.stopPropagation();
        alert('Função do componente Filho 02 foi executada!');
    }

    return (    
        <div onClick={funcaoPai} style={{border: '2px solid black', padding: '10px'}}>
            <button onClick={funcaoFilho01}>
                Botão do Filho 01 (sem stopPropagation: o evento chega ao componente Pai)
            </button>
            <br />
            <button onClick={funcaoFilho02}>
                Botão do Filho 02 (com stopPropagation: o evento não chega ao componente Pai)
            </button>
        </div>
    );

}