const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            required: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            required: true
        },
        password: {
            type: DataTypes.STRING,
            required: true
        }
    })

    return User;
}

module.exports = user