import React from 'react'
import '../Contacte/contacte.css' 

export const Contacte = () => {
  return ( <>
    <div className='container-contacte '>
      <div className='div-container'>
        <h3 className='text-contact'>Tan si vols proporsar-nos alguna actuació com si tens cap dubte, escriu-nos i et respondrem el més aviat possible!</h3>
        <div className="wrapper">
        <form action='https://formsubmit.co/7377f071d8f1147d364a809a12fbbeaf ' method='POST'>
          <h4>Nom:</h4>
          <input className='input-form' type='text' name='name' required />

          <h4>El teu email:</h4>
          <input className='input-form' type='email' name='email' required />

          <h4>Missatge:</h4>
          <textarea className='input-form' name='mensaje'></textarea>
          
          <input className='input-form' type='submit' value='Enviar' />
          <input type='hidden' name="_next" value='http://localhost:3000/contacte' />
          <input type='hidden' name="_captcha" value="false" />
        </form>
        </div>
      </div>
    </div>
    </>
  )
}
