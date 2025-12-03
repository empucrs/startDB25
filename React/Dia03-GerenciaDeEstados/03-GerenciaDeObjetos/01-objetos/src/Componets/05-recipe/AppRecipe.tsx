import { useState } from "react";
import receita, { type Receita } from "./Data/receita";

export default function AppRecipe() {
  const [receitaLocal, setReceitaLocal] = useState<Receita>(receita);

  function mudaIngrediente(e: React.ChangeEvent<HTMLInputElement>, id: number) {
    const { name, value } = e.target;

    const novosIngredientes = receitaLocal.ingredientes.map((ingrediente) => {
      if (ingrediente.id === id) {
        return {
          ...ingrediente,
          [name]: parseFloat(value),
        };
      }
      return ingrediente;
    });

    setReceitaLocal({
      ...receitaLocal,
      ingredientes: novosIngredientes,
    });
  }

  return (
    <>
      <h1>{receitaLocal.receita}</h1>
      <p>
        Preço estimado: R${" "}
        {receitaLocal.ingredientes
          .reduce(
            (acum, item) => item.precoUnitario * item.quantidade + acum,
            0
          )
          .toFixed(2)}
      </p>
      <div>
        <h2>Ingredientes: {receitaLocal.ingredientes.length} itens</h2>
        {receitaLocal.ingredientes.map((ingrediente) => {
          return (
            <div>
              <label>
                Ingrediente
                <input value={ingrediente.item} name="item" readOnly></input>
              </label>
              <label>
                {" "}
                Quantidade
                <input
                  value={ingrediente.quantidade}
                  name="quantidade"
                  onChange={(e) => mudaIngrediente(e, ingrediente.id)}
                ></input>
              </label>
              <label>
                Unidade
                <input
                  value={ingrediente.unidade}
                  name="unidade"
                  readOnly
                ></input>
              </label>
              <label>
                Preço da unidade
                <input
                  value={ingrediente.precoUnitario}
                  name="precoUnitario"
                  onChange={(e) => mudaIngrediente(e, ingrediente.id)}
                ></input>
              </label>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Passos de produção</h2>
        {receitaLocal.preparo.map((etapa) => {
          return (
            <div
              style={{
                display: "flex",
                border: "1px solid",
                margin: "10px",
                width: "500px",
                alignItems: "center",
              }}
            >
              <img
                // solução criada como create react app
                //src={`${process.env.PUBLIC_URL}/images/passo${etapa.passo}.jpg`}

                // solução para vite
                //src={ import.meta.env.BASE_URL + `images/passo${etapa.passo}.jpg` }

                // solução geral - seja em produção ou desenvolvimento
                src={`./images/passo${etapa.passo}.jpg`}
                width={50}
                height={50}
              ></img>
              <p style={{ margin: "5px" }}>{etapa.descricao}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
