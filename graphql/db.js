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

let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 99
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const foundMovie = movies.find(movie => String(id) === movie.id); 
  return foundMovie;
}

export const deleteMovie = id => {
  const cleanedMovie = movies.filter(movie => String(id) !== movie.id)

  const boolean = movies.length > cleanedMovie.length

  if (boolean) {
    movies = cleanedMovie;
  }

  return boolean;
}



