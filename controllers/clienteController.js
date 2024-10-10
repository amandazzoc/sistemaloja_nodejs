import express from "express";
import Cliente from "../models/cliente.js";
const router = express.Router();

router.get("/clientes", function (req, res) {
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  });
});

router.post("/clientes/new", (req, res) => {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  }).then(() => {
    res.redirect("/clientes");
  });
});


router.get("/clientes/delete/:id", (req,res) => {
    const id = req.params.id
    Cliente.destroy({
        where:{
            id:id
        }
    }).then(()=> {
        res.redirect("/clientes")
    }).catch((error) => {
        console.log(error)
    })
})
export default router;
