import API from "./axios.api";

export const getPodcastsService = async (url = '') => {
    let urlString = ""
    const response = await API.get(urlString);
    return response.data;
}

export async function getPodcasts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    
    console.log({res: res.json()})

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}