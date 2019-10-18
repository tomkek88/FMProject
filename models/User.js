const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false,
            validate: {
                isNull: {

                    msg: 'Username field is required'
                },
                len: {
                    args: [5, 30],
                    msg: 'Username must be between 5 and 30 characters'
                },

            }

        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            required: true,
            allowNull: false,
            validate: {

                len: {
                    args: [6, 30],
                    msg: 'Email must be between 6 and 30 characters'
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