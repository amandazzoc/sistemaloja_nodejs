import express from "express";
import Cliente from "../models/cliente.js";
import { where } from "sequelize";
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

router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id
  Cliente.findByPk(id).then(cliente => {
    res.render("clientesEdit", {
      cliente: cliente
    })
  })
})

router.post("/clientes/update", (req, res) => {
  const id = req.body.id
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco
  Cliente.update({
    nome:nome,
    cpf:cpf,
    endereco:endereco
  },
  {
    where: {
      id:id
    }
  }).then(() => {
    res.redirect("/clientes")
  }).catch((error) => {
    console.log("Erro ao editar os dados: " + error)
  })
})
export default router;
