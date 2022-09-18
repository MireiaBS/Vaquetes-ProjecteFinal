import React from 'react'
import '../Login/login.css'
import { useState } from 'react'
import firebaseApp from '../../credenciales';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider
} from "firebase/auth"
import { Nav } from '../Nav/Nav';
import { Link } from 'react-router-dom';

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const Login = ({user}) => {

  const [estaRegistrandose, setEstaRegistrandose] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const submitHandler = async (e) => {
    
    if (estaRegistrandose) {
    const usuarioFinal = await createUserWithEmailAndPassword( auth, email, password)
    //console.log(usuarioFinal)
    } else {
      signInWithEmailAndPassword(auth, email, password)
    }
    
  }
  //console.log(password, email)
  return (<>
   { !user ? <div className='form-container'>
      <h1> {estaRegistrandose ? "Registra't " : "Inicia sessió"}</h1>
      <form className='form-items'>
        <input type='text' placeholder='Email' onChange={ (e) => setEmail(e.target.value)}/>
        <input type='password' placeholder='Contraseña' onChange={ (e) => setPassword(e.target.value)} />
        <button type='button' className='button-login' value='Loguear' onClick={submitHandler}>
          {estaRegistrandose ? "Registra't ": "Incia sessió"}
        </button>
      </form>
      
      <button type='button' className='button-login' onClick={() => signInWithRedirect(auth, googleProvider)}>
        Accedeix amb Google
      </button>

      <button type='button' value='Loguear' className='button-login' onClick={() => setEstaRegistrandose(!estaRegistrandose)}>
        {estaRegistrandose ? "Ja tens compte? Inicia sessió." : '¿No tens compte?  Regístra\'t! '}
      </button>
      <button className='button-login'>
      <Link  className='no-underline button-login' to='/'>Torna a l'inici</Link></button>
      </div> :
     <Nav/>
    } 
    
    

    </>
    
  )
}
