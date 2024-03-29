import React,{useState, useContext} from 'react';
import LangContext from '../context/LangContext';
import {NavLink, Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import greekFlag from '../images/greek-flag.svg'
import americanFlag from '../images/american-flag.svg'
import {EVENTS} from '../content/Event'
import './Navbar.css';
import { Helmet } from 'react-helmet-async';
import ChevronUp from '../images/navbar/chevron-up-solid.svg'
import AlignJustify from '../images/navbar/align-justify-solid.svg'
import ChevronDown from '../images/navbar/chevron-down-solid.svg'

const Navbarmenu = () => {


    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);

    const { lang, setLanguage } = useContext(LangContext);

    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    } else {
        boxClassSubMenu.push('');
    }



    return (
        <>
        <Helmet>
            <html lang={lang}/>  
            {lang === 'el' && <>
            <meta property="og:locale" content="el_GR" data-rh="true"/>
            <meta property="og:locale:alternate" content="en_US" data-rh="true"/>         
            </>}

            {lang === 'en' && <>
            <meta property="og:locale" content="en_US" data-rh="true"/>
            <meta property="og:locale:alternate" content="el_GR" data-rh="true"/>         
            </>}
            
        </Helmet>



    <nav className="header__middle">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to={`/?lang=${lang}`}>
                        <img src={logo} alt="EUROAVIA Athens" className='navbar-logo' /> 
                    </NavLink>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button"  onClick={toggleClass} > 
                        {/* <i class="fa-solid fa-chevron-up"></i>    */}
                        <img src={ChevronUp} width="16" height="14" alt='Chevron Up'/>
                        </span>
                    </> : <> 
                        <span className="menubar__button"  onClick={toggleClass} > 
                        {/* <i class="fa fa-align-justify" aria-hidden="true"></i>    */}
                        <img src={AlignJustify} width="16" height="16" alt='Align Justify' />

                        </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/?lang=${lang}`}>{lang == 'el'? 'Αρχική' : 'Home'}</NavLink> 
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/teams?lang=${lang}`}>{lang == 'el'? 'Ομάδες' : 'Teams'}</NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/news?lang=${lang}`}>{lang == 'el'? 'Ανακοινώσεις' : 'Announcements'}</NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/sponsors?lang=${lang}`}>{lang == 'el'? 'Χορηγοί' : 'Sponsors'}</NavLink> </li>
                    <li className='menu-item '><NavLink onClick={toggleClass} activeClassName='is-active' to={`/atlas?lang=${lang}`}>ATLAS</NavLink></li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#">{lang == 'el'? 'Δραστηριότητες' : 'Projects'}    
                    {/* <i class="fa-solid fa-chevron-down"></i>  */}
                        <img src={ChevronDown} alt='Chevron Down' width="16" height="16"/>
                    </Link>
                        <ul className={boxClassSubMenu.join(' ')} >
                            {EVENTS.map((event, index) => {
                                // return <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`event/${event[lang]}/`}>{event.name}</NavLink></li>
                                 return <li key={index}><NavLink onClick={toggleClass} activeClassName='is-active' to={`/event/${event.slug}?lang=${lang}`}>{event.name}</NavLink></li>

                            }) }
                            {/* <li><NavLink onClick={toggleClass} activeClassName='is-active'  to={`/acc`}>Air Cargo Challenge</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/satelites-symposium`}>Satellites Symposium</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/company-visits`}>Company Visits</NavLink></li> */}
                        </ul>
                    </li>
                    <li className="menu-item " ><a href="https://fowo.euroavia.gr/">Fowo 2023</a></li>
                    <li className='menu-item flag'>
                        {  lang === 'el' ? 
                            <Link hrefLang="en" rel="alternate" href="?lang=en"onClick={() => {toggleClass(); setLanguage('en');}}><img src={americanFlag} style={{width:17}} /></Link>
                            :
                            <Link hrefLang="el" rel="alternate" href="?lang=el"onClick={() => {toggleClass(); setLanguage('el');}}><img src={greekFlag} style={{width:17}} /></Link>
                        }
                    </li>
                    </ul>
                    </nav>     
                </div>
    </nav>
    </>
    )
}

export default Navbarmenu