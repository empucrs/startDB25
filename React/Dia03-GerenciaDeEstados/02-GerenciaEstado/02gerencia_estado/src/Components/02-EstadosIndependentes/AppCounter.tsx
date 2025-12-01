import Counter from "./Counter"

export default function AppCounter() {

    return (    
        <>
            <h1>App Counter - Estados Independentes</h1>
            <Counter valorInicial={10} cor="blue"/>
            <Counter valorInicial={20} cor="red"/>
            <Counter valorInicial={30} cor="green"/>
        </>
    );
    
}