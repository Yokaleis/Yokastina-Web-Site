import React from 'react'
import { Instagram, Linkedin, Twitter } from './Icons'

export function Footer() {
    return(
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 bg-amarillobanana/20 items-center text-center h-auto align-baseline p-10">
            <div className="gid grid-cols-2 justify-center">
              <span className="bg-rosachicle/30 text-rosachicle font-bold text-lg mr-2 px-3 py-3 rounded-full">Descarga mi CV aquí 🤭🎉</span>
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
                <Instagram/>
                <Twitter/>
                <Linkedin/>
            </div>
        </div>
    )
}