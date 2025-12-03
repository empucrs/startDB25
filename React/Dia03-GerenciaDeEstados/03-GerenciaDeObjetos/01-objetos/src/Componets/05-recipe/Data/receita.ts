// Tipo para cada ingrediente
interface Ingrediente {
  id: number;
  item: string;
  quantidade: number;
  unidade: string;
  precoUnitario: number; // preço por unidade (em reais, ex: R$ 0,10 por ovo)
}

// Tipo para cada passo do modo de preparo
interface Passo {
  passo: number;
  descricao: string;
}

// Tipo principal da receita
export interface Receita {
  receita: string;
  porcoes: number;
  tempo: number; // em minutos
  ingredientes: Ingrediente[];
  preparo: Passo[];
}

// Dados da receita com tipagem explícita
const receita: Receita = {
  receita: "Bolo de laranja",
  porcoes: 8,
  tempo: 95,
  ingredientes: [
    {
      id: 0,
      item: "ovo",
      quantidade: 5,
      unidade: "unidades",
      precoUnitario: 0.1,
    },
    {
      id: 1,
      item: "açucar",
      quantidade: 300,
      unidade: "gramas",
      precoUnitario: 0.005,
    },
    {
      id: 2,
      item: "manteiga",
      quantidade: 100,
      unidade: "gramas",
      precoUnitario: 0.06,
    },
    {
      id: 3,
      item: "creme de leite fresco",
      quantidade: 150,
      unidade: "ml",
      precoUnitario: 0.04,
    },
    {
      id: 4,
      item: "raspa de laranja",
      quantidade: 50,
      unidade: "gramas",
      precoUnitario: 0.08,
    },
    {
      id: 5,
      item: "farinha de trigo",
      quantidade: 270,
      unidade: "gramas",
      precoUnitario: 0.004,
    },
    {
      id: 6,
      item: "sal",
      quantidade: 1,
      unidade: "pitada",
      precoUnitario: 0.01,
    },
    {
      id: 7,
      item: "fermento biológico",
      quantidade: 10,
      unidade: "gramas",
      precoUnitario: 0.15,
    }, // corrigido: fermento químico ou biológico?
    {
      id: 8,
      item: "Suco de laranja",
      quantidade: 1,
      unidade: "copo (200ml)",
      precoUnitario: 2.0,
    },
    {
      id: 9,
      item: "geleia de damasco",
      quantidade: 100,
      unidade: "gramas",
      precoUnitario: 0.08,
    }, // ajustei quantidade para valor realista
  ],
  preparo: [
    {
      passo: 1,
      descricao: "Reúna todos os ingredientes",
    },
    {
      passo: 2,
      descricao: "Misture os ovos e o açúcar",
    },
    {
      passo: 3,
      descricao:
        "Adicione a manteiga derretida, o creme de leite, as raspas de laranja e misture",
    },
    {
      passo: 4,
      descricao:
        "Em outro recipiente, misture os secos (farinha, sal e fermento)",
    },
    {
      passo: 5,
      descricao:
        "Peneire a mistura dos secos na massa e misture até formar uma massa homogênea",
    },
    {
      passo: 6,
      descricao:
        "Transfira a massa para uma forma de bolo inglês e leve ao forno por 50 minutos",
    },
    {
      passo: 7,
      descricao: "Para a calda, misture o suco de laranja e a geleia",
    },
    {
      passo: 8,
      descricao:
        "Leve para o fogo médio, deixe levantar fervura e conte um minuto mexendo sempre",
    },
    {
      passo: 9,
      descricao: "Desenforme o bolo e banhe o topo com a calda quente",
    },
  ],
};

export default receita;
