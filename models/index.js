const { sequelize } = require('./dbConnection');

const models = {
    User: sequelize.import('./User'),
    Building: sequelize.import('./Building'),
    Space: sequelize.import('./Space')

}

module.exports = models