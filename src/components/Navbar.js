import React,{useState, useContext} from 'react';
import LangContext from '../context/LangContext';
import {NavLink, Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import greekFlag from '../images/greek-flag.svg'
import americanFlag from '../images/american-flag.svg'
import {EVENTS} from '../content/Event'
import './Navbar.css';
import { Helmet } from 'react-helmet-async';

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
                    <NavLink exact activeClassName='is-active' to="/">
                        <img src={logo} alt="logo" className='navbar-logo' /> 
                    </NavLink>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <i class="fa-solid fa-chevron-up"></i>   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <i class="fa fa-align-justify" aria-hidden="true"></i>   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}>{lang == 'el'? 'Αρχική' : 'Home'}</NavLink> 
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/teams`}>{lang == 'el'? 'Ομάδες' : 'Teams'}</NavLink> </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/news`}>{lang == 'el'? 'Ανακοινώσεις' : 'Announcements'}</NavLink> </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#">{lang == 'el'? 'Δραστηριότητες' : 'Projects'}    <i class="fa-solid fa-chevron-down"></i> </Link>
                        <ul className={boxClassSubMenu.join(' ')} >
                            {EVENTS.map((event) => {
                                // return <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`event/${event[lang]}/`}>{event.name}</NavLink></li>
                                 return <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/event/${event.slug}/`}>{event.name}</NavLink></li>

                            }) }
                            {/* <li><NavLink onClick={toggleClass} activeClassName='is-active'  to={`/acc`}>Air Cargo Challenge</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/satelites-symposium`}>Satellites Symposium</NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/company-visits`}>Company Visits</NavLink></li> */}
                        </ul>
                    </li>
                    <li className='menu-item flag'>
                        {  lang === 'el' ? 
                            <Link onClick={() => {toggleClass(); setLanguage('en');}}><img src={americanFlag} style={{width:17}} /></Link>
                            :
                            <Link onClick={() => {toggleClass(); setLanguage('el');}}><img src={greekFlag} style={{width:17}} /></Link>
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