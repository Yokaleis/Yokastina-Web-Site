import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export function Menu() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="grid grid-cols-[40%_60%] items-center h-16">
          <div className="ml-10">
            <span className="font-bold">Yokastina.com 🎉</span>
          </div>
          <div className="flex space-x-4">
            {/* <!-- Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" --> */}
            <a href="#" className="px-3 py-2 text-sm font-medium">
              <ScrollLink to="inicio" spy={true}
                smooth={true}
                offset={-70} // Ajusta esto según la altura de tu menú
                duration={500} className={location.pathname === "/" ? "text-rosachicle border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-rosachicle hover:text-azulcielito"}>Inicio</ScrollLink>
            </a>
            <a href="#" className="rounded-md px-3 py-2 text-sm text-gray-600 hover:text-secondary">
              <ScrollLink to="proyectos" spy={true}
                smooth={true}
                offset={-70} // Ajusta esto según la altura de tu menú
                duration={500} className={location.pathname === "/" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Proyectos</ScrollLink>
            </a>
            <a href="#" className="rounded-md px-3 py-2 text-sm text-gray-600 hover:text-secondary">
              <ScrollLink to="habilidades" spy={true}
                smooth={true}
                offset={-70} // Ajusta esto según la altura de tu menú
                duration={500} className={location.pathname === "/#habilidades" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Habilidades</ScrollLink>
            </a>
            <a href="#" className="rounded-md px-3 py-2 text-sm text-gray-600 hover:text-secondary">
              <ScrollLink to="sobremi" spy={true}
                smooth={true}
                offset={-70} // Ajusta esto según la altura de tu menú
                duration={500} className={location.pathname === "/" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Sobre mí</ScrollLink>
            </a>
            <a href="#" className="rounded-md px-3 py-2 text-sm text-gray-600 hover:text-secondary">
              <ScrollLink to="contacto" spy={true}
                smooth={true}
                offset={-70} // Ajusta esto según la altura de tu menú
                duration={500} className={location.pathname === "/" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Contacto</ScrollLink>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
