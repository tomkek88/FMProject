const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true
        },
        uuid: {
            type: DataTypes.STRING
        },
        username: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,


        },
        email: {
            type: DataTypes.STRING,

            required: true,
            allowNull: false,
            validate: {

                isEmail: {
                    args: true,
                    msg: 'Nieprawidłowy adres email'
                },

            }
        },
        password: {
            type: DataTypes.STRING,
            required: true,

            allowNull: false

        }
    })

    return User;
}

module.exports = user