import axios from "axios";
const API = axios.create({ baseURL: "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json" });

API.interceptors.request.use((req) => {
    return req;
});

export default API