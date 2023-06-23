import { gql } from '@apollo/client';

export const QUERY_USER = gql`

{
    user {
        _id
        email
        firstName
        lastName
        phone
        userName
        password
    }
}

`