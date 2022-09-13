import React from 'react'
import '../Login/login.css'
import { useState } from 'react'
import firebaseApp from '../../credenciales';
import { 
  getAuth, 
  //createUserWithEmailAndPassword, 
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
    //const usuarioFinal = await createUserWithEmailAndPassword( auth, email, password)
    //console.log(usuarioFinal)
    } else {
      signInWithEmailAndPassword(auth, email, password)
    }
    
  }
  console.log(password, email)
  return (<>
   { !user ? <>
      <h1> {estaRegistrandose ? "Registra't " : "Inicia sessió"}</h1>
      <form >
        <input type='text' placeholder='Email' onChange={ (e) => setEmail(e.target.value)}/>
        <input type='password' placeholder='Contraseña' onChange={ (e) => setPassword(e.target.value)} />
        <button type='button' value='Loguear' onClick={submitHandler}>
          {estaRegistrandose ? <Link to='/'>Registra\'t </Link>  : "Incia sessió"}
        </button>
      </form>

      <button type='button'  onClick={() => signInWithRedirect(auth, googleProvider)}>
        Accedeix amb Google
      </button>

      <button type='button' value='Loguear' onClick={() => setEstaRegistrandose(!estaRegistrandose)}>
        {estaRegistrandose ? "Ja tens compte? Inicia sessió." : '¿No tens compte?  Regístra\'t! '}
      </button>
      <button>
      <Link to='/'>Torna a l'inici</Link></button>
      </> :
     <Nav/>
    } 
    
    

    </>
    
  )
}
