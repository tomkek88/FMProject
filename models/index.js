const { sequelize } = require('./dbConnection');

const models = {
    User: sequelize.import('./User')
}

module.exports = models