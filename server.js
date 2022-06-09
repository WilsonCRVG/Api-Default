const express = require('express')
const cookieParser = require('cookie-parser')
const routes = require('./src/routes')
//const Mysql = require('./src/database/db')

const ProdutosHandler = require ('./src/handlers/produtoHandler')

const app = express()
app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes)






//CONEXÃO COM O BANCO DE DADOS
//Mysql.createConnection()



//SERVIDOR
app.listen('3000',()=>{
    console.log('servidor Ligado ! ')
})  