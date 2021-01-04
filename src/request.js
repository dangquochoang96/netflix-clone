const API_KEY = "0aecc06bb4fadb06b5f071fef0c2ce6d"
const lang = "language=vi"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&${lang}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&${lang}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&${lang}`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&${lang}`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&${lang}`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&${lang}`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&${lang}`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&${lang}`,
}

export default requests