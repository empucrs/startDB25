import type { JSX } from "react";

export function Exemplo03RenderizacaoCondicional() {

    const isLoggedIn: boolean = true;

    let greeting: JSX.Element;

    if(isLoggedIn) {
        greeting = <h1>(0) Welcome back, user!</h1>;
    } else {
        greeting = <h1>(0) Please sign up.</h1>;
    }

    /* 
    //Alternativa com operador ternário
    return (
        <div>
            {greeting}
        </div>
    );
    */

    /* 
    //Alternativa operador ternário inline
    return (
        <div>
            { isLoggedIn 
                ? <h1>(1) Welcome back, user!</h1> 
                : <h1>(1) Please sign up.</h1> 
            }
        </div>
    );
   */

    //Alternativa com operador &&
    return (
        <div>
            { isLoggedIn && <h1>(2) Welcome back, user!</h1> }
            { !isLoggedIn && <h1>(2) Please sign up.</h1> }
        </div>
    );

}