import { listaProdutos } from "../models/produto.js";

export const listarProdutos = (req, res) => {
  const produtoId = req.params.id;
  // Verifica se o ID foi especificado na rota
  if (produtoId) { // Filtra o produto pelo ID
    const produtoEncontrado = listaProdutos.find(produto => produto.id == produtoId);
    // Se o produto foi encontrado, renderiza a página do produto
    if (produtoEncontrado) {
      return res.render("produtos", { listaProdutos: listaProdutos, produto: produtoEncontrado });
    } else {
    // Se não encontrar, pode redirecionar para a lista ou mostrar uma mensagem de erro
      return res.status(404).send("Produto não encontrado");
    }
  }
  res.render("produtos", { 
    listaProdutos:listaProdutos, 
    produto: null 
});
};
