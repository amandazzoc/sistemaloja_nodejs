import express from "express";
import Produto from "../models/produto.js";
import multer from "multer";
import path from "path";

const router = express.Router();

// Configuração do Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Pasta onde a imagem será salva
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nome do arquivo com um timestamp
  },
});
const upload = multer({ storage: storage });

// Rota para listar todos os produtos ou um produto específico
router.get("/produtos", async (req, res) => {
  try {
    const produtos = await Produto.findAll(); // Buscando todos os produtos
    const produtoId = req.query.id; // Obtendo o ID da query string

    if (produtoId) {
      const produtoEncontrado = produtos.find(
        (produto) => produto.id == produtoId
      ); // Encontrar produto pelo ID

      if (produtoEncontrado) {
        return res.render("produtos", {
          produtos: produtos, // Passa a lista completa para a view
          produto: produtoEncontrado, // Passa o produto encontrado
        });
      } else {
        return res.status(404).send("Produto não encontrado");
      }
    }

    // Se não houver ID, renderizar a lista completa
    res.render("produtos", {
      produtos: produtos, // Exibe a lista completa de produtos
      produto: null, // Nenhum produto selecionado
    });
  } catch (erro) {
    console.log(erro);
    res.status(500).send("Erro ao buscar produtos");
  }
});

// Rota para visualizar um produto específico
router.get("/produtos/:id", async (req, res) => {
  try {
    const produtoId = req.params.id; // Obtendo o ID da URL
    const produto = await Produto.findByPk(produtoId); // Método para buscar produto pelo ID

    if (!produto) {
      return res.status(404).send("Produto não encontrado");
    }

    const produtos = await Produto.findAll(); // Buscar todos os produtos para exibição na lista
    res.render("produtos", {
      produtos: produtos, // Passa a lista completa para a view
      produto: produto, // Passa o produto encontrado
    });
  } catch (erro) {
    console.log(erro);
    res.status(500).send("Erro ao buscar o produto");
  }
});

// Rota para cadastro de produto com imagem
router.post("/produtos/new", upload.single("imagem"), async (req, res) => {
  const { nome, preco, categoria } = req.body;
  const imagem = req.file ? req.file.filename : null; // Nome do arquivo salvo

  try {
    await Produto.create({
      nome,
      preco,
      categoria,
      imagem: `/uploads/${imagem}`, // Caminho da imagem no servidor
    });
    res.redirect("/produtos");
  } catch (erro) {
    console.log(erro);
    res.status(500).send("Erro ao cadastrar produto");
  }
});

router.get("/produtos/delete/:id", (req, res) => {
  const id = req.params.id
  Produto.destroy({
    where:{
      id: id
    }
  }).then(()=> {
    res.redirect("/produtos")
  }).catch(err => {
    console.log(`Erro ao apagar o produto: ${err}`);
  })
})

router.get("/produtos/edit/:id", (req, res) => {
  const id = req.params.id
  Produto.findByPk(id).then(produto => {
    res.render("produtosEdit", {
      produto:produto
    })
  })
})

router.post("/produtos/update", upload.single("imagem"), async (req, res) => {
  const { id, nome, preco, categoria } = req.body;
  const imagem = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const produto = await Produto.findByPk(id);
    if (!produto) {
      return res.status(404).send("Produto não encontrado");
    }

    await Produto.update(
      {
        nome: nome,
        preco: preco,
        categoria: categoria,
        imagem: imagem ? imagem : produto.imagem, // Atualiza a imagem se foi enviada, caso contrário mantém a atual
      },
      {
        where: { id: id },
      }
    );

    res.redirect("/produtos");
  } catch (erro) {
    console.log("Erro ao editar os dados: " + erro);
    res.status(500).send("Erro ao editar os dados");
  }
});



export default router;
