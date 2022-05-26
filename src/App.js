import axios from "axios";
import React, { Component }  from 'react';
import { useEffect, useState } from "react";
import "./App.css";
import Navdigitop from "./Components/Navdigitop";
import NewsContent from "./Components/NewsContent/NewsContent";
import apiKey from "./Data/Config"
import Footer from "./Components/Footer/Footer";
import categories from "./Data/Category";



function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(15); 
  


  //console.log(categories)
  const newsApi = async() => {
    try{
      const news = await axios.get(
        //'https://newsapi.org/v2/top-headlines?country=in&apiKey=0e8784b3c1fa42c09394a52b2251939c&category=health'
        //"https://newsapi.org/v2/top-headlines?country=in&apiKey=0e8784b3c1fa42c09394a52b2251939c&pageSize=${loadmore}"
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadmore}`
        );
        setNewsArray(news.data.articles);
        setNewsResults(news.data.totalResults);

    } catch(error){
      console.log(error);
    }
  };
  
  

  console.log(newsArray);
  useEffect(() => {
      newsApi();
    },[newsResults,category,loadmore]);

  
  return (
    <div className="App" id="#home">
      <Navdigitop setCategory= {setCategory}/>
      {newsResults && (
      <NewsContent 
      setLoadmore = {setLoadmore}
      loadmore= {loadmore}
      newsArray= {newsArray} 
      newsResults = {newsResults}
      />
      )}
      <Footer/>
    </div>
  );
}

export default App;
