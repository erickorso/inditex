import axios from "axios";
import ROUTES from "../constants/routes.ctte";
import { isLocal } from "../helpers/functions";

const baseUrl = isLocal() ? ROUTES.baseUrl.local : ''
const API = axios.create({ baseURL: `${baseUrl}/api${ROUTES.router.podcast}`});

API.interceptors.request.use((req) => {
    return req;
});

export default API