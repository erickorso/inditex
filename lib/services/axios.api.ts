import axios from "axios";

const isLocal = process.env.NODE_ENV === 'development';
const baseUrl = isLocal ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_VERCEL_URL
const API = axios.create({ baseURL: `${baseUrl}/api/podcasts`});

API.interceptors.request.use((req) => {
    return req;
});

export default API