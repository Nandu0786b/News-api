import React,{useEffect,useState} from 'react';

import NewsItem from './NewsItem';
import Spinner from './Spinner';
import sample from './sample.json'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";




const News = (props)=> {
  const[articles,setarticles]=useState([])
  const[loading,setloading]=useState(true)
  const[page,setpage]=useState(1)
  const[totalResults,settotalResults]=useState(0)
  const capitalizeFirstLetter=(string)=> {
    return  string.charAt(0).toUpperCase() + string.slice(1);
  }

 
    
  const update=async ()=>{
    props.setProgress(20);
    console.log('from props',props.apikey,props.category,props.pageSize)
    try{let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
    // let data = await fetch(url);
    let data =await fetch(url, {
      headers: {
        'Referer': 'http://localhost'
      }
    });
    props.setProgress(50);
    let parseData=await data.json()
    setarticles(parseData.articles)
    settotalResults(parseData.totalResults)
    setloading(false)
    document.title=`${capitalizeFirstLetter(props.category)}-News Monkey`
    props.setProgress(100);
  }
    catch{
      return sample
    }
  }
  const fetchMoreData =async () => {
    
    try{let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`
    setpage(page+1)
    let data =await fetch(url, {
      headers: {
        'Referer': 'http://localhost'
      }
    });
  
    // let data =await fetch(url);
    let parseData=await data.json()
    setarticles(articles.concat(parseData.articles))
    setloading(false)
    }
    catch{
      return sample
    }
  }
  useEffect(() => {
    update()
  },[])
    return (
      
      <>
        <h1 className='text-center' hidden={loading} style={{margin:'35px 0px',marginTop:'90px'}}>{capitalizeFirstLetter(props.category)}-Top Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          
          loader={<Spinner/>}
          
        >
         <div className="container">
         <div className="row">
        { articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem  title={`${element.title? element.title:""}`} description={`${element.description?element.description:""}`} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
            
        })
        }
        
        
        </div> 
         </div>
        </InfiniteScroll>
      </>
    )
  
}

export default News
News.defaultProps={
  country:'in',
  pageSize:8,
  category:'general',
  // apiKey:'xx'
}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}

