import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import SocialMediaImage from '../images/department_icons/social-media-optimized.webp'
import CreativeDesignImage from '../images/department_icons/creative-design-optimized.webp'
import ElectricalDesignImage from '../images/department_icons/electrical-design-optimized.webp'
import PhotographyImage from '../images/department_icons/photography-optimized.webp'
import AerodynamicsImage from '../images/department_icons/aerodynamics-optimized.webp'
import StructuralImage from '../images/department_icons/structural-optimized.webp'
import EventOrganisingImage from '../images/department_icons/event-organising-optimized.webp'
import FundRaisingImage from '../images/department_icons/fund-raising-optimized.webp'
import ManufacturingImage from '../images/department_icons/manufacturing-optimized.webp'
import ItImage from '../images/department_icons/it-optimized.webp'
import './Teams.css'
import LangContext from '../context/LangContext'
export default function Departments() {

  const {lang} = useContext(LangContext);
  return (
    <section className="section departments">
        <h3 className="title">{lang==='el'?'Ομάδες' : 'Teams' }</h3>
        <div className="departments">
            <div className="row1-container">
                <div className="card-box box-down cyan event-organising">
                  <h2>Event Organising</h2>
                  <p>{lang==='el' ? 'Οργάνωση εκδηλώσεων που γνωστοποιούν τη δράση της ομάδας και προσελκύουν νέα μέλη με κοινά ενδιαφέροντα.' : 
                  'Organises events that promote the team’s goals and progress and attract new members with the same passion for aviation.'}</p>
                  {/* <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/> */}
                  <img src={EventOrganisingImage} alt='Event Organising Department' loading='lazy' />
                  <p className='team-category'>Marketing Team</p>
                  {/* <Link to="/departm/ents#event-organising" class="view-more">Περισσότερα</Link> */}
                </div>
            
                <div className="card-box red social-media">
                  <h2>Social Media</h2>
                  <p>{lang === 'el' ? 'Παρουσίαση της ομάδας, των δράσεων της, καθώς και των επιτευγμάτων της στον κόσμο των social media.' : 
                  'Presents its members, its actions, its achievements as well as the team itself to the world of social media.' }</p>
                  <img src={SocialMediaImage} alt='Social Media Department' loading='lazy'/>
                  <p className='team-category'>Marketing Team</p>
                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                </div>
            
                <div className="card-box box-down blue creative-design">
                  <h2>Creative Design</h2>
                  <p>{lang==='el' ? 'Δημιουργία οπτικού ακουστικού υλικού για την προώθηση της ομάδας μας και των δραστηριοτήτων της.' : 
                  'Creates audio-visual material in order to promote our team and its activities.' }</p>
                  <img src={CreativeDesignImage} alt='Creative Design Department' loading='lazy'/>
                  <p className='team-category'>Marketing Team</p>
                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                </div>
              </div>

              <div className="row2-container">
                <div className="card-box orange fund-raising">
                  <h2>Fund Raising</h2>
                  <p>{lang === 'el' ? 'Εξασφάλιση οικονομικών και υλικοτεχνικών πόρων για την ομάδα.' : 
                  'Εnsures that the team is equipped with financial or material/technical resources.'}</p>
                  {/* <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/> */}
                  <img src={FundRaisingImage} alt='Fund Raising Department' loading='lazy' />
                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                  <p className='team-category'>Marketing Team</p>

                </div>
              </div>
{/* NEW */}
              <div className="row1-container reversed">
                <div className="card-box box-up cyan it">
                  <h2>IT</h2>
                  <p>{lang === 'el' ? 'Υποστήριξη των ηλεκτρονικών συστημάτων της ομάδας, αλλά και στην διαχείριση της ιστοσελίδας της.' : 
                  "Εnsures the smooth operation of the team's electronic systems, as well as the maintenance of its website."}</p>
                  {/* <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/> */}
                  <img src={ItImage} alt='It Department' loading='lazy' />
                  <p className='team-category'>Marketing Team</p>

                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                </div>
            
                <div className="card-box red structural">
                  <h2>Structural Analysis</h2>
                  <p>{lang === 'el' ? 'Σχεδίαση του αεροσκάφους ώστε να αντέξει όλες τις δομικές καταπονήσεις που θα υποστεί στην αποστολή του.' : 
                  'Designs the underlying structure of the aircraft to be able to withstand all the loads to which it will be subjected during its mission.'}</p>
                  <img src={StructuralImage} alt='Structural Department' loading='lazy'/>
                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                  <p className='team-category'>Technical Team</p>

                </div>
                <div className="card-box box-up blue photography">
                  <h2>Video/Photography</h2>
                  <p>{lang === 'el' ? 'Συλλογή και επεξεργασία οπτικοακουστικού υλικού από όλες τις δραστηριότητες της ομάδας.' : 
                  "Collects and edits the audio-visual material from all the group's activities."}</p>
                  <img src={PhotographyImage} alt='Video / Photography Department' loading='lazy'/>
                  <p className='team-category'>Marketing Team</p>
                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                </div>
              </div>

              <div className="row1-container">
                <div className="card-box box-up cyan electrical-design">
                  <h2>Electrical Design</h2>
                  <p>{lang==='el'?"Σχεδίαση και ανάπτυξη των ηλεκτρονικών συστημάτων με τα οποία είναι εφοδιασμένο το αεροσκάφος.":
                  "Design and development of all electronic systems that the aircraft is equipped with."}</p>
                  <img src={ElectricalDesignImage} alt='Electrical Design Department' loading='lazy'/>
                  <p className='team-category'>Technical Team</p>
                </div>
            
                <div className="card-box red manufacturing">
                  <h2>Manufacturing</h2>
                  <p>{lang === 'el' ? 'Μελέτη και χρήση σύνθετων υλικών, σχεδίαση και κατασκευή όλων των επιμέρους μηχανισμών.' : 
                  'Responsible for the analysis and use of composite materials, as well as the design and building of all the parts and mechanisms.'}</p>
                  {/* <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/> */}
                  <img src={ManufacturingImage} alt='Manufacturing Department' loading='lazy'/>
                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                  <p className='team-category'>Technical Team</p>


                </div>
            
                <div className="card-box box-up blue aerodynamics">
                  <h2>Aerodynamics</h2>
                  <p>{lang === 'el' ? 'Σχεδίαση, μοντελοποίηση και μελέτη του αεροσκάφους ως ολοκληρωμένο σύστημα.' : 
                  'Design, modeling, and analysis of the aircraft as an integrated system.'}</p>
                  {/* <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/> */}
                  <img src={AerodynamicsImage} alt='Aerodynamics Department' loading='lazy' />
                  <p className='team-category'>Technical Team</p>
                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                </div>
              </div>

              
              
        </div>
    </section>
  )
}
