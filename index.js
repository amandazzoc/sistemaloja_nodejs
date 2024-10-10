import express from "express"; // CommonJS
import clienteController from "./controllers/clienteController.js";
import pedidoController from "./controllers/pedidoController.js";
import produtoController from "./controllers/produtoController.js";
import Produto from "./models/produto.js";
import connection from "./config/sequelize-config.js";

const app = express();

app.use(express.urlencoded({extended:false}))

connection
  .authenticate()
  .then(()=>{
    console.log("Conexão com o banco de dados feito com sucesso");
  })
  .catch((error) => {
    console.log(error);
  })

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/uploads", express.static("uploads")); // Servir a pasta onde as imagens estão sendo salvas

app.get("/", function (req, res) {
   Produto.findAll()
     .then((produtos) => {
       res.render("index", {
         produtos: produtos, // Passa a lista de produtos para a view
       });
     })
     .catch((erro) => {
       console.log(erro);
       res.status(500).send("Erro ao buscar produtos");
     });
});

app.use("/", produtoController);
app.use("/", clienteController);
app.use("/", pedidoController);

app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});

// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});