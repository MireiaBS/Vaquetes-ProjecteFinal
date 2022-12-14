import React from 'react'
import '../QuiSom/quisom.css'
import vaq1 from '../../assets/img/fotovaq2.jpg'

export const QuiSom = () => {
  return (
    <div className='container-quisom'>
      <div className="article">
        <h1 className='titol-seccio'>Qui som</h1>
        <div className='text-quisom'>
          <p className='text-titol'>Vaquetes del Guinardó</p>
          <img className='vaq1' src={vaq1} alt=''></img>
          <h4>Vaquetes neix el Setembre del 2012. </h4>
          <p>
            Som un grup de percussió format per joves, vinculats a la Colla de Diables Malignes del Guinardó, pertanyent al Grup Torxa. El nostre grup es dedica a dinamitzar, a través de la percussió, diferents activitats lúdiques i festivitats populars amb l'objectiu de portar el ritme al Guinardó i els barris de la ciutat que ho requereixin.
          </p>
          <p>
            Actualment el nostre grup consta de:
            <p> - 2 timbes, 2 caixes, un repenique per part del aguts.</p>
            <p> - 3 surdos i 2 contres per part del greus.</p>
            <p> - I un total de 7 tabals!</p>
          </p>
          <p>Ja saps, si tens ganes de ballar, saltar i disfrutar, segueix-nos! </p>

        </div>
      </div>
    </div>
  )
}
