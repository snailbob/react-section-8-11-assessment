import axios from "axios";

const newsApi = axios.create({
  baseURL: "http://newsapi.org/v2",
  headers: {
    Authorization: "7b946107a42e4af483a368201bb08814"
  }
});

export default newsApi;
