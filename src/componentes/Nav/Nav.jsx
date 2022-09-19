import React from 'react'
import '../Nav/nav.css'
import { Home } from '../Home/Home'
import logo from '../../assets/img/logo.png'
import insta from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'
import { Link } from 'react-router-dom'

export const Nav = ({ user, weather}) => {

  return (<div className='container'>
    <div className='weather'>{weather}</div>
    <div className='div-content'>
      <div className="filter-nav">
        <Link to='/' >
        <img src={logo} alt='' className='logo' />
      </Link>
      <div className='div-redes'> <Home user={user}/></div>
      </div>
      
    </div>

    <div className='parent'>
      
      <Link to="/" className='div1 no-underline' >
        <p>Inici</p>
      </Link>
      <Link to="/quisom" className='div2 no-underline' >
        <p>Qui som</p>
      </Link>
      <Link to="/espectacles" className='div3 no-underline' >
      <p>Espectacles</p>
      </Link>
      <Link to="/contacte" className='div4 no-underline' >
      <p>Contacte amb nosaltres </p>
      </Link>     
      <div className='div5'>
        <a href='https://instagram.com/vaquetes_guinardo?igshid=YmMyMTA2M2Y='><img alt='' className='redes' src={insta} height='40' width='40' /></a>
        <a href='https://www.facebook.com/vaquetesdelguinardo'><img alt='' className='redes' src={facebook} height='40' width='40' /> </a>
      </div>
    </div>

    
  </div>
  )
}
