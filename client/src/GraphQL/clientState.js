

const clientState = {
    defaults: {
        selectedBuilding: {
            id: null,
            name: null,
            __typename: "building"
        }, activeSpace: {
            active: false,
            __typename: 'space'
        }
    },
    resolvers: {
        // Query: {
        //     selectedBuilding: (_, args, { cache }) => {

        //         cache.readData()
        //         return null;


        //     }
        // },
        Mutation: {
            selectBuilding: (_, { id, name }, { cache }) => {

                const data = {

                    selectedBuilding: {
                        id,
                        name,
                        __typename: "building"
                    }

                }
                cache.writeData({ data })
                return null

            },
            activateSpace: (_, args, { cache }) => {
                console.log('mutation active')
                const data = {
                    activeSpace: {
                        active: true,
                        __typename: 'space'
                    }

                }
                cache.writeData({ data })
                return null
            }
        }
    }
}

export default clientState;