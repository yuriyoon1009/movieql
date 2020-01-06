import { movies, getById } from "./db";

const resolvers = {
  Query: {
    movies: () => movies,
    /** 
    * It's ok either (parent, args) or (_, args)
    */
    movie: (_, { id }) => getById(id)
  }
}

export default resolvers;