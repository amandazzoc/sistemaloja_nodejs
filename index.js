import express from "express"; // CommonJS
import { listarClientes } from "./controllers/clienteController.js";
import { listarPedidos } from "./controllers/pedidoController.js";
import { listarProdutos } from "./controllers/produtoController.js";
import { listaProdutos } from "./models/produto.js";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index", {
    listaProdutos: listaProdutos
  });
});

app.get("/produtos/:id?", listarProdutos);
app.get("/clientes", listarClientes);
app.get("/pedidos", listarPedidos);

app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
