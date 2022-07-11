import axios from 'axios';

const URL = '';

// requesting data from the server
export const getNews = async () => {
    try {
        const ans = await axios.get(`${URL}/news`);
        console.log(ans);
        return ans.data.articles;

    } catch (error) {
        console.log('error while calling getNews API', error);
    }
}