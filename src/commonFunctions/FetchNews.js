import {NEWS_API_KEY} from '@env';
import {HEADLINES_URL} from '@env';

export const FetchNews =  async() => {

    try{
        const response = await fetch(`${HEADLINES_URL}${NEWS_API_KEY}`);
        const news = await response.json();
        return news;
    }
    catch{ (err) =>{
        console.error(`Some error occured: ${err.message}`);
    }

    }
}