import Button from './Button';
export default function UploadButton(){

    return (
    <Button funcao={ () => alert('Botão de Upload elaborado!') } >        
        <p> Um texto associado ao botão</p>
    </Button>
    );

}