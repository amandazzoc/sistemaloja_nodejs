import { listaPedidos } from "../models/pedido.js";

export const listarPedidos = (req, res) => {
    res.render("pedidos", {
        listaPedidos: listaPedidos,
      });
}