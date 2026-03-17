import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export function Menu() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="grid lg:grid-cols-[40%_60%] md:grid-cols-2 items-center lg:h-16 sm:h-20">
          <div className="lg:ml-10 sm:text-center">
            <span className="font-bold">Yokastina.com 🎉</span>
          </div>
          <div className="flex space-x-4 sm:justify-center">
            {/* <!-- Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" --> */}
            <a href="#" className="px-3 py-2 text-sm">
              <ScrollLink to="inicio" spy={true}
                smooth={true}
                offset={-70} // Ajusta esto según la altura de tu menú
                duration={500} className={location.pathname === "inicio" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Inicio</ScrollLink>
            </a>
            <a href="#" className="px-3 py-2 text-sm">
              <ScrollLink to="proyectos" spy={true}
                smooth={true}
                offset={-70} // Ajusta esto según la altura de tu menú
                duration={500} className={location.pathname === "proyectos" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Proyectos</ScrollLink>
            </a>
            <a href="#" className="px-3 py-2 text-sm">
              <ScrollLink to="habilidades" spy={true}
                smooth={true}
                offset={-70} // Ajusta esto según la altura de tu menú
                duration={500} className={location.pathname === "habilidades" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Habilidades</ScrollLink>
            </a>
            <a href="#" className="px-3 py-2 text-sm">
              <ScrollLink to="sobremi" spy={true}
                smooth={true}
                offset={-70} // Ajusta esto según la altura de tu menú
                duration={500} className={location.pathname === "sobremi" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Sobre mí</ScrollLink>
            </a>
            <a href="#" className="px-3 py-2 text-sm">
              <ScrollLink to="contacto" spy={true}
                smooth={true}
                offset={-70} // Ajusta esto según la altura de tu menú
                duration={500} className={location.pathname === "contacto" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Contacto</ScrollLink>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
