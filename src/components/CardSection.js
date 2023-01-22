// import Swiper core and required modules
import { useEffect, useState, useContext } from 'react';
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import LangContext from '../context/LangContext'
import { activities  } from "../content/Landing"

import HermesV from '../images/landingPage/cards/hermesV-optimized.webp'
import CompanyVisits from '../images/landingPage/cards/company_visits-optimized.webp'
import Symposium from '../images/landingPage/cards/symposium-optimized.webp'
import Acc from '../images/landingPage/cards/acc-optimized.webp'
import Ekdiloseis from '../images/landingPage/cards/ekdiloseis-optimized.webp'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './CardSection.css'


export default function CardSection() {

  const [slidesPerView, setSlidesPerView] = useState(4);
  const {lang} = useContext(LangContext);

  function handleResize () {

    let width = window.innerWidth;
    var tempSlidesPerView = 4;
    if (width < 1400) tempSlidesPerView = 3;
    if (width < 1200) tempSlidesPerView = 2;
    if (width < 600) tempSlidesPerView = 1;
   setSlidesPerView(tempSlidesPerView);
  }

  useEffect( () => {
   handleResize();
    
    
   window.addEventListener('resize', handleResize)

  }, [])

  return (
    <section className="section dark activities">
    <h3 className="title">{activities[lang].header}</h3>
    <div className="text">
       <p>{activities[lang].caption}</p>
       
       
    <Swiper
    modules={[Pagination, Navigation]}
    spaceBetween={30}
    slidesPerView={slidesPerView}
    navigation
    pagination={{ clickable: true }}
    initialSlide={1}
    loop={true}
    loopedSlides={50}
    // scrollbar={{ draggable: true }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide>
        <div className="swiper-slide">
              <img src={HermesV} alt='Hermes V Drone' loading='lazy' />
              <p className='swiper-text'>
                {lang ==='el' ? 
                "Η κατασκευή και μελέτη ενός μη επανδρωμένου, τηλεκατευθυνόμενου αεροσκάφους με άνοιγμα φτερών περίπου 4.5m σύμφωνα με τις προδιαγραφές του Air Cargo Challenge.": 
                "The construction of an Unmanned Aerial Vehicle (UAV) with a wingspan of 4.5 meters according to the regulations of Air Cargo Challenge."
                }
              </p>
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="swiper-slide">
              <img src={CompanyVisits} alt='Company Visits' loading='lazy' />
              <p className='swiper-text'>
                {lang ==='el' ? 
                "Η διοργάνωση ξεναγήσεων και εκπαιδευτικών εκδρομών σε εταιρίες και βιομηχανίες οι οποίες δραστηριοποιούνται στους τομείς της Αεροναυπηγικής και της Αεροδιαστημικής.": 
                "The organization of visits and guided tours to the facilities of companies that operate in the field of Aerospace and Aeronautics Engineering."
                }
              </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide">
              <img src={Symposium} alt='Satellites Symposium' loading='lazy' />
              <p className='swiper-text'>
                {lang ==='el' ? 
                "Η διοργάνωση διεθνών εκπαιδευτικών συμποσίων και συνεδρίων στα οποία δικαίωμα συμμετοχής έχουν όλα τα μέλη του ευρωπαϊκού συλλόγου EUROAVIA.": 
                "The organization of international events and symposiums with the participation of members of EUROAVIA from all over Europe."
                }
              </p>
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="swiper-slide">
              <img src={Acc} alt='Air Cargo Challenge' loading='lazy' />
              <p className='swiper-text'>
                {lang ==='el' ? 
                "Η εκπροσώπηση του συλλόγου σε διεθνή εκπαιδευτικά συμπόσια και συνέδρια σκοπός των οποίων είναι η διασύνδεση μεταξύ των μελών της Euroavia και η γνωριμία με την ευρωπαϊκή αεροδιαστημική βιομηχανία.": 
                "The presence of the association in international symposiums and events in order to interact and communicate with members of other Affiliated Societies of EUROAVIA and learn more about the aerospace industry in Europe."
                }
              </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="swiper-slide">
              <img src={Ekdiloseis} alt='EUROAVIA Athens Events' loading='lazy' />
              <p className='swiper-text'>
                {lang ==='el' ? 
                "Η συμμετοχή σε εκδηλώσεις επιστημονικού ενδιαφέροντος για την ενημέρωση του κοινού για τις δραστηριότητες του συλλόγου.": 
                "The participation in local scientific events in which we inform the general public about our organization and its activities."
                }
              </p>
          </div>
        </SwiperSlide>



     {/* {activities[lang].body.map((activity, index) => {
        return  <SwiperSlide key={index}>
        <div class="swiper-slide">
              <img src={BackgroundImage} alt='Euroavia Athens activity' loading='lazy' />
              <p class='swiper-text'>{activity.caption}</p>
          </div>
        </SwiperSlide>
     })} */}
     
    </Swiper>
    </div>
</section>
  )
}
