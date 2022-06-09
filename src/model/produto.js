const Sequelize = require('sequelize');
const db = require('../database/db')
const ProdutoSchema = require("../schema/produtoSchema")

const Produtos = db.define('Produtos',ProdutoSchema)

//***PARAR FORÇAR A CRIAÇÂO DE TABELA***
//Produtos.sync({force:true})

module.exports = Produtos;