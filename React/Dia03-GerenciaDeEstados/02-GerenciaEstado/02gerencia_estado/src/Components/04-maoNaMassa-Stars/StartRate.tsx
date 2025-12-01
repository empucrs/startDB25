import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function StartRate({nStars}: {nStars: number}) {
    const [rate, setRate] = React.useState<number>(0);   
    const starList = Array.from({length: nStars}, (_, i) => i + 1); 
    
    function avaliacao(star: number): void {
        setRate(star);
    }

    return (
        <>
            <h1>Start Rate Component</h1>
            {
                starList.map((star) => 
                    <FaStar 
                        onClick={()=>avaliacao(star)}
                        color={star <= rate ? "gold" : "grey"}
                    >
                    </FaStar>
                )
            }   
            <p>Você avaliou {rate} de {nStars} estrelas</p>
        </>
    );
}