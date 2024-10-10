import express from "express";
import Pedido from "../models/pedido.js";
const router = express.Router();

router.get("/pedidos", function (req, res) {
  Pedido.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidos: pedidos,
    });
  });
});

router.post("/pedidos/new", function(req, res) {
  const numeroPedido = req.body.numeroPedido;
  const valor = req.body.valor;
  Pedido.create({
    numeroPedido: numeroPedido,
    valor: valor
  }).then(()=> {
    res.redirect("/pedidos");
  })
})
export default router;
