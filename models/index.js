const { sequelize } = require('./dbConnection');

const models = {
    User: sequelize.import('./User'),
    Building: sequelize.import('./Building')
}

module.exports = models