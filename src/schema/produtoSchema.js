const Sequelize = require('sequelize')


const produtos = {
    id:{
        type:Sequelize.INTEGER ,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    preco:{
        type:Sequelize.DECIMAL,

    }
}

module.exports = produtos;