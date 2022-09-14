import React from 'react'
import '../Contacte/contacte.css' 
import insta from '../../assets/img/instagram.png'
import facebook from '../../assets/img/facebook.png'

export const Contacte = () => {
  return ( <>
    <div className='container-contacte '>
      <div className='div-container'>
        <h1 className='titol-seccio'>Contacte</h1>
        <div className="content">        
          <h4 className='text-contact'>Tan si vols proporsar-nos alguna actuació com si tens cap dubte, escriu-nos i et respondrem el més aviat possible!</h4>
          <div className="wrapper">
            <form action='https://formsubmit.co/7377f071d8f1147d364a809a12fbbeaf ' method='POST'>
              <h4>Nom:</h4>
              <input className='input-form' type='text' name='name' required />

              <h4>El teu email:</h4>
              <input className='input-form' type='email' name='email' required />

              <h4>Missatge:</h4>
              <textarea className='' name='mensaje'></textarea>
              
              <input className='submit-button' onClick={()=> alert('Missatge enviat correctament!')} type='submit' value='Enviar' />
              <input type='hidden' name="_next" value='http://localhost:3000/contacte' />
              <input type='hidden' name="_captcha" value="false" />
            </form>
          
          </div>
          <div className='text-contact2'>
          <p className=''>Si ho prefereixes, ens pots escriure directament a vaquetes@gmail.com o a les nostres xarxes socials.</p>
          <p className=''>No oblidis seguir-nos!</p>
          
          <a href='https://instagram.com/vaquetes_guinardo?igshid=YmMyMTA2M2Y='><img alt='' className='redes2' src={insta} height='50' width='50' /></a>
          <a href='https://www.facebook.com/vaquetesdelguinardo'><img alt='' className='redes2' src={facebook} height='50' width='50' /> </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
