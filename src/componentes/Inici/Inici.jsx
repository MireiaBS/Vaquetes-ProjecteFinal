import React from 'react'
import '../Inici/inici.css'

export const Inici = () => {
  return (
  <div className='div-video'>
    <div className="article">
      <p className='p-inici'> Si encara no saps que fem... mira't aquest vídeo!</p>
    <iframe src="https://www.youtube.com/embed/-CU-n7xpKk0"
      title="Video Vaquetes"
      allow="autoplay;"
      allowFullScreen
      width='1060'
      height='600'
    />
    </div>
</div>
  )
}
