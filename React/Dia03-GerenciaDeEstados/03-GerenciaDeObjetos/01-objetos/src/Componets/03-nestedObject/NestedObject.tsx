import { useState } from "react";

interface Artwork {
  title: string;
  city: string;
  image: string;
}

interface Person {
  name: string;
  artwork: Artwork;
}

export default function NestedObject() {
    const [person, setPerson] = useState<Person>({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        },
    });

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        const novoNome: string = e.target.value;
        setPerson({
            ...person,
            name: novoNome,
        });
    }
    function genericHandleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        /*
        // Alternativa 1 de construir o novo objeto artwork
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                [name]: value,
            },
        });
        */

        //Alternativa 2 de construir o novo objeto artwork
        const updatedArtwork = {
            ...person.artwork,
            [name]: value
        };

        setPerson({
            ...person,
            artwork: updatedArtwork,
         });
    }

    return (
        <>
            <label>
                Name:
                <input
                value={person.name}
                onChange={handleNameChange}
                />
            </label>
            <label>
                Title:
                <input
                name="title"
                value={person.artwork.title}
                onChange={genericHandleChange}
                />
            </label>
            <label>
                City:
                <input
                name="city"
                value={person.artwork.city}
                onChange={genericHandleChange}
                />
            </label>
            <label>
                Image:                
                <input
                name="image"
                value={person.artwork.image}
                onChange={genericHandleChange}
                />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img 
                src={person.artwork.image} 
                alt={person.artwork.title}
            />
        </>
    );


}
