import { ApolloServer, gql } from 'apollo-server-lambda'


const typeDefs = gql`
type Query{
    hello: String
}
`

const resolvers = {
    Query: {
        hello: () => 'hello'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true
})

exports.handler = server.createHandler();

