import { people, getById } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    /** 
    * It's ok either (parent, args) or (_, args)
    */
    person: (_, { id }) => getById(id)
  }
}

export default resolvers;