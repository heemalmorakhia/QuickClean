import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation Mutation($firstName: String!, $lastName: String!, $userName: String!, $phone: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, userName: $userName, phone: $phone, email: $email, password: $password) {
      token
      user {
        _id
        email
        firstName
        lastName
        password
        phone
        userName
      }
    }
}
`

export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        email
        firstName
        lastName
        password
        phone
        userName
      }
      token
    }
}
`

export const UPDATE_USER = gql`
mutation Mutation($firstName: String, $lastName: String, $userName: String, $phone: String, $email: String) {
    updateUser(firstName: $firstName, lastName: $lastName, userName: $userName, phone: $phone, email: $email) {
      _id
      email
      firstName
      lastName
      phone
      userName
    }
}
`

export const UPDATE_USER_PASSWORD = gql`
mutation UpdateUserPassword($password: String) {
    updateUserPassword(password: $password) {
      _id
      email
      userName
    }
}
`
export const DELETE_USER = gql`
mutation DeleteUser($id: ID!) {
    deleteUser(_id: $id) {
      _id
    }
}
`
