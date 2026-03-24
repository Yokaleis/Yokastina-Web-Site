//IMAGENES
import bgHero from '../components/assets/Bg_Hero.png'
import yoHero from '../components/assets/yoHero.svg'
import yoHeroSmall400 from '../components/assets/yoHeroSmall400.png'
import yoHeroMedium800 from '../components/assets/yoHeroMedium800.png'
import yoHeroLarge1200 from '../components/assets/yoHeroLarge1200.png'

export function Header() {
  return (

    <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center py-20 bg-cover bg-center" style={{ backgroundImage: `url(${bgHero})` }} id="inicio">
      <div className="m-10 lg:p-15 sm:p-5">
        <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl cherry-bomb-one-regular text-rosachicle">Hola 👋🏽</span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-rosachicle">Bienvenido a mi laboratorio de diseño y desarrollo</h1>
      </div>
      <div className="flex justify-center p-5">
      <img className="w-full sm:w-60 md:w-80 lg:w-100 h-auto object-contain" src={yoHero} alt="Foto perfil de Yokastina Diseñadora UXUI Frontend" srcset={`${yoHeroSmall400} 400w, ${yoHeroMedium800} 800w, ${yoHeroLarge1200} 1200w`}
      sizes="(max-width: 600px) 400px, 800px" />
      </div>
</div>
  )
}
