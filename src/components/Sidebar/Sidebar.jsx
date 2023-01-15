import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
function Sidebar() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} className='logo__image' alt="logo-app"/>
            <img src={LogoSubtitle} className='logo__image logo__image--sub'  alt="slodoban"/>
        </Link>
        <nav className='nav-bar__container'>
            <NavLink exact="true" activeclassname="active" className='' to="/">
                <FontAwesomeIcon className='icon' icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='about-link'to="/about">
                <FontAwesomeIcon className='icon' icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link'to="/contact">
                <FontAwesomeIcon className='icon' icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a 
                    href="https://www.linkedin.com/in/diego-mejia-30987a19a/"
                    rel='noreferrer'
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a 
                    href="https://github.com/diegoamero"
                    rel='noreferrer'
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            
        </ul>
    </div>
  )
}

export default Sidebar