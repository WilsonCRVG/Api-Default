const Produtos = require('../model/produto')

const ProdutosHandler = {

    async CreateProduto (req,res){
        const {nome,preco} = req.body;

        let dataCreate = {
            nome: req.body.nome ,
            preco:req.body.preco
        }

        const produtos = await Produtos.create(dataCreate)
        res.json(produtos)
        console.log('Produto Cadastrado com sucesso!')
    },

    async ReadProduto (req,res){

        const produtos = await Produtos.findAll();
        res.json(produtos)
    },

    async UpdateProduto (req,res){
        const {id,nome,preco} = req.body

        let dataCreate = {
            nome,preco
        }
        const produto = await Produtos.update(dataCreate, {
            where: {id:id}
        })
        res.json(produto)
    },

    async DeleteProduto (req,res){
        const {id} = req.body
        const produto = await Produtos.findByPk(id)
        produto.destroy()

        console.log('PRODUTO EXCLUIDO COM SUCESSO!')
        res.json("Excluido com sucesso")
    }


}

module.exports = ProdutosHandler;