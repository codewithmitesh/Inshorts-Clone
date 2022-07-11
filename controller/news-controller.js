// import News from '../model/news.js';
import axios from 'axios';

const url = `https://newsapi.org/v2/everything?q=Apple&from=2022-07-08&sortBy=popularity&apiKey=356800ee65934fd3b1b6e9b871d7388d`;

// this is call back function and acts as an api for the frontend
export const getNews = async (request, response) => {
    try {
        const respon = await axios.get(url);
        // console.log(respon.data);
        response.send(respon.data);

    } catch (error) {
        console.log(error);
        return response.status(500).json(error);
    }
}

// const fetchNews = async () => {
//     try {
//         return await axios.get(url);
//     } catch (error) {
//         console.error(error);
//     };
// }