export const checkMovie = (movie, movies) => {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].title === movie.title) {
      return true;
    }
  }
  return false;
};
