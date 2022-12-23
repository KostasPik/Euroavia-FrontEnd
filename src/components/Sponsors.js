// import Swiper core and required modules
import { useEffect, useState, useContext } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import LangContext from '../context/LangContext'
import { activities  } from "../content/Landing"

import HaiImage from '../images/sponsors/HAI-colored.svg'
import BetaImage from '../images/sponsors/beta-optimized.svg'
import WurthImage from '../images/sponsors/wurth.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Sponsors.css'


export default function CardSection() {

  const [slidesPerView, setSlidesPerView] = useState(null);

  const {lang} = useContext(LangContext);

  useEffect( () => {
   
    let width = window.innerWidth;
    var tempSlidesPerView = 4;
    if (width < 1400) tempSlidesPerView = 3;
    if (width < 1200) tempSlidesPerView = 2;
    if (width < 600) tempSlidesPerView = 1;
   setSlidesPerView(tempSlidesPerView);

  }, [])

  return (
    <section class="section sponsors">
    <h3 class="title">Sponsors</h3>
    <div class="text">
       We deeply thank all of our sponsors for continuously supporting our team!
       
       
    <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={slidesPerView}
    pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    >
     <SwiperSlide>
        <div class="swiper-slide">
              <img src={HaiImage} alt='Hellenic Aerospace Industry Logo' loading='lazy' />
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="swiper-slide">
              <img src={BetaImage} alt='Beta Logo' loading='lazy' />
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="swiper-slide">
              <img src={WurthImage} alt='Wurth Logo' loading='lazy' />
            </div>
        </SwiperSlide>
     
    </Swiper>
    </div>
</section>
  )
}
