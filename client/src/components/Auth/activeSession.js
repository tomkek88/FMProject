import React from 'react'
import { LOGGED_IN_USER } from '../../GraphQL/queries'
import { Query } from 'react-apollo'

const activeSession = Component => props => {
    return (
        <Query query={LOGGED_IN_USER}>
            {
                ({ refetch, data }) => (
                    <Component {...props} session={data} refetch={refetch} />
                )
            }

        </Query>
    )
}

export default activeSession