import { SELECTED_BUILDING } from './queries';
import { SELECT_BUILDING } from './mutations'

const clientState = {
    defaults: {
        selectedBuilding: {
            id: null,
            name: null,
            __typename: "building"
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

            }
        }
    }
}

export default clientState;