import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { MenuButton, MenuItem, MenuItems, Menu } from '@headlessui/react';


export function MenuPrincipal() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">

          <div className='flex h-16 items-center'>

            <div className="inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button type="button" className=" items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                <Menu>
                  <MenuButton className="inline-flex items-center gap-2 rounded-md bg-transparent px-1.5 py-1.5 text-sm/6 font-semibold text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                  </MenuButton>

                  <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-full origin-top-right  bg-white p-6 text-sm/6 text-gray-600 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                  >
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 font-medium">
                        <a href="#" className="lg:px-3 lg:py-2 lg:text-sm sm:px-1 sm:py-1 sm:text-xs">
                          <ScrollLink to="inicio" spy={true}
                            smooth={true}
                            offset={-70} // Ajusta esto según la altura de tu menú
                            duration={500} className={location.pathname === "inicio" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Inicio</ScrollLink>
                        </a>

                      </button>
                    </MenuItem>
                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 font-medium">

                        <a href="#" className="lg:px-3 lg:py-2 lg:text-sm sm:px-1 sm:py-1 sm:text-xs">
                          <ScrollLink to="proyectos" spy={true}
                            smooth={true}
                            offset={-70} // Ajusta esto según la altura de tu menú
                            duration={500} className={location.pathname === "proyectos" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Proyectos</ScrollLink>
                        </a>
                      </button>
                    </MenuItem>

                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 font-medium">

                        <a href="#" className="lg:px-3 lg:py-2 lg:text-sm sm:px-1 sm:py-1 sm:text-xs">
                          <ScrollLink to="habilidades" spy={true}
                            smooth={true}
                            offset={-70} // Ajusta esto según la altura de tu menú
                            duration={500} className={location.pathname === "habilidades" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Habilidades</ScrollLink>
                        </a>
                      </button>
                    </MenuItem>

                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 font-medium">

                        <a href="#" className="lg:px-3 lg:py-2 lg:text-sm sm:px-1 sm:py-1 sm:text-xs">
                          <ScrollLink to="sobremi" spy={true}
                            smooth={true}
                            offset={-70} // Ajusta esto según la altura de tu menú
                            duration={500} className={location.pathname === "sobremi" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Sobre mí</ScrollLink>
                        </a>
                      </button>
                    </MenuItem>

                    <MenuItem>
                      <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-2 font-medium">

                        <a href="#" className="lg:px-3 lg:py-2 lg:text-sm sm:px-1 sm:py-1 sm:text-xs">
                          <ScrollLink to="contacto" spy={true}
                            smooth={true}
                            offset={-70} // Ajusta esto según la altura de tu menú
                            duration={500} className={location.pathname === "contacto" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Contacto</ScrollLink>
                        </a>
                      </button>
                    </MenuItem>

                  </MenuItems>
                </Menu>
              </button>
            </div>

            <div className="flex shrink-0 items-center">
              <span className="font-bold">Yokastina.com 🎉</span>
            </div>

            <div className="flex content-center m-auto sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a href="#" className="lg:px-3 lg:py-2 lg:text-sm sm:px-1 sm:py-1 sm:text-xs">
                    <ScrollLink to="inicio" spy={true}
                      smooth={true}
                      offset={-70} // Ajusta esto según la altura de tu menú
                      duration={500} className={location.pathname === "inicio" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Inicio</ScrollLink>
                  </a>
                  <a href="#" className="lg:px-3 lg:py-2 lg:text-sm sm:px-1 sm:py-1 sm:text-xs">
                    <ScrollLink to="proyectos" spy={true}
                      smooth={true}
                      offset={-70} // Ajusta esto según la altura de tu menú
                      duration={500} className={location.pathname === "proyectos" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Proyectos</ScrollLink>
                  </a>
                  <a href="#" className="lg:px-3 lg:py-2 lg:text-sm sm:px-1 sm:py-1 sm:text-xs">
                    <ScrollLink to="habilidades" spy={true}
                      smooth={true}
                      offset={-70} // Ajusta esto según la altura de tu menú
                      duration={500} className={location.pathname === "habilidades" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Habilidades</ScrollLink>
                  </a>
                  <a href="#" className="lg:px-3 lg:py-2 lg:text-sm sm:px-1 sm:py-1 sm:text-xs">
                    <ScrollLink to="sobremi" spy={true}
                      smooth={true}
                      offset={-70} // Ajusta esto según la altura de tu menú
                      duration={500} className={location.pathname === "sobremi" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Sobre mí</ScrollLink>
                  </a>
                  <a href="#" className="lg:px-3 lg:py-2 lg:text-sm sm:px-1 sm:py-1 sm:text-xs">
                    <ScrollLink to="contacto" spy={true}
                      smooth={true}
                      offset={-70} // Ajusta esto según la altura de tu menú
                      duration={500} className={location.pathname === "contacto" ? "text-black border-2 py-1.5 border-spacing-2 border-transparent border-b-secondary" : "text-gray-600 hover:text-rosachicle"}>Contacto</ScrollLink>
                  </a>
                </div>
              </div>
            </div>

          </div>



        </div>
      </nav>
    </>
  )
}
