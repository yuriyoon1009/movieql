export let movies = [
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
  const foundMovie = movies.find(movie => id === movie.id); 
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

/* export const addMovie = (name, score) => {

} */

