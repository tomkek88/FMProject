const space = (sequelize, DataTypes) => {
    const Space = sequelize.define('space',{
        id:{
            type: DataTypes.STRING,
            unique:true,
            primaryKey:true
        },
        name: {
            type: DataTypes.STRING,

        },
        number:{
            type: DataTypes.STRING
        },
        area:{
            type:DataTypes.FLOAT
        },
        level:{
            type:DataTypes.STRING,
            required:true
        },
        buildingId:{
            type:DataTypes.STRING,
            required:true
        }
    })
    Space.sync({force:false})
    return Space

}

module.exports = space