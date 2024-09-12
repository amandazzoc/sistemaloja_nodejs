const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

const listaProdutos = [
  {
    id: 1,
    imagem: "/img/produtos/locao.jpg",
    nome: "Loção Radiante Desodorante Corporal Nativa Spa Ameixa Dourada 100ml",
    preco: 15.9,
    categoria: "Nativa SPA",
  },
  {
    id: 2,
    imagem: "/img/produtos/botik.jpg",
    nome: "Creme Nutritivo Firmador Resveratrol E Silício 40g",
    preco: 131.92,
    categoria: "Botik",
  },
  {
    id: 3,
    imagem: "/img/produtos/perfume.jpg",
    nome: "African Sunrise Floral Frutal Eau De Parfum 75ml",
    preco: 169.9,
    categoria: "Botica 214",
  },
  {
    id: 4,
    imagem: "/img/produtos/gold.jpg",
    nome: "Gold Desodorante Colônia 75ml",
    preco: 119.9,
    categoria: "Floratta",
  },
  {
    id: 5,
    imagem: "/img/produtos/mascara.jpg",
    nome: "Sérum Para Cílios e Sobrancelhas Explosion Grow 5g",
    preco: 51.9,
    categoria: "Make B.",
  },
];

app.get("/", function (req, res) {
  res.render("index", {
    listaProdutos: listaProdutos
  });
});

app.get("/clientes", function (req, res) {
  const listaClientes = [
    { nome: "Amanda", cpf: "523.531.838-60", endereco: "Rua Sabiá, 80" },
    { nome: "Camila", cpf: "376.623.823-90", endereco: "Rua Sabiá, 80" },
    {
      nome: "Edgar",
      cpf: "445.738.243-65",
      endereco: "Rua Salvador Moreira, 105",
    },
    {
      nome: "Wesley",
      cpf: "236.827.355-01",
      endereco: "Rua Salvador Moreira, 115",
    },
    {
      nome: "Maria Dasdores",
      cpf: "665.853.726-23",
      endereco: "Rua Papagaio, 85",
    },
  ];
  res.render("clientes", {
    listaClientes: listaClientes,
  });
});

app.get("/produtos/:id?", function (req, res) {
  const produtoId = req.params.id;
  // Verifica se o ID foi especificado na rota
  if (produtoId) {
    // Filtra o produto pelo ID
    const produtoEncontrado = listaProdutos.find(
      (produto) => produto.id == produtoId
    );

    // Se o produto foi encontrado, renderiza a página do produto
    if (produtoEncontrado) {
      return res.render("produtos", {
        listaProdutos: listaProdutos,
        produto: produtoEncontrado,
      });
    } else {
      // Se não encontrar, pode redirecionar para a lista ou mostrar uma mensagem de erro
      return res.status(404).send("Produto não encontrado");
    }
  }

  res.render("produtos", {
    listaProdutos: listaProdutos,
    produto: null,
  });
});

app.get("/pedidos", function (req, res) {
  const listaPedidos = [
    { numeroPedido: 1, valor: 199.9 },
    { numeroPedido: 2, valor: 26.9 },
    { numeroPedido: 3, valor: 144.9 },
    { numeroPedido: 4, valor: 62.8 },
    { numeroPedido: 5, valor: 34.904 },
    { numeroPedido: 6, valor: 124.7 },
  ];
  res.render("pedidos", {
    listaPedidos: listaPedidos,
  });
});

app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
