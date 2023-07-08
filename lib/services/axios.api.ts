import axios from "axios";
const API = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

API.interceptors.request.use((req) => {
    return req;
});

export default API