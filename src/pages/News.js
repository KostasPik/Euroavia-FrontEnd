import React, {useState, useEffect, useContext} from 'react'
import NewsCard from '../components/NewsCard'
import axiosInstance  from '../api/api'
import LangContext from '../context/LangContext'
import Preloader from '../components/Preloader'
import InfiniteScroll from 'react-infinite-scroll-component'
import { announcements } from '../content/Announcements'
import { Helmet } from 'react-helmet-async'
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
    <>
    <Helmet>
    <title>{lang==='el'?'Ανακοινώσεις':'Announcements'} - EUROAVIA Athens</title>


            <meta property="description" content={lang==='el'?'Τι είναι η EUROAVIA; Η EUROAVIA είναι o Ευρωπαϊκός Σύλλογος Φοιτητών Αεροδιαστημικής που ιδρύθηκε το 1959 και έως σήμερα διαθέτει 45 παραρτήματα σε 20 χώρες της Ευρώπης, αριθμώντας πλέον περισσότερα από 2000 μέλη. Πρόκειται για ένα σύλλογο μη πολιτικό και μη κερδοσκοπικό που απαρτίζεται εξ ολοκλήρου από φοιτητές που τρέφουν ενδιαφέρον για την αεροδιαστημική αλλά Read more about Καλωσήρθατε στη EUROAVIA Athens!':
            'What is EUROAVIA? EUROAVIA is the European Association of Aerospace Students, founded in 1959 and present in 45 cities in 20 European countries, with a total of about 2000 members. It aims to stimulate contacts between students and the aerospace industry, offer opportunities of acquaintance and exchange among students from different countries and represent European Read more about Welcome to EUROAVIA Athens!'} data-rh="true"/>
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${lang==='el'?'Ανακοινώσεις':'Announcements'} - EUROAVIA Athens`} data-rh="true"/>
            <meta property="og:description" data-rh="true" content={lang==='el'?'Τι είναι η EUROAVIA; Η EUROAVIA είναι o Ευρωπαϊκός Σύλλογος Φοιτητών Αεροδιαστημικής που ιδρύθηκε το 1959 και έως σήμερα διαθέτει 45 παραρτήματα σε 20 χώρες της Ευρώπης, αριθμώντας πλέον περισσότερα από 2000 μέλη. Πρόκειται για ένα σύλλογο μη πολιτικό και μη κερδοσκοπικό που απαρτίζεται εξ ολοκλήρου από φοιτητές που τρέφουν ενδιαφέρον για την αεροδιαστημική αλλά Read more about Καλωσήρθατε στη EUROAVIA Athens!':
            'What is EUROAVIA? EUROAVIA is the European Association of Aerospace Students, founded in 1959 and present in 45 cities in 20 European countries, with a total of about 2000 members. It aims to stimulate contacts between students and the aerospace industry, offer opportunities of acquaintance and exchange among students from different countries and represent European Read more about Welcome to EUROAVIA Athens!'} />
            <meta property="og:image" content="http://euroavia.gr/wp-content/uploads/2018/04/euroavia_ath_logo.png" data-rh="true"/>
            <meta property="og:site_name" content="EUROAVIA Athens" data-rh="true"/>
            <meta property="og:image:alt" content="Euroavia Photo" data-rh="true"/>
            <meta name="twitter:card" content="summary_large_image" data-rh="true"/>
            <meta name="twitter:site" content="EUROAVIA Athens" data-rh="true"/>
            <meta name="twitter:title" content={`${lang==='el'?'Ανακοινώσεις':'Announcements'} - EUROAVIA Athens`} data-rh="true"/>
            <meta name="twitter:image" content="http://euroavia.gr/wp-content/uploads/2018/04/euroavia_ath_logo.png" data-rh="true"/>
            <title>{lang==='el'?'Ανακοινώσεις':'Announcements'} - EUROAVIA Athens</title>


  </Helmet>
    <div className='news'>
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
              <small>{lang === 'en'? "No more announcements!" : "Δεν υπάρχουν άλλες ανακοινώσεις!"}</small>
            }></InfiniteScroll>

    </div>
    </>
    
  )
}
