import React from 'react'
import '../Home/home.css'
import firebaseApp from '../../credenciales'
import { getAuth, signOut } from "firebase/auth"
import userImg from '../../assets/img/user.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const auth = getAuth(firebaseApp)

export const Home = ({ user }) => {

  const [sessioTancada, setSessioTancada] = useState(false)

  const changeStates = () => {
    signOut(auth)
    setSessioTancada(prev => !prev)
  }

  return (<>
    {user ? 
      <div className='div-login'>

        <div className='login-text'>
          <button className='p-hello no-underline'>
            <Link to='/registre' >Iniciar sessió</Link></button>
        </div>
      </div>
     : sessioTancada ?
      <div className='div-login'>
              <div className='login-text'>
                <button className='p-hello' onClick={changeStates}>
                <Link to='/registre'>Iniciar sessió</Link></button>
              </div>
            </div>
            :
            <div className='div-login'>
              <img alt='' src={userImg} className='login-img' />
              <div className='login-text'>
                <p className='p-hello'> Hola de nou!   </p>
                <button className='p-hello' onClick={changeStates}>
                  <Link to='/'> |
                    Tancar sessió
                  </Link></button>
              </div>
            </div>
      }
  </>
  )
}
