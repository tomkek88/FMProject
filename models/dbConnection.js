const Sequelize = require('sequelize').Sequelize;

const sequelize = new Sequelize('fmproject', 'root', 'root', {
    host: "localhost",
    port: 3311,
    dialect: 'mysql'
})

sequelize.authenticate().then(() => console.log('connected to db')).catch(err => console.log('cannot connect to db', err))

module.exports = { sequelize }