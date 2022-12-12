// import Swiper core and required modules
import { useEffect, useState, useContext } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import BackgroundImage from '../images/fancyborder-optimized.webp'
import LangContext from '../context/LangContext'
import { activities  } from "../content/Landing"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './CardSection.css'


export default function CardSection() {

  const [slidesPerView, setSlidesPerView] = useState(null);

  const {lang} = useContext(LangContext);

  useEffect( () => {
   
    let width = window.innerWidth;
    var tempSlidesPerView = 4;
    console.log(width)
    if (width < 1400) tempSlidesPerView = 3;
    if (width < 1200) tempSlidesPerView = 2;
    if (width < 600) tempSlidesPerView = 1;
   setSlidesPerView(tempSlidesPerView);

  }, [])

  return (
    <section class="section dark activities">
    <h3 class="title">{activities[lang].header}</h3>
    <div class="text">
       <p>{activities[lang].caption}</p>
       
       
    <Swiper
    modules={[Pagination, Navigation]}
    spaceBetween={30}
    slidesPerView={slidesPerView}
    navigation
    pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    >
     {activities[lang].body.map((activity) => {
        return  <SwiperSlide>
        <div class="swiper-slide">
              <img src={BackgroundImage} alt='Euroavia Athens activity' loading='lazy' />
              <p class='swiper-text'>{activity.caption}</p>
            </div>
        </SwiperSlide>
     })}
     
    </Swiper>
    </div>
</section>
  )
}
