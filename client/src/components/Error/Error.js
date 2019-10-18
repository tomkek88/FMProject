import React, { Component } from 'react';

const Error = (props) => {
    console.log(props.errors.graphQLErrors)
    return (
        <div>
            {props.errors.graphQLErrors.map(error => (
                <div>{error.message.split("Validation error: ")}</div>
            ))}
        </div>
    )
}

export default Error
