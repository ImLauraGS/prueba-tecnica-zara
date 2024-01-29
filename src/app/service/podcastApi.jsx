import axios from "axios";


axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.post['Accept'] = "application/json";

export const podcastApi = () => {
    const baseUrl = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    const CorsURL ='https://api.allorigins.win/get?url='


    const getAll = async () => {
        const response = await axios.get(baseUrl)
        return response 
    }

    
  const getPodcastById = async (id) => {
    const podcastUrl = `${CorsURL}${encodeURIComponent('https://itunes.apple.com/lookup?id=${id}')}`;
    const response = await axios.get(podcastUrl);
    return response;

  };
    return {

        getAll,
        getPodcastById
    }
    
}
