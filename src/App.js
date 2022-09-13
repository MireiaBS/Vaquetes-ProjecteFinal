import React from 'react'
import { useState } from 'react';
import "./css/css.css"
import firebaseApp from './credenciales';
import {getAuth, onAuthStateChanged} from "firebase/auth"
import { BrowserRouter } from "react-router-dom";
import AllComponents from '../src/componentes/allComponents/AllComponents'

const auth = getAuth(firebaseApp);

function App() {
  
  
  const [user, setUser] = useState(false)
  
  onAuthStateChanged(auth, (usuarioFirebase) => {

    if(usuarioFirebase) {
      // codigo para sesion iniciada
      setUser(usuarioFirebase)
    } else {
      // codigo en caso de que no haya sesion iniciada
      setUser(null)
    }
  })
  
  
  return <BrowserRouter>
  
    <AllComponents user={user}/>  
  </BrowserRouter>
}

export default App;
