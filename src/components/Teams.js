import React from 'react'
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
export default function Departments() {
  return (
    <section class="section departments">
        <h3 class="title">Teams</h3>
        <div class="departments">
            <div class="row1-container">
                <div class="card-box box-down cyan event-organising">
                  <h2>Event Organising</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris quam.</p>
                  {/* <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/> */}
                  <img src={EventOrganisingImage} alt='Event Organising Department' loading='lazy' />
                  <p class='team-category'>Marketing Team</p>
                  {/* <Link to="/departm/ents#event-organising" class="view-more">Περισσότερα</Link> */}
                </div>
            
                <div class="card-box red social-media">
                  <h2>Social Media</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris quam.</p>
                  <img src={SocialMediaImage} alt='Social Media Department' loading='lazy'/>
                  <p class='team-category'>Marketing Team</p>
                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                </div>
            
                <div class="card-box box-down blue creative-design">
                  <h2>Creative Design</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris quam.</p>
                  <img src={CreativeDesignImage} alt='Creative Design Department' loading='lazy'/>
                  <p class='team-category'>Marketing Team</p>
                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                </div>
              </div>

              <div class="row2-container">
                <div class="card-box orange fund-raising">
                  <h2>Fund Raising</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris quam.</p>
                  {/* <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/> */}
                  <img src={FundRaisingImage} alt='Fund Raising Department' loading='lazy' />
                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                  <p class='team-category'>Marketing Team</p>

                </div>
              </div>
{/* NEW */}
              <div class="row1-container reversed">
                <div class="card-box box-up cyan it">
                  <h2>IT</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris quam.</p>
                  {/* <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/> */}
                  <img src={ItImage} alt='It Department' loading='lazy' />
                  <p class='team-category'>Marketing Team</p>

                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                </div>
            
                <div class="card-box red structural">
                  <h2>Structural</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris quam.</p>
                  <img src={StructuralImage} alt='Structural Department' loading='lazy'/>
                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                  <p class='team-category'>Technical Team</p>

                </div>
                <div class="card-box box-up blue photography">
                  <h2>Video / Photography</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris quam.</p>
                  <img src={PhotographyImage} alt='Video / Photography Department' loading='lazy'/>
                  <p class='team-category'>Marketing Team</p>
                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                </div>
              </div>

              <div class="row1-container">
                <div class="card-box box-up cyan electrical-design">
                  <h2>Electrical Design</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris quam.</p>
                  <img src={ElectricalDesignImage} alt='Electrical Design Department' loading='lazy'/>
                  <p class='team-category'>Technical Team</p>
                </div>
            
                <div class="card-box red manufacturing">
                  <h2>Manufacturing</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris quam.</p>
                  {/* <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/> */}
                  <img src={ManufacturingImage} alt='Manufacturing Department' loading='lazy'/>
                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                  <p class='team-category'>Technical Team</p>


                </div>
            
                <div class="card-box box-up blue aerodynamics">
                  <h2>Aerodynamics</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris quam.</p>
                  {/* <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/> */}
                  <img src={AerodynamicsImage} alt='Aerodynamics Department' loading='lazy' />
                  <p class='team-category'>Technical Team</p>
                  {/* <a href="#" class="view-more">Περισσότερα</a> */}
                </div>
              </div>

              
              
        </div>
    </section>
  )
}
