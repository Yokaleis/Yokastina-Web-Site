import React from 'react'

import bgHero from '../components/assets/Bg_Hero.png';
import yoHero from '../components/assets/yoHero.svg'

export function Header() {
  return (

    <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center h-full bg-cover bg-center" style={{ backgroundImage: `url(${bgHero})` }}>
      <div className="m-10 p-15">
        <span className="text-8xl cherry-bomb-one-regular text-rosachicle">Hola 👋🏽</span>
        <h1 className="text-6xl font-bold text-rosachicle">Bienvenido a mi laboratorio de diseño y desarrollo</h1>
      </div>
      <div className="flex justify-center p-5">
      <img className="w-112.5" src={yoHero} alt="" srcset="" />
      </div>
</div>
  )
}
