import React from 'react';
import uuidv4 from 'uuid/v4';
import './Error.scss'

const Error = (props) => {

    const errors = props.errors.graphQLErrors[0].message;
    // console.log(Array.isArray(errors))
    return (
        <div>

            {Array.isArray(errors) ? props.errors.graphQLErrors[0].message.map(error => (
                <div className='error' key={uuidv4()}>{error.message}</div>
            )) : <div className='error'>{props.errors.graphQLErrors[0].message}</div>}
        </div>
    )
}

export default Error
