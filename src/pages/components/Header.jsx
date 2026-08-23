//IMAGENES
import bgHero from '../components/assets/Bg_Hero.png'
import yoHero from '../components/assets/yoenlawebpic.jpg'
import yoHeroSmall400 from '../components/assets/yoHeroSmall400.png'
import yoHeroMedium800 from '../components/assets/yoHeroMedium800.png'
import yoHeroLarge1200 from '../components/assets/yoHeroLarge1200.png'
import MagneticBotton from './MagneticBotton';

export function Header() {
  return (

    <div className="grid bg-transparent items-center  py-10 h-220"  id="inicio">
        <div className="flex justify-center">
      <img className="sm:w-30 md:w-30 lg:w-50 object-contain rounded-full" src={yoHero} alt="Foto perfil de Yokastina Diseñadora UXUI Frontend" srcset={`${yoHero} 400w, ${yoHero} 800w, ${yoHero} 1200w`}
      sizes="(max-width: 600px) 400px, 800px" />
      </div>
      <h1 class="efecto-mecanografia hidden md:block">Hola 👋🏽 soy Yoka, Diseñadora UXUI <br/>
y desarrolladora Frontend ✨</h1>
<h1 className="text-black font-bold text-4xl cherry-bomb-one-regular text-center block md:hidden">Hola 👋🏽 soy Yoka, Diseñadora UXUI <br/>
y desarrolladora Frontend ✨</h1>
<div className="text-center mt-5">
            <CatButton type="button">🐈 Trabajemos juntos</CatButton>

</div>
      </div>
      
  )
}

export function HeaderSingle() {
  return(
    <div className="grid grid-cols-1 items-center bg-rosachicle h-20 p-30">
                <h2 className="text-amarillobanana font-bold text-5xl cherry-bomb-one-regular text-center">Caso de estudio CuraDigital</h2>
            </div>
  )
}

export function CatButton() {
  return (
    <button className="
      relative 
      mt-4 
      px-6 
      py-3 
      bg-black 
      text-white
      text-lg 
      font-bold 
      rounded-2xl 
      transition-colors 
      duration-200
      
      /* Oreja Izquierda */
      before:content-[''] 
      before:absolute 
      before:-top-3 
      before:left-3 
      before:border-l-[10px] before:border-l-transparent 
      before:border-r-[10px] before:border-r-transparent 
      before:border-b-[14px] before:border-b-black
      before:hover:border-b-pink-400
      before:transition-colors
      before:duration-200

      /* Oreja Derecha */
      after:content-[''] 
      after:absolute 
      after:-top-3 
      after:right-3 
      after:border-l-[10px] after:border-l-transparent 
      after:border-r-[10px] after:border-r-transparent 
      after:border-b-[14px] after:border-b-black
      after:hover:border-b-pink-400
      after:transition-colors
      after:duration-200
    ">
      🐈 Trabajemos juntos
    </button>
  );
}
