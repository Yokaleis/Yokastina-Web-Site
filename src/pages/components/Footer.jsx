//ICONOS
import { Instagram, Linkedin, Threads } from './Icons';

export function Footer() {
    return(
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 bg-amarillobanana/20 items-center text-center h-auto align-baseline p-10">
            <div className="gid grid-cols-2 justify-center">
              <a href="./Yoka Leis _ CV _ Ingeniera en Informática _ UI Designer _ FrontEnd _ Remoto.pdf" download className="bg-rosachicle/30 text-rosachicle font-bold text-lg mr-2 px-3 py-3 rounded-full">Descarga mi CV aquí 🤭📃✨</a>
              <ul className="mt-10">
                <li>Inicio</li>
                <li>Proyectos</li>
                <li>Habilidades</li>
                <li>Sobre mí</li>
                <li>Testimonios</li>
                <li>Contacto</li>
              </ul>
              </div>
            <div className="flex justify-center gap-6">
                <a href="https://www.threads.com/@yokastina" target="_blank" rel="noopener noreferrer"><Threads/></a>
                <a href="https://www.instagram.com/yokastina/" target="_blank" rel="noopener noreferrer"><Instagram/></a>
                <a href="https://www.linkedin.com/in/yokaleis/" target="_blank" rel="noopener noreferrer"><Linkedin/></a>
            </div>
        </div>
    )
}