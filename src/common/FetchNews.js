import {NEWS_API_KEY} from '@env';

export const FetchNews =  async(props) => {

    try{
        const response = await fetch(props+NEWS_API_KEY);
        const news = await response.json();
        return news;
    }
    catch{ (err) =>
        console.error(`Some error occured: ${err.message}`);
    }
}