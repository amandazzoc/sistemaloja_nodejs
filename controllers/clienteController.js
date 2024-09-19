import { listaClientes } from "../models/cliente.js";

export const listarClientes = (req,res) => {
    res.render("clientes", { 
        listaClientes : listaClientes,
    });
    
}