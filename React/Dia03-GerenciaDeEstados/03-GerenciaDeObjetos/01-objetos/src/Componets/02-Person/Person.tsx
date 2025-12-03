import { useState } from 'react';

interface Person {
  firstName: string;
  email: string;
}

export default function App() {

    const [person, setPerson] = useState<Person>({
        firstName: 'Barbara',
        email: 'bhepworth@sculpture.com',
    });

    function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    //function handleFirstNameChange(str: string) {
        //person.firstName = e.target.value;
        const nome: string = e.target.value;
        setPerson({
            ...person,
            firstName: nome,
        });
    }

    function genericHandleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setPerson({
            ...person,
            [name]: value,
        });
    }

    function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
        const novoEmail: string = e.target.value;
        setPerson({
            ...person,
            email: novoEmail,
        });
    }

    return (
        <>
            <label>
                First name:
                <input 
                    name="firstName"
                    type="text"                     
                    value={person.firstName} 
                    //onChange={handleFirstNameChange} 
                    onChange={genericHandleChange}
                />
            </label>
            <label>
                Email:
                <input 
                    name="email"
                    type="email" 
                    value={person.email} 
                    //onChange={handleEmailChange} 
                    onChange={genericHandleChange}
                />
            </label>

            <p>Dados da pessoa: nome ({person.firstName}) e email ({person.email})</p>
        </>
    );
}
