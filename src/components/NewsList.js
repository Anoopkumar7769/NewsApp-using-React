import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Axios from 'axios';

const NewsList = () => {
    const[articles,setArticles] = useState([]);
    
useEffect(() =>{
    const getArticles = async () => {
        const res = await Axios.get(
            "https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=2c1d7162acda44ccbc6b17a847faccfa");
        setArticles(res.data.articles);
        console.log(res);
    };
    getArticles();
},[]);
    return (
        <div>
           {articles.map(({ title, description, url, urlToImage }) => (
               <NewsItem 
                 title={title} 
                 description={description} 
                 url={url} 
                 urlToImage={urlToImage}
                />
           ))} 
        </div>
    );
};

export default NewsList;
