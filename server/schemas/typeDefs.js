const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        firstName: String
        lastName: String
        userName: String
        phone: String
        email: String
        password: String
        isAdmin: Boolean
    }


    type Auth {
        token: ID
        user: User
    }



    type Query {
        user: User
    }

   
    type Mutation {
        addUser(firstName: String!, lastName: String!, userName: String!, phone:String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, userName: String, phone:String, email: String): User
        updateUserPassword(password: String): User
        deleteUser(_id:ID!): User
        login(email: String!, password: String!): Auth
        
    }

    

`;

module.exports = typeDefs;