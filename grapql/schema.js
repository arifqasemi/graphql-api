const typeDefs = `#graphql
 type Book {
    id: ID!
    title: String
    author: String
    user: User
  }
  type User {
    name: String
    email: String
    password: String
    book: [Book!]
  }

  type Login {
    name: String
    email: String
    password: String
  }

  type Mutation{
    addBook(book: addBookInput!): Book
    deleteBook(id:ID!): [Book]
  }

  input addBookInput {
    title:String
    author:String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    users: [User]
    book(id: ID!): Book
    login: Login
  }
`;



 export default typeDefs