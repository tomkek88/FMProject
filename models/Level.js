const level = (sequelize, DataTypes) => {
    const Level = sequelize.define('level', {
        id: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    })
    Level.sync({ force: true })
    return Level
}

module.exports = level