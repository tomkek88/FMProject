const equipment = (sequelize, DataTypes) => {
    const Equipment = sequelize.define('equipment', {
        id: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,

        },
        category_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        manufacturer: {
            type: DataTypes.STRING
        },
        model: {
            type: DataTypes.STRING
        },
        added_on: {
            type: DataTypes.DATE,
            required: true
        },
        technical_inspection: {
            type: DataTypes.DATE
        },
        room_id: {
            type: DataTypes.STRING

        },
        level_id: {
            type: DataTypes.STRING,
            required: true
        }



    })

    Equipment.sync({ force: false })
    return Equipment;

}

module.exports = equipment