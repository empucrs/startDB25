import Button from './Button';

export default function PlayButton(){

    function playMusic(){
        alert('Tocando música!');
    }

    return (
        <Button funcao={playMusic}>
            Tocar uma Música qualquer
        </Button>
    );
}