const gql = require('graphql-tag');

const typeDefs = gql.gql(`
    type Query {
        tracksForHome: [Track!]!
    }

    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        moduleCount: Int
    }

    type Author {
        id: ID!
        name: String!
        photo: String
    }
`);

module.exports = typeDefs;
