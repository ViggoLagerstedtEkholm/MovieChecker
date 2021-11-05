import axios from "axios";

//This method will be used to get all the movies filtered.
export const FetchMovies = async (filter) => {
    console.log(filter);
    const promise = axios.get(
`https://api.themoviedb.org/3/discover/movie?api_key=0a2046e3e90682387123e7a46f0d486b&language=en-US
    &include_video=false
    &include_adult=true
    &sort_by=${filter.Order}
    &page=${filter.Page}
    &vote_average.gte=${filter.MinRating}
    &vote_count.gte=${filter.MinRatingCount}`);
    return promise.then(response => response.data).catch((error) => Promise.reject(error));
}

//This method will be used to find all movies that matches the provided string.
export const FindMovieSearch = async (search) => {
    const promise = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0a2046e3e90682387123e7a46f0d486b&language=en-US&query=${search}&page=1&include_adult=true`);
    return promise.then(response => response.data).catch((error) => Promise.reject(error));
}

//This method will get the detailed information about a specific movie.
export const GetMovieInformation = async (movieID) => {
    const promise = axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=0a2046e3e90682387123e7a46f0d486b&language=en-US&append_to_response=videos`);
    return promise.then(response => response.data).catch((error) => Promise.reject(error));
}