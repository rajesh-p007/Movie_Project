
export class Genre {

  constructor({ id, name }) {
    this.id = id;
    this.name = name;
  }
}

export class Movie {

  constructor(data) {
    this.genreIds = data.genre_ids;
    this.id = data.id;
    this.popularity = data.popularity;
    this.posterPath = data.poster_path;
    this.title = data.title;
    this.voteAverage = data.vote_average;
  }
}
