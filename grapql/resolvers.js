// Resolvers define how to fetch the types defined in your schema.

import db from "./db.js";

// This resolver retrieves books from the "books" array above.

const resolvers = {
    Query: {
      books: () =>  db.books,
      users:()=> db.users,
      book:(_,args) => db.books.find((book) => book.id == args.id),
      login:()=> 'some test'
    },
    Book:{
      user(parent){
        return db.users.find((user) => user.id == parent.id)
      }

    },

    Mutation:{
      deleteBook(_,args){
        // console.log(args.id)
        db.books = db.books.filter((book) => book.id !== args.id)
        return db.books
      },

      addBook(_,args){
        let books = {...args.book,id:5}
        db.books.push(books)
        return books
      }

    }
  };

export default resolvers