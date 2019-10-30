

const building = (sequelize, DataTypes) => {
    const Building = sequelize.define('building', {
        id: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        location: {
            type: DataTypes.STRING
        },
        addedOn: {
            type: DataTypes.DATE,
            allowNull: false,
            field: "added_on"
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "user_id"
        }
    })
    Building.sync({force:false})
    return Building;
}

module.exports = building;