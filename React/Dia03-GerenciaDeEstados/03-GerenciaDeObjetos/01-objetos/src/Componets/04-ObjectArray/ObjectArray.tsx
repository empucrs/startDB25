import { useState } from "react";

interface Item {
  id: number;
  value: string;
}

export default function ObjectArray() {
  const initialArray: Item[] = [
    { id: 0, value: "Zero" },
    { id: 1, value: "Um" },
    { id: 2, value: "Dois" },
  ];

  const [lista, setLista] = useState<Item[]>(initialArray);

  //Alternativa 1 de construção da função de handleList
  //function handleList(e: React.ChangeEvent<HTMLInputElement>, id:number) {

  //Alternativa 2 de construção da função de handleList
  function handleList(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, id } = e.target;

    const idNum = parseInt(id, 10);

    setLista(
      lista.map((objeto) => {
        if (objeto.id === idNum) {
          return { ...objeto, value: value };
        } else {
          return objeto;
        }
      })
    );
  }

  return (
    <>
      <h1>Soma dos valores: {lista.reduce((accum, v) => accum + v.id, 0)}</h1>
      {lista.map((reg, idx) => (
        <div>
          <label>
            Registro de número {reg.id}
            <input
              id={reg.id.toString(10)}
              value={reg.value}
              //onChange={(e) => handleList(e, reg.id)}>
              onChange={handleList}
            ></input>
          </label>
        </div>
      ))}
    </>
  );
}
