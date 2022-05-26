import { Container } from '@mui/material';
import React, { Component }  from 'react';
import NewsCard from '../NewsCard/NewsCard';

import "./NewsContent.css";
import {Button, Form, Input} from 'reactstrap';
import { useEffect, useState } from "react";


const NewsContent = ({newsArray , loadmore , setLoadmore , newsResults}) => {
const [searchTopic, setsearchTopic] = useState("");
const [date, setdate] = useState("");

 const handleChange =  (event)  =>
  {  
    setsearchTopic(event.target.value);
  };

  
 const handleChangeD =  (event)  =>
  {   
    // console.log(this.state.date);
    setdate(event.target.value);
  };
 
 const handleSubmit = event => {
    event.preventDefault();
    
  };

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
           

            <div className="search">
              <p className="text-center font-italic position-static font-weight-bold" >Search any topic, news, blog....</p>
              <Form onSubmit={handleSubmit} inline style={{marginLeft:'auto', marginRight:'auto'}}>
              <Input className="topHeadlines"
                type="text" value={searchTopic}
                onChange={handleChange} placeholder="Search Here"/>

              <Input className="topHeadlines"
                type="date" min="1970-01-01" name="datetime" 
                placeholder="Published Till Date" value={date}
                onChange={handleChangeD} />

              <Button className="topHeadlines" type="submit" color="secondary">Search</Button>
     
              </Form>
            </div>
            
            
            
            {
              newsArray.filter((newsArray)=>{
                  if(searchTopic =="" && date==""){
                    return newsArray
                  }else if(newsArray.title.toLowerCase().includes(searchTopic.toLowerCase()) && date ==""){
                    return newsArray
                  }
              }).map((newsItem) => (
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