const express = require('express')
const ProdutosHandler = require ('./handlers/produtoHandler')

const routes = express.Router()


//ROTAS
//ROTA PRINCIAPL
routes.get('/',(req,res)=>{
    res.send('Penis na lombriga ! ')
})

//ROTA CRIAR PRODUTO
routes.post('/criarProduto',ProdutosHandler.CreateProduto)

//ROTA LISTAR PRODUTOS
routes.get('/listarProdutos',ProdutosHandler.ReadProduto)

//ROTA DE UPDATE
routes.put('/editarProduto',ProdutosHandler.UpdateProduto)

//ROTA PRA EXCLUSÃO DE PRODUTOS
routes.delete('/deletarProduto',ProdutosHandler.DeleteProduto)

//EXPORTAR AS ROTAS
module.exports= routes;