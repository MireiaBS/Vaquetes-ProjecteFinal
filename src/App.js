import React from 'react'
import { useState, useEffect } from 'react';
import "./css/css.css"
import firebaseApp from './credenciales';
import {getAuth, onAuthStateChanged} from "firebase/auth"
import { BrowserRouter } from "react-router-dom";
import AllComponents from '../src/componentes/allComponents/AllComponents'

const auth = getAuth(firebaseApp);

function App() {
  
  useEffect(() => {
   getWeather()
  }, [])
  
  
  const [user, setUser] = useState(false)
  
  onAuthStateChanged(auth, (usuarioFirebase) => {

    if(usuarioFirebase) {
      // codigo para sesion iniciada
      setUser(usuarioFirebase)
      console.log('Esta iniciat:',user)
    } else {
      // codigo en caso de que no haya sesion iniciada
      setUser(null)
      console.log('No està iniciat:',user)
    }
  })

  const [weather, setWeather] = useState(null)
  const API_KEY = 'c3f3d515379c80ce2b836433309e157c';
  const API_URL_WEATHER =
  "http://api.openweathermap.org/data/2.5/weather?lat=41.3870&lon=2.16992&appid=" +
  API_KEY +
  "&units=metric";

  const getWeather = () => {
    fetch(API_URL_WEATHER, {
      method: "get",
      headers: {
        Accept: "application/JSON",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setWeather("BARCELONA " + data.main.temp + "ºC");
        console.log(weather);
      })
      .catch((err) => console.log(err));
  }
  
  return <BrowserRouter>
  
    <AllComponents user={user} weather={weather}/>  
  </BrowserRouter>
}

export default App;
