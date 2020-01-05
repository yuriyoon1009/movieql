export const people = [{
    id: 1,
    name: "yuri",
    gender: "female",
    hobby: "playing yoga",
    age: 3
  },
  {
    id: 2,
    name: "Deal",
    gender: "female",
    hobby: "playing yoga",
    age: 18
  },
  {
    id: 3,
    name: "Jd",
    gender: "man",
    hobby: "cooking",
    age: 20
  },
  {
    id: 4,
    name: "Fly",
    gender: "man",
    hobby: "cooking",
    age: 3
  },
  {
    id: 5,
    name: "nodemon",
    gender: "female",
    hobby: "sleeping",
    age: 3
  }
]

export const getById = id => {
  const foundPeople = people.find(person => id === person.id); 
  return foundPeople;
}