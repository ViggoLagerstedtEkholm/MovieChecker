import axios from "axios";

//This method will be used to get all the movies filtered.
export const FetchMovies = async (filter) => {
    console.log(filter);

    let url = new URL("https://api.themoviedb.org/3/discover/movie?");
    url.searchParams.append("api_key", "0a2046e3e90682387123e7a46f0d486b");
    url.searchParams.append("language", "en-US");
    url.searchParams.append("include_video", "false");
    url.searchParams.append("include_adult", "true");
    url.searchParams.append("sort_by", filter.Order);
    url.searchParams.append("page", filter.Page);
    url.searchParams.append("vote_average.gte", filter.MinRating);
    url.searchParams.append("vote_count.gte", filter.MinRatingCount);

    const promise = axios.get(url.toString());
    return promise.then(response => response.data).catch((error) => Promise.reject(error));
}

//This method will be used to find all movies that matches the provided string.
export const FindMovieSearch = async (search) => {
    let url = new URL("https://api.themoviedb.org/3/search/movie?");
    url.searchParams.append("api_key", "0a2046e3e90682387123e7a46f0d486b");
    url.searchParams.append("language", "en-US");
    url.searchParams.append("query", search);
    url.searchParams.append("page", "1");
    url.searchParams.append("include_adult", "true");

    const promise = axios.get(url.toString());
    return promise.then(response => response.data).catch((error) => Promise.reject(error));
}

//This method will get the detailed information about a specific movie.
export const GetMovieInformation = async (movieID) => {
    let url = new URL(`https://api.themoviedb.org/3/movie/${movieID}?`);
    url.searchParams.append("api_key", "0a2046e3e90682387123e7a46f0d486b");
    url.searchParams.append("language", "en-US");
    url.searchParams.append("append_to_response", "videos");

    const promise = axios.get(url.toString());
    return promise.then(response => response.data).catch((error) => Promise.reject(error));
}