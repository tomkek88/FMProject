module.exports = {
    Query: {
        hello: () => 'hello!!'
    },

    Mutation: {
        register: async (root, { username, email, password }, { models }) => {
            const user = await models.User.findOne({ username });
            if (user) throw new Error('user already exists');
            const newUser = {
                username,
                email,
                password
            }

            try {
                await models.User.create(newUser);
                return true
            } catch (err) {
                console.log(err)
                return false
            }
        }
    }
}