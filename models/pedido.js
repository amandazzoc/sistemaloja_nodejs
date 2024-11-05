import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";

const Pedido =  connection.define("pedidos",{
  numeroPedido: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  valor: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})
Pedido.sync({force:false})

export default Pedido