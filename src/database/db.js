const Sequelize = require('sequelize')



    
    const sequelize = new Sequelize('crud_sequelize','root','',{

    dialect:'mysql',
    host:'localhost'

    })

    sequelize.authenticate().then(()=>{
        console.log('conectado com Sucesso!')
        }).catch((erro)=>{
          console.log('Falha ao se conectar ' + erro)
     })


module.exports = sequelize;
