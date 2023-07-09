import API from "./axios.api";

export const getPodcastsService = async (url = '') => {
    let urlString = ""
    const response = await API.get(urlString);
    return response.data;
}