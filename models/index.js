const { sequelize } = require('./dbConnection');

const models = {
    User: sequelize.import('./User'),
    Building: sequelize.import('./Building'),
    Level: sequelize.import('./Level'),
    Space: sequelize.import('./Space'),
    Equipment: sequelize.import('./Equipment')

}

module.exports = models