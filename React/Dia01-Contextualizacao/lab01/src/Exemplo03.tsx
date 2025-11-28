import person from "./assets/Data";

function Exemplo03() {
    return (
        <header>
            <h1> Hello, {person.name}. </h1>
            <p> You are {person.idade} years old. </p>
            <p> Your gender is {person.genero}. </p>
        </header>
    );
}
 
export default Exemplo03;