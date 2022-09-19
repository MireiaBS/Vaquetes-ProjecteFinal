import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Nav } from '../Nav/Nav'
import {Inici} from '../Inici/Inici'
import {QuiSom} from '../QuiSom/QuiSom'
import {Espectacles} from '../Espectacles/Espectacles'
import {Contacte} from '../Contacte/Contacte'
import { Login } from '../Login/Login';

export const AllComponents = ({user}) => {
  return ( <Routes>

            <Route  path='/' className='display' element={
                   <>      
                <Nav  user={user}/>
                <Inici />
              </> 
            }>
            </Route>

            <Route path='/quisom' element={
              <>
                <Nav user={user}/>
                <QuiSom />
              </>
            }>
            </Route>

            <Route path='/espectacles' element={
              <>
                <Nav user={user}/>
                <Espectacles user={user}/>
              </>
            }>
            </Route>
            
            <Route path='/contacte' element={
              <>
                <Nav user={user}/>
                <Contacte />
              </>
            }>
            </Route>
            
            <Route path='/quisom' element={
              <>
                <Nav user={user}/>
                <QuiSom />
              </>
            }>
            </Route>
            
            <Route path='/registre' element={
              <>                
                <Login user={user}/>
              </>
            }>
            </Route>
            
            
         </Routes>
  )
}

export default AllComponents;
