import React from 'react'
import { LOGGED_IN_USER } from '../../GraphQL/queries'
import { Query } from 'react-apollo'

const activeSession = Component => props => {
    return (
        <Query query={LOGGED_IN_USER}>
            {
                ({ refetch, data, loading }) => (
                    <Component {...props} session={data} refetch={refetch} loading={loading} />
                )
            }

        </Query>
    )
}

export default activeSession