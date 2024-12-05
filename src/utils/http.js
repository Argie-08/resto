import axios from "axios";

function useApi() {
  return axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
      "x-rapidapi-key": "970a037d62msh81bca8af47991bbp1b28aejsn8b7982085636",
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    },
  });
}

export default useApi;
