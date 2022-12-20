import React, {useState, useEffect, useContext} from 'react'
import NewsCard from '../components/NewsCard'
import SearchBar from '../components/SearchBar'
import EventsImage from '../images/animated-bg.png'
import axiosInstance  from '../api/api'
import LangContext from '../context/LangContext'
import Preloader from '../components/Preloader'
import InfiniteScroll from 'react-infinite-scroll-component'
import { announcements } from '../content/Announcements'
import './News.css'

export default function News() {


    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);
    const {lang} = useContext(LangContext);

    async function fetchPosts(updateAll) {
      const response = await axiosInstance.get(`/announcements/?page=${page}&lang=${lang}`)
      setHasNextPage(response?.data?.has_next_page);
      if (page === 1 || updateAll) 
      setPosts(response?.data?.data);
      else
      setPosts(posts => [...posts, ...response?.data?.data]);
      setLoading(false);
    }


  useEffect( () => {
    fetchPosts(false)
  }, [page])

  useEffect( () => {
    fetchPosts(true);
    setPage(1)
  },[lang])


    function unEscapeHTML(htmlStr) {
      htmlStr = htmlStr.replace(/&lt;/g , "<");	 
      htmlStr = htmlStr.replace(/&gt;/g , ">");     
      htmlStr = htmlStr.replace(/&quot;/g , "\"");  
      htmlStr = htmlStr.replace(/&#39;/g , "\'");   
      htmlStr = htmlStr.replace(/&amp;/g , "&");
      return htmlStr;
  }


  if (loading) return <Preloader />;
  return (
    
    <div class='news'>
        <div className='cool-title'>
            <h1>{announcements[lang].header}</h1>
        </div>



<div className='news-cards'>

    {
    posts && posts.map((post, index) => {
      return <NewsCard key={post?.id}
      
      title={lang === 'el' ? post?.greek_title : post?.english_title}
      slug={lang === 'el' ? post?.greek_slug : post?.english_slug}
      excerpt={lang === 'el' ? unEscapeHTML(post?.greek_body.replace( /(<([^>]+)>)/ig, '')) : unEscapeHTML( post?.english_body.replace( /(<([^>]+)>)/ig, ''))}
      imageURI={post?.mobile_thumbnail}
      date={post?.created_at}
      
      />
    })}
</div>

            <InfiniteScroll
            dataLength={posts.length}
            next={() => setPage(page => page+1)}
            hasMore={hasNextPage}
            loader={<h4>Loading...</h4>}
            endMessage={
              <h4>No more posts!</h4>
            }></InfiniteScroll>

    </div>
  )
}
