const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/keys')

module.exports = {
    Query: {
        me: (root, args, { me }) => {
            return me
        }
    },

    Mutation: {
        register: async (root, { username, email, password }, { models }) => {
            const user = await models.User.findOne({ where: { username } });
            if (user) throw new Error('user already exists');



            const newUser = {
                username,
                email,
                password: await bcrypt.hash(password, 10)
            }
            await models.User.create(newUser);
            // try {
            //     await models.User.create(newUser);
            //     return true;
            // } catch (err) {
            //     return err

            // }



        },

        login: async (root, { username, password }, { models }) => {
            const user = await models.User.findOne({ where: { username } });
            if (!user) throw new Error('user not found')

            const isValid = await bcrypt.compare(password, user.password);
            if (!isValid) throw new Error('invalid password');

            try {
                const payload = {
                    id: user.id,
                    username: user.username,
                    email: user.email
                }

                const token = await jwt.sign(payload, JWT_SECRET, { expiresIn: 3600 })
                return { token }
            } catch (err) {
                console.log(err)
            }


        }
    }
}