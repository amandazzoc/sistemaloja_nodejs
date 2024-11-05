import express from "express";
import Pedido from "../models/pedido.js";
const router = express.Router();
import Auth from "../middleware/Auth.js";

router.get("/pedidos", Auth, function (req, res) {
  Pedido.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidos: pedidos,
    });
  }).catch(err => {
    console.log(`Erro ao encontrar os pedidos: ${err}`);
  })
});

router.post("/pedidos/new", Auth, function (req, res) {
  const numeroPedido = req.body.numeroPedido;
  const valor = req.body.valor;
  Pedido.create({
    numeroPedido: numeroPedido,
    valor: valor,
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((err) => {
      console.log(`Erro ao criar o pedido: ${err}`);
    });
});

router.get("/pedidos/delete/:id", Auth, (req, res) => {
  const id = req.params.id;
  Pedido.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((err) => {
      console.log(`Erro ao deletar o pedido: ${err}`);
    });
});

router.get("/pedidos/edit/:id", Auth, (req, res) => {
  const id = req.params.id;
  Pedido.findByPk(id).then((pedido) => {
    res.render("pedidosEdit", {
      pedido: pedido,
    });
  });
});

router.post("/pedidos/update", Auth, (req, res) => {
  const id = req.body.id;
  const numeroPedido = req.body.numeroPedido;
  const valor = req.body.valor;
  Pedido.update(
    {
      numeroPedido: numeroPedido,
      valor: valor,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log("Erro ao editar os dados: " + error);
    });
});
export default router;
