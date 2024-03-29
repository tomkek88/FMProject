const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const uuidv4 = require('uuid/v4')
const { JWT_SECRET } = require('../config/keys')
const { GraphQLError } = require('graphql')

module.exports = {
    Query: {
        me: (root, args, { me }) => {
            return me
        },
        buildings: async (root, args, { models, me }) => {
            const buildings = await models.Building.findAll({ where: { userId: me.id } });
            try {
                return buildings;
            } catch (err) {
                return new GraphQLError(err.errors)
            }
        },
        selectedBuilding: async (root, { id }, { models, me }) => {
            const building = await models.Building.findOne({ where: { id, userId: me.id } });
            if (building) {
                console.log('building found')
                return building;
            } else {
                console.log('building not found')
                return null
            }

        },
        showSpaces: async (root, { buildingId }, { models }) => {

            const spaces = await models.Space.findAll({ where: { buildingId } })
            return spaces
        }
    },

    Mutation: {
        register: async (root, { username, email, password }, { models }) => {
            const user = await models.User.findOne({ where: { username } });
            if (user) throw new Error('user already exists');
            const ifemail = await models.User.findOne({ where: { email } });
            if (ifemail) throw new Error('Adres email już jest zajęty')


            const newUser = {
                uuid: uuidv4(),
                username,
                email,
                password: await bcrypt.hash(password, 10),
                joined_on: new Date()

            }
            console.log(newUser)
            try {
                await models.User.create(newUser);

                return true;
            } catch (err) {

                return new GraphQLError(err.errors)

            }



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

                const token = await jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' })
                return { token }
            } catch (err) {
                console.log(err)
            }


        },
        addBuilding: async (root, { name, location }, { models, me }) => {
            console.log(me)
            const building = await models.Building.findOne({ where: { name, userId: me.id } });
            if (building) throw new Error('Budynek o tej nazwie już istnieje w Twojej bazie')

            const newBuilding = {
                name,
                location,
                addedOn: Date.now(),
                userId: me.id
            }

            try {
                console.log("new building id : ", newBuilding.id)
                await models.Building.create(newBuilding);
                return true

            } catch (err) {
                console.log(err.errors)
                return new GraphQLError(err)
            }
        },
        addSpace: async (root, { name, number, area, level, buildingId }, { models }) => {
            const space = await models.Space.findOne({ where: { number, buildingId } })
            if (space) throw new Error('numery pomieszczeń nie mogą się powtarzać')

            const newSpace = {
                name,
                number,
                area,
                level,
                buildingId
            }

            try {
                await models.Space.create(newSpace)
                return true
            } catch (err) {
                console.log(err.errors)
                return new GraphQLError(err)
            }

        }
    }
}