const yuri = {
  name: "yuri",
  gender: "female",
  hobby: "playing yoga",
  age: 3
}

const resolvers = {
  Query: {
    /* name: () => "yuriyoon" */
    person: () => yuri
  }
}

export default resolvers;