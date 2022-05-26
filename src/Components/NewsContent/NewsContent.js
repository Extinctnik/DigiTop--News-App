import { Container } from '@mui/material';
import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Search from '../Search/Search';
import "./NewsContent.css";


const NewsContent = ({newsArray , loadmore , setLoadmore , newsResults}) => {
  return (
    <Container maxWidth="md">
        <div className="content">
            <div className="downloadMessage">
              <span className="downloadText">
                For the best experience use Digitop app on your Smartphone.

              </span>
              <img 
                src="https://assets.inshorts.com/website_assets/images/playstore.png" 
                alt="Play store" 
                height="80%"
              />
              <img 
                src="https://assets.inshorts.com/website_assets/images/appstore.png" 
                alt="app store" 
                height="80%"
              />
 
            </div> 
           
            <Search />
            
            
            
            {
              newsArray.map((newsItem) => (
                <NewsCard newsItem = {newsItem} key = {newsItem.title} />
              ))
            }
            {loadmore <= newsResults && (
              <>
                <hr/>
                <button className='loadMore' onClick={() => setLoadmore(loadmore + 10) }>
                  View More
                </button> 
              </>
            )}
           
        </div>
    </Container>
  );
}; 

export default NewsContent;